#!/usr/bin/env node
import { spawn } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { createServer } from 'node:net';

const port = Number(process.env.ROUTE_CHECK_PORT ?? 3210);
const host = 'localhost';
const externalBaseUrl = process.env.ROUTE_BASE_URL;
const baseUrl = externalBaseUrl ?? `http://${host}:${port}`;
const existingDevBaseUrl = process.env.ROUTE_EXISTING_BASE_URL ?? 'http://localhost:3000';
const timeoutMs = Number(process.env.ROUTE_CHECK_TIMEOUT_MS ?? 75_000);

const publicRoutes = JSON.parse(readFileSync(new URL('../lib/public-routes.json', import.meta.url), 'utf8'));
const portfolioSiteUrl = readPortfolioSiteUrl();
validatePublicRoutes(publicRoutes);
const homeRoute = getRequiredRoute(publicRoutes, 'home');
const routeContentExpectations = buildRouteContentExpectations(publicRoutes);
const publicRoutePaths = [...routeContentExpectations.keys()];
const routes = [...publicRoutePaths, '/sitemap.xml', '/robots.txt'];

let server;
let serverExited = false;
let effectiveBaseUrl = baseUrl;

try {
  if (!externalBaseUrl) {
    const existingServer = await checkRoute(
      `${existingDevBaseUrl}${homeRoute.paths.ko}`,
      homeRoute.checkSnippets.ko,
    );

    if (existingServer.ok) {
      effectiveBaseUrl = existingDevBaseUrl;
      console.log(`Using existing route check server at ${effectiveBaseUrl}.`);
    } else {
      await assertPortAvailable(host, port);

      server = spawn('npm', ['run', 'dev', '--', '--hostname', host, '--port', String(port)], {
        env: {
          ...process.env,
          NEXT_TELEMETRY_DISABLED: '1',
        },
        stdio: ['ignore', 'pipe', 'pipe'],
      });
      server.on('exit', () => {
        serverExited = true;
      });

      let output = '';
      server.stdout.on('data', (chunk) => {
        output += chunk.toString();
      });
      server.stderr.on('data', (chunk) => {
        output += chunk.toString();
      });

      effectiveBaseUrl = await waitForServer(baseUrl, timeoutMs, () => output);
    }
  }

  const failures = [];
  for (const route of routes) {
    const result = await checkRoute(`${effectiveBaseUrl}${route}`, routeContentExpectations.get(route));
    if (!result.ok) {
      failures.push(`${route} ${result.reason}`);
    }
  }

  const sitemapResult = await checkSitemap(`${effectiveBaseUrl}/sitemap.xml`, publicRoutePaths, portfolioSiteUrl);
  if (!sitemapResult.ok) {
    failures.push(`/sitemap.xml ${sitemapResult.reason}`);
  }

  const robotsResult = await checkRobots(`${effectiveBaseUrl}/robots.txt`, portfolioSiteUrl);
  if (!robotsResult.ok) {
    failures.push(`/robots.txt ${robotsResult.reason}`);
  }

  if (failures.length > 0) {
    console.error('Route response check failed.');
    for (const failure of failures) {
      console.error(`- ${failure}`);
    }
    process.exit(1);
  }

  console.log(`Route response check passed (${routes.length} routes).`);
} finally {
  if (server) {
    server.kill('SIGTERM');
  }
}

async function waitForServer(url, timeout, getOutput) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < timeout) {
    if (serverExited) {
      throw new Error(`Next dev server exited before route checks.\n${getOutput().slice(-4000)}`);
    }

    const response = await fetchQuietly(url);
    if (response?.status && response.status < 500) {
      return url;
    }

    await delay(500);
  }

  throw new Error(`Timed out waiting for Next dev server at ${url}.\n${getOutput().slice(-4000)}`);
}

async function checkRoute(url, expectedSnippets) {
  const result = await fetchText(url);
  if (!result.ok) {
    return result;
  }

  if (expectedSnippets) {
    const missingSnippet = expectedSnippets.find((snippet) => !result.body.includes(snippet));
    if (missingSnippet) {
      return { ok: false, reason: `did not include expected content: ${JSON.stringify(missingSnippet)}` };
    }
  }

  return { ok: true };
}

async function checkSitemap(url, expectedPaths, expectedOrigin) {
  const result = await fetchText(url);
  if (!result.ok) {
    return result;
  }

  const expectedPathnames = new Set(expectedPaths);
  const locPathnames = new Set();
  const locPattern = /<loc>([^<]+)<\/loc>/g;
  let match;

  while ((match = locPattern.exec(result.body)) !== null) {
    try {
      const locUrl = new URL(match[1]);
      if (locUrl.origin !== expectedOrigin) {
        return { ok: false, reason: `included URL outside canonical origin: ${locUrl.href}` };
      }

      if (locUrl.search || locUrl.hash) {
        return { ok: false, reason: `included non-canonical URL decoration: ${locUrl.href}` };
      }

      const pathname = locUrl.pathname;
      if (locPathnames.has(pathname)) {
        return { ok: false, reason: `included duplicate sitemap path: ${pathname}` };
      }

      locPathnames.add(pathname);
    } catch {
      return { ok: false, reason: `included invalid sitemap URL: ${JSON.stringify(match[1])}` };
    }
  }

  const extraPath = [...locPathnames].find((path) => !expectedPathnames.has(path));
  if (extraPath) {
    return { ok: false, reason: `included unregistered public route path: ${extraPath}` };
  }

  const missingPath = expectedPaths.find((path) => !locPathnames.has(path));
  if (missingPath) {
    return { ok: false, reason: `did not include public route path: ${missingPath}` };
  }

  return { ok: true };
}

async function checkRobots(url, expectedOrigin) {
  const result = await fetchText(url);
  if (!result.ok) {
    return result;
  }

  const sitemapLines = result.body
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => /^Sitemap:/i.test(line));

  if (sitemapLines.length !== 1) {
    return { ok: false, reason: `included ${sitemapLines.length} sitemap directives instead of 1` };
  }

  const expectedSitemapUrl = `${expectedOrigin}/sitemap.xml`;
  const sitemapUrl = sitemapLines[0].replace(/^Sitemap:\s*/i, '').trim();
  if (sitemapUrl !== expectedSitemapUrl) {
    return { ok: false, reason: `declared sitemap ${sitemapUrl} instead of ${expectedSitemapUrl}` };
  }

  return { ok: true };
}

async function fetchText(url) {
  const response = await fetchQuietly(url);
  if (!response) {
    return { ok: false, reason: 'request failed' };
  }

  if (response.status < 200 || response.status >= 400) {
    return { ok: false, reason: `returned HTTP ${response.status}` };
  }

  const body = await response.text();
  if (body.trim().length === 0) {
    return { ok: false, reason: 'returned an empty body' };
  }

  return { ok: true, body };
}

async function fetchQuietly(url) {
  try {
    return await fetch(url);
  } catch {
    return null;
  }
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function readPortfolioSiteUrl() {
  const source = readFileSync(new URL('../lib/site-links.ts', import.meta.url), 'utf8');
  const match = source.match(/export const PORTFOLIO_SITE_URL = '([^']+)';/);

  if (!match) {
    throw new Error('Missing PORTFOLIO_SITE_URL in lib/site-links.ts.');
  }

  const siteUrl = new URL(match[1]);
  if (siteUrl.pathname !== '/' || siteUrl.search || siteUrl.hash) {
    throw new Error(`PORTFOLIO_SITE_URL must be an origin-only URL: ${match[1]}`);
  }

  return siteUrl.origin;
}

function assertPortAvailable(hostname, portNumber) {
  return new Promise((resolve, reject) => {
    const probe = createServer();

    probe.once('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        reject(
          new Error(
            `Route check port ${portNumber} is already in use. Stop that process, set ROUTE_CHECK_PORT, or pass ROUTE_BASE_URL explicitly.`,
          ),
        );
        return;
      }

      reject(error);
    });

    probe.once('listening', () => {
      probe.close(resolve);
    });

    probe.listen(portNumber, hostname);
  });
}

function buildRouteContentExpectations(routeDefinitions) {
  const expectations = new Map();

  for (const route of routeDefinitions) {
    expectations.set(route.paths.ko, route.checkSnippets.ko);
    expectations.set(route.paths.en, route.checkSnippets.en);
  }

  return expectations;
}

function validatePublicRoutes(routeDefinitions) {
  if (!Array.isArray(routeDefinitions) || routeDefinitions.length === 0) {
    throw new Error('Public route registry must be a non-empty array.');
  }

  const routeIds = new Set();
  const routePaths = new Map();
  const locales = ['ko', 'en'];

  for (const route of routeDefinitions) {
    if (!route?.id || typeof route.id !== 'string') {
      throw new Error('Public route is missing a string id.');
    }

    if (routeIds.has(route.id)) {
      throw new Error(`Duplicate public route id: ${route.id}`);
    }

    routeIds.add(route.id);

    for (const locale of locales) {
      const routePath = route.paths?.[locale];
      if (typeof routePath !== 'string' || !routePath.startsWith('/')) {
        throw new Error(`Public route ${route.id} is missing an absolute ${locale} path.`);
      }

      const existingRoute = routePaths.get(routePath);
      if (existingRoute) {
        throw new Error(`Duplicate public route path: ${routePath} (${existingRoute} and ${route.id}.${locale})`);
      }

      routePaths.set(routePath, `${route.id}.${locale}`);

      const snippets = route.checkSnippets?.[locale];
      if (
        !Array.isArray(snippets) ||
        snippets.length === 0 ||
        snippets.some((snippet) => typeof snippet !== 'string' || snippet.trim().length === 0)
      ) {
        throw new Error(`Public route ${route.id} is missing non-empty ${locale} check snippets.`);
      }
    }
  }
}

function getRequiredRoute(routeDefinitions, routeId) {
  const route = routeDefinitions.find((definition) => definition.id === routeId);

  if (!route) {
    throw new Error(`Missing required public route id: ${routeId}`);
  }

  return route;
}
