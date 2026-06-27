#!/usr/bin/env node
import { spawn } from 'node:child_process';
import { createServer } from 'node:net';

const port = Number(process.env.ROUTE_CHECK_PORT ?? 3210);
const host = '127.0.0.1';
const externalBaseUrl = process.env.ROUTE_BASE_URL;
const baseUrl = externalBaseUrl ?? `http://${host}:${port}`;
const timeoutMs = Number(process.env.ROUTE_CHECK_TIMEOUT_MS ?? 75_000);

const routes = [
  '/',
  '/about',
  '/evidence',
  '/en',
  '/en/about',
  '/en/evidence',
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
let serverExited = false;
let effectiveBaseUrl = baseUrl;

try {
  if (!externalBaseUrl) {
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
