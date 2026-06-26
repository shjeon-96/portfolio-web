#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const sourceRepo = process.env.SOURCE_REPO ?? '/Users/jeonseunghun/dev/next/nb-front';
const since = process.env.SINCE ?? '2026-04-01';
const author = process.env.AUTHOR ?? '';
const output = process.env.OUTPUT ?? 'tmp/changelog-candidates.json';

const categoryRules = [
  {
    category: 'export-deploy',
    patterns: [/export/i, /liquid/i, /artifact/i, /deploy/i, /wrapper/i],
    publicTitle: 'Export and deploy parity work',
  },
  {
    category: 'editor-engine',
    patterns: [/variant/i, /component/i, /owner/i, /canvas/i, /position/i, /root/i],
    publicTitle: 'Editor engine ownership work',
  },
  {
    category: 'performance',
    patterns: [/perf/i, /performance/i, /invalidation/i, /resize/i, /preview/i, /hydration/i],
    publicTitle: 'Editor performance guardrails',
  },
  {
    category: 'testing-ci',
    patterns: [/test/i, /ci/i, /benchmark/i, /coverage/i],
    publicTitle: 'Regression and verification work',
  },
  {
    category: 'ai-workflow',
    patterns: [/codex/i, /claude/i, /agent/i, /review/i, /follow/i],
    publicTitle: 'Agent-assisted review workflow',
  },
  {
    category: 'admin-ops',
    patterns: [/admin/i, /auth/i, /role/i, /permission/i, /dashboard/i],
    publicTitle: 'Operational interface work',
  },
];

function redactCommitSubject(subject) {
  return subject
    .replace(/#[0-9]+/g, '[redacted-reference]')
    .replace(/\bPR\b\s*[0-9]*/gi, 'code review')
    .replace(/\b[a-f0-9]{7,40}\b/gi, '[redacted-hash]')
    .replace(/\([^)]*\)/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function categorize(subject) {
  const matchedRule = categoryRules.find((rule) => rule.patterns.some((pattern) => pattern.test(subject)));
  return matchedRule ?? {
    category: 'editor-engine',
    publicTitle: 'Product engineering maintenance',
  };
}

function buildCandidate(category, subjects) {
  const samples = subjects.slice(0, 8).map(redactCommitSubject);

  return {
    category: category.category,
    publicTitle: category.publicTitle,
    sourceCommitCount: subjects.length,
    publicProblem: publicProblemFor(category.category),
    publicApproach: publicApproachFor(category.category),
    publicResult: publicResultFor(category.category),
    samplePublicSubjects: samples,
  };
}

function publicProblemFor(category) {
  const problems = {
    'export-deploy': 'Generated artifacts can drift from editor state when output rules are interpreted in separate paths.',
    'editor-engine': 'Complex editor features become fragile when ownership boundaries are unclear.',
    performance: 'Large visual editing surfaces need responsive interactions as documents and workflows grow.',
    'testing-ci': 'Source-level changes need regression checks that match user-visible behavior and generated output.',
    'ai-workflow': 'Large codebases need a repeatable way to narrow causes without accepting unverified agent suggestions.',
    'admin-ops': 'Operational interfaces need clear states, permissions, and next actions under real usage conditions.',
  };
  return problems[category] ?? problems['editor-engine'];
}

function publicApproachFor(category) {
  const approaches = {
    'export-deploy': [
      'Group output-related commits into rendering, visibility, wrapper, and artifact contract themes.',
      'Remove private references and rewrite subjects into public-safe engineering changes.',
      'Promote repeated themes into changelog entries with problem, approach, and result.',
    ],
    'editor-engine': [
      'Group variant, component, ownership, canvas, and position commits by product behavior.',
      'Rewrite internal identifiers into anonymized editor-engine concepts.',
      'Use repeated owner-boundary patterns to drive public case study language.',
    ],
    performance: [
      'Group preview, resize, hydration, and invalidation commits by interaction surface.',
      'Keep public language focused on responsiveness and verification rather than internal profiling details.',
      'Promote repeated optimization themes into performance changelog entries.',
    ],
    'testing-ci': [
      'Group test and verification commits by the behavior they lock.',
      'Avoid exposing private test names when they encode internal implementation details.',
      'Use public result language around regression prevention and generated output confidence.',
    ],
    'ai-workflow': [
      'Group review and follow-up work as workflow evidence instead of raw activity.',
      'Remove private references and focus on root-cause narrowing and verification.',
      'Represent AI as an investigation accelerator, not an unreviewed code author.',
    ],
    'admin-ops': [
      'Group permission, dashboard, and operational-state work by user workflow.',
      'Remove customer or private operational details.',
      'Use public result language around state clarity and operator confidence.',
    ],
  };
  return approaches[category] ?? approaches['editor-engine'];
}

function publicResultFor(category) {
  const results = {
    'export-deploy': 'The changelog can describe artifact parity without exposing private output details.',
    'editor-engine': 'The changelog can show product-system ownership without publishing source code or issue references.',
    performance: 'The changelog can show interaction-quality work without exposing internal performance traces.',
    'testing-ci': 'The changelog can show verification discipline without exposing private test fixtures.',
    'ai-workflow': 'The changelog can show agent-assisted workflow maturity without exposing private review threads.',
    'admin-ops': 'The changelog can show operational product thinking without exposing customer or internal data.',
  };
  return results[category] ?? results['editor-engine'];
}

const raw = execFileSync(
  'git',
  [
    '-C',
    sourceRepo,
    'log',
    ...(author ? [`--author=${author}`] : []),
    '--no-merges',
    `--since=${since}`,
    '--pretty=format:%ad%x09%s',
    '--date=short',
  ],
  { encoding: 'utf8' },
);

const grouped = new Map();

for (const line of raw.split('\n')) {
  const [, subject] = line.split('\t');
  if (!subject) {
    continue;
  }
  const category = categorize(subject);
  const key = category.category;
  const next = grouped.get(key) ?? { category, subjects: [] };
  next.subjects.push(subject);
  grouped.set(key, next);
}

const candidates = Array.from(grouped.values())
  .map(({ category, subjects }) => buildCandidate(category, subjects))
  .sort((a, b) => b.sourceCommitCount - a.sourceCommitCount);

const payload = {
  generatedAt: new Date().toISOString(),
  source: {
    sourceRepo,
    since,
    author: author || '[all authors]',
    rawCommitSubjects: raw.split('\n').filter(Boolean).length,
    note: 'Raw commit subjects are local-only. Commit hashes, private references, and raw issue identifiers are not included in public site data.',
  },
  candidates,
};

const outputPath = resolve(output);
mkdirSync(resolve(outputPath, '..'), { recursive: true });
writeFileSync(outputPath, `${JSON.stringify(payload, null, 2)}\n`);

console.log(`Wrote ${candidates.length} public changelog candidate groups to ${output}`);
