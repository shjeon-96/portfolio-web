#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const sourceRepo = process.env.SOURCE_REPO;
const sourceRepos = process.env.SOURCE_REPOS?.split(',').map((repo) => repo.trim()).filter(Boolean) ?? [];
const useRegisteredRepos = process.env.REGISTERED_REPOS === '1';
const searchRoot = process.env.REPO_SEARCH_ROOT ?? '/Volumes/SSD/project';
const since = process.env.SINCE ?? '2026-04-01';
const author = process.env.AUTHOR ?? '';
const output = process.env.OUTPUT ?? 'tmp/changelog-candidates.json';

if (!sourceRepo && sourceRepos.length === 0 && !useRegisteredRepos) {
  console.error(
    'SOURCE_REPO is required. Example: SOURCE_REPO=/path/to/local/repo npm run changelog:candidates\n' +
      'For multiple repos, use SOURCE_REPOS=/repo/a,/repo/b. For portfolio-registered GitHub repos, use REGISTERED_REPOS=1.',
  );
  process.exit(1);
}

const categoryRules = [
  {
    category: 'mobile-release',
    patterns: [
      /expo/i,
      /eas/i,
      /ios/i,
      /android/i,
      /revenuecat/i,
      /subscription/i,
      /iap/i,
      /store/i,
      /widget/i,
      /native/i,
      /release/i,
      /app store/i,
    ],
    publicTitle: 'Mobile release boundary work',
  },
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

function normalizeRemoteUrl(url) {
  return url
    .replace(/^git@github\.com:/, 'https://github.com/')
    .replace(/\.git$/, '')
    .replace(/\/$/, '');
}

function registeredGithubUrls() {
  const files = ['lib/data.ts', 'lib/data-ko.ts'];
  const urls = new Set();

  for (const file of files) {
    if (!existsSync(file)) {
      continue;
    }

    const source = readFileSync(file, 'utf8');
    for (const match of source.matchAll(/href:\s*'([^']*github\.com\/shjeon-96\/[^']+)'/g)) {
      urls.add(normalizeRemoteUrl(match[1]));
    }
  }

  return urls;
}

function localGithubRepos() {
  const raw = execFileSync('find', [searchRoot, '-maxdepth', '4', '-name', '.git', '-type', 'd'], {
    encoding: 'utf8',
  });

  const repos = new Map();
  for (const gitDir of raw.split('\n').filter(Boolean)) {
    const repoPath = gitDir.replace(/\/\.git$/, '');
    try {
      const remote = execFileSync('git', ['-C', repoPath, 'remote', 'get-url', 'origin'], {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
      }).trim();
      if (remote.includes('github.com/shjeon-96')) {
        repos.set(normalizeRemoteUrl(remote), repoPath);
      }
    } catch {
      // Ignore local git directories without a readable origin remote.
    }
  }

  return repos;
}

function resolveSourceRepos() {
  const explicitRepos = [...sourceRepos, ...(sourceRepo ? [sourceRepo] : [])];

  if (!useRegisteredRepos) {
    return explicitRepos.map((repoPath) => ({
      repoPath,
      sourceLabel: sourceLabelForLocalRepo(repoPath),
      matchedRegisteredRepo: false,
    }));
  }

  const localRepos = localGithubRepos();
  const registeredRepos = registeredGithubUrls();
  const matched = [];
  const seenPaths = new Set();

  for (const registeredUrl of registeredRepos) {
    const repoPath = localRepos.get(registeredUrl);
    if (repoPath) {
      seenPaths.add(repoPath);
      matched.push({
        repoPath,
        sourceLabel: registeredUrl.replace('https://github.com/shjeon-96/', 'shjeon-96/'),
        matchedRegisteredRepo: true,
      });
    }
  }

  for (const repoPath of explicitRepos) {
    if (!seenPaths.has(repoPath)) {
      matched.push({
        repoPath,
        sourceLabel: sourceLabelForLocalRepo(repoPath),
        matchedRegisteredRepo: false,
      });
      seenPaths.add(repoPath);
    }
  }

  return matched;
}

function sourceLabelForLocalRepo(repoPath) {
  try {
    const remote = execFileSync('git', ['-C', repoPath, 'remote', 'get-url', 'origin'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();

    if (remote.includes('github.com/shjeon-96')) {
      return normalizeRemoteUrl(remote).replace('https://github.com/shjeon-96/', 'shjeon-96/');
    }
  } catch {
    // Fall back to the anonymized local label below.
  }

  return '[local source repository]';
}

function redactCommitSubject(subject) {
  return subject
    .replace(/#[0-9]+/g, '[redacted-reference]')
    .replace(/\bissue\s*[0-9]+/gi, '[redacted-reference]')
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
    'mobile-release': 'Mobile release behavior can drift when native configuration, store inputs, billing, and device-only surfaces are verified separately.',
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
    'mobile-release': [
      'Group store, native configuration, billing, widget, and release-readiness commits by delivery boundary.',
      'Remove issue references and private submission details before writing public entries.',
      'Represent the work as release evidence rather than raw app-specific activity.',
    ],
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
    'mobile-release': 'The changelog can show mobile release discipline without exposing private store or credential details.',
    'export-deploy': 'The changelog can describe artifact parity without exposing private output details.',
    'editor-engine': 'The changelog can show product-system ownership without publishing source code or issue references.',
    performance: 'The changelog can show interaction-quality work without exposing internal performance traces.',
    'testing-ci': 'The changelog can show verification discipline without exposing private test fixtures.',
    'ai-workflow': 'The changelog can show agent-assisted workflow maturity without exposing private review threads.',
    'admin-ops': 'The changelog can show operational product thinking without exposing customer or internal data.',
  };
  return results[category] ?? results['editor-engine'];
}

const resolvedRepos = resolveSourceRepos();

if (resolvedRepos.length === 0) {
  console.error('No source repositories resolved.');
  process.exit(1);
}

const rawByRepo = resolvedRepos.map((repo) => {
  const raw = execFileSync(
    'git',
    [
      '-C',
      repo.repoPath,
      'log',
      ...(author ? [`--author=${author}`] : []),
      '--no-merges',
      `--since=${since}`,
      '--pretty=format:%ad%x09%s',
      '--date=short',
    ],
    { encoding: 'utf8' },
  );

  return { ...repo, raw };
});

const grouped = new Map();

for (const { sourceLabel, raw } of rawByRepo) {
  for (const line of raw.split('\n')) {
    const [, subject] = line.split('\t');
    if (!subject) {
      continue;
    }
    const category = categorize(subject);
    const key = `${sourceLabel}:${category.category}`;
    const next = grouped.get(key) ?? { category, subjects: [], sourceLabel };
    next.subjects.push(subject);
    grouped.set(key, next);
  }
}

const candidates = Array.from(grouped.values())
  .map(({ category, subjects, sourceLabel }) => ({
    sourceLabel,
    ...buildCandidate(category, subjects),
  }))
  .sort((a, b) => b.sourceCommitCount - a.sourceCommitCount);

const payload = {
  generatedAt: new Date().toISOString(),
  source: {
    sourceRepos: resolvedRepos.map((repo) => repo.sourceLabel),
    since,
    author: author || '[all authors]',
    rawCommitSubjects: rawByRepo.reduce((total, repo) => total + repo.raw.split('\n').filter(Boolean).length, 0),
    note: 'Raw commit subjects are local-only. Commit hashes, private references, and raw issue identifiers are not included in public site data.',
  },
  candidates,
};

const outputPath = resolve(output);
mkdirSync(resolve(outputPath, '..'), { recursive: true });
writeFileSync(outputPath, `${JSON.stringify(payload, null, 2)}\n`);

console.log(`Wrote ${candidates.length} public changelog candidate groups to ${output}`);
