#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { existsSync, statSync, readFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const textExtensions = new Set([
  '.css',
  '.html',
  '.js',
  '.json',
  '.jsx',
  '.md',
  '.mjs',
  '.ts',
  '.tsx',
  '.txt',
  '.yaml',
  '.yml',
]);

const sensitivePathPatterns = [
  /^\.env(?:$|\.)/,
  /(?:^|\/)\.env(?:$|\.)/,
  /(?:^|\/).*\.pem$/,
  /(?:^|\/).*\.key$/,
  /(?:^|\/).*\.p8$/,
  /(?:^|\/).*\.p12$/,
  /(?:^|\/).*\.jks$/,
  /(?:^|\/).*\.keystore$/,
  /(?:^|\/).*\.mobileprovision$/,
  /(?:^|\/).*id_rsa$/,
  /(?:^|\/).*id_ed25519$/,
  /(?:^|\/).*id_ecdsa$/,
  /(?:^|\/).*id_dsa$/,
];

const tokenRules = [
  {
    label: 'GitHub token',
    pattern: new RegExp(`(?:ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9_]{20,}`),
  },
  {
    label: 'GitHub fine-grained token',
    pattern: new RegExp(`${['github', 'pat'].join('_')}_[A-Za-z0-9_]{20,}`),
  },
  {
    label: 'OpenAI-style API key',
    pattern: new RegExp(`${['s', 'k'].join('')}-[A-Za-z0-9_-]{20,}`),
  },
  {
    label: 'Slack token',
    pattern: /xox[baprs]-[A-Za-z0-9-]{20,}/,
  },
  {
    label: 'Secret assignment',
    pattern: new RegExp(`\\b(?:${['api', 'key'].join('[_-]?')}|${['access', 'token'].join('[_-]?')}|${['auth', 'token'].join('[_-]?')}|${['client', 'secret'].join('[_-]?')}|${['private', 'key'].join('[_-]?')}|${['pass', 'word'].join('')})\\s*[:=]\\s*['"][^'"]{8,}['"]`, 'i'),
  },
];

const publicRepoRules = [
  {
    label: 'Local absolute user path',
    pattern: new RegExp(escapeRegExp(['/Users', 'jeonseunghun'].join('/'))),
  },
  {
    label: 'Private source repository name',
    pattern: new RegExp(`\\b${['nb', 'front'].join('-')}\\b`, 'i'),
  },
  {
    label: 'Private organization name',
    pattern: /\bWEEDSOFT\b|\bitweed\b/i,
  },
  {
    label: 'Private issue or PR reference',
    pattern: /\b(?:issue|issues|pr|pull request|pull requests)\s*#?\d{1,6}\b/i,
  },
  {
    label: 'Korean private issue reference',
    pattern: /\b(?:이슈|PR|피알)\s*#?\d{1,6}\b/i,
  },
  {
    label: 'Internal customer detail',
    pattern: new RegExp([
      ['고객', '사'].join(''),
      ['고객', '명'].join(''),
      ['상점', '명'].join(''),
      ['스토어', '명'].join(''),
    ].join('|')),
  },
];

const files = getCandidateFiles();
const findings = [];

for (const file of files) {
  if (sensitivePathPatterns.some((pattern) => pattern.test(file))) {
    findings.push({
      file,
      line: 1,
      label: 'Sensitive file path',
      preview: 'Do not commit environment files, keys, or private credentials.',
    });
    continue;
  }

  const absolutePath = path.join(root, file);
  if (!existsSync(absolutePath) || !statSync(absolutePath).isFile()) {
    continue;
  }

  const buffer = readFileSync(absolutePath);
  if (buffer.includes(0) || buffer.length > 2_000_000) {
    continue;
  }

  const content = buffer.toString('utf8');
  const rules = shouldApplyPublicContentRules(file)
    ? [...tokenRules, ...publicRepoRules]
    : tokenRules;

  for (const rule of rules) {
    const match = rule.pattern.exec(content);
    if (!match) {
      continue;
    }

    findings.push({
      file,
      line: lineNumberForIndex(content, match.index),
      label: rule.label,
      preview: linePreview(content, match.index),
    });
  }
}

if (findings.length > 0) {
  console.error('Public repository safety check failed.');
  for (const finding of findings) {
    console.error(`- ${finding.file}:${finding.line} ${finding.label}`);
    console.error(`  ${finding.preview}`);
  }
  process.exit(1);
}

console.log(`Public repository safety check passed (${files.length} files scanned).`);

function getCandidateFiles() {
  const output = execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard', '-z'], {
    cwd: root,
    encoding: 'utf8',
  });

  return output
    .split('\0')
    .filter(Boolean)
    .filter((file) => {
      if (file.startsWith('.git/') || file.startsWith('.next/') || file.startsWith('node_modules/')) {
        return false;
      }

      if (sensitivePathPatterns.some((pattern) => pattern.test(file))) {
        return true;
      }

      const extension = path.extname(file);
      return textExtensions.has(extension) || path.basename(file).startsWith('.env');
    });
}

function shouldApplyPublicContentRules(file) {
  const basename = path.basename(file);
  if (basename === 'package-lock.json') {
    return false;
  }

  return true;
}

function lineNumberForIndex(content, index) {
  return content.slice(0, index).split('\n').length;
}

function linePreview(content, index) {
  const lineStart = content.lastIndexOf('\n', index) + 1;
  const lineEndIndex = content.indexOf('\n', index);
  const lineEnd = lineEndIndex === -1 ? content.length : lineEndIndex;
  return content.slice(lineStart, lineEnd).trim().slice(0, 180);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
