#!/usr/bin/env node
import { spawn } from 'node:child_process';

const port = Number(process.env.ROUTE_CHECK_PORT ?? 3210);
const externalBaseUrl = process.env.ROUTE_BASE_URL;
const baseUrl = externalBaseUrl ?? `http://127.0.0.1:${port}`;
const timeoutMs = Number(process.env.ROUTE_CHECK_TIMEOUT_MS ?? 75_000);

const routes = [
  '/',
  '/about',
  '/en',
  '/en/about',
  '/case-studies',
  '/en/case-studies',
  '/case-studies/ast-editor-engine',
  '/en/case-studies/ast-editor-engine',
  '/changelog',
  '/en/changelog',
  '/skills',
  '/en/skills',
  '/ai-workflow',
  '/en/ai-workflow',
  '/sitemap.xml',
  '/robots.txt',
];

let server;
let effectiveBaseUrl = baseUrl;

try {
  if (!externalBaseUrl) {
    server = spawn('npm', ['run', 'dev', '--', '--port', String(port)], {
      env: {
        ...process.env,
        NEXT_TELEMETRY_DISABLED: '1',
      },
      stdio: ['ignore', 'pipe', 'pipe'],
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

  const failures = [];
  for (const route of routes) {
    const result = await checkRoute(`${effectiveBaseUrl}${route}`);
    if (!result.ok) {
      failures.push(`${route} ${result.reason}`);
    }
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
    const response = await fetchQuietly(url);
    if (response?.status && response.status < 500) {
      return url;
    }

    if (server?.exitCode !== null) {
      const existingServerUrl = getExistingServerUrl(getOutput());
      if (existingServerUrl) {
        return existingServerUrl;
      }

      throw new Error(`Next dev server exited before route checks.\n${getOutput().slice(-4000)}`);
    }

    await delay(500);
  }

  throw new Error(`Timed out waiting for Next dev server at ${url}.\n${getOutput().slice(-4000)}`);
}

function getExistingServerUrl(output) {
  const match = output.match(/existing server at (https?:\/\/[^\s,]+)/i);
  return match?.[1] ?? null;
}

async function checkRoute(url) {
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

  return { ok: true };
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
