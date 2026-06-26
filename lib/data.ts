export type CaseStudy = {
  slug: string;
  title: string;
  label: string;
  summary: string;
  stack: string[];
  problem: string;
  role: string;
  approach: string[];
  result: string;
  verification: string[];
};

export type ChangelogEntry = {
  title: string;
  period: string;
  category: 'editor-engine' | 'export-deploy' | 'performance' | 'testing-ci' | 'ai-workflow' | 'admin-ops';
  problem: string;
  approach: string[];
  result: string;
  stack: string[];
};

export type SkillContext = {
  group: string;
  tools: string[];
  context: string;
};

export const proofPoints = [
  'AST editor engine',
  'Export/deploy parity',
  'Operational dashboards',
  'AI agent workflow',
];

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ast-editor-engine',
    title: 'AST-based visual editor engine',
    label: 'B2B no-code web builder',
    summary:
      'Structured a visual editing surface where component variants, styles, interactions, bindings, preview, and deployable artifacts had to stay consistent.',
    stack: ['React', 'Next.js', 'TypeScript', 'Zustand', 'Immer', 'Vitest'],
    problem:
      'A no-code editor needed to edit, persist, preview, and export templates, components, styles, events, and data bindings through one coherent model.',
    role:
      'Owned front-end editor modeling, state boundaries, canvas interaction flows, and the contract between editable state and generated output.',
    approach: [
      'Modeled editor state around an AST-like product structure instead of treating each panel as an isolated UI island.',
      'Separated product editing concerns from runtime concerns so component variants, slots, bindings, and interactions could evolve without conflicting owners.',
      'Used canonical owner modules and regression tests to reduce duplicated resolver behavior across preview and output paths.',
    ],
    result:
      'Established an editor core that could support variants, slots, data binding, interactions, preview, export, and deploy workflows on a shared product model.',
    verification: [
      'Unit and integration tests around state transitions and rendering contracts.',
      'Regression checks for behavior shared by preview and generated artifacts.',
      'Code review follow-up focused on owner boundaries, not patch-level workarounds.',
    ],
  },
  {
    slug: 'export-deploy-parity',
    title: 'Export and deploy artifact parity',
    label: 'Commerce site builder',
    summary:
      'Stabilized the path from editor state to HTML/CSS/JS and deployment-oriented artifacts so what users configured matched what shipped.',
    stack: ['TypeScript', 'React', 'HTML/CSS', 'Liquid-style templates', 'Vitest'],
    problem:
      'The editor preview and generated artifacts could drift when rendering rules, asset handling, repeat behavior, or conditional visibility were interpreted in different places.',
    role:
      'Clarified artifact generation boundaries and moved shared decisions into common helpers where multiple output paths needed the same behavior.',
    approach: [
      'Treated preview, export, and deploy as separate surfaces that must share one rendering contract.',
      'Grouped repeat, slot, asset, font, and visibility handling into explicit generation rules.',
      'Added artifact-oriented regression checks instead of relying only on visual inspection.',
    ],
    result:
      'Reduced drift between the editor and deployable output by making artifact generation a first-class front-end pipeline instead of an afterthought.',
    verification: [
      'Build-time checks for generated output shape.',
      'Regression scenarios for conditional rendering and nested structures.',
      'Manual review against public-safe, anonymized artifact examples.',
    ],
  },
  {
    slug: 'ai-review-operations',
    title: 'AI-assisted review operations system',
    label: 'AI admin workflow',
    summary:
      'Built an operations flow for collecting review data, generating AI-assisted responses, and keeping human review in the loop.',
    stack: ['React', 'NestJS', 'Python', 'OpenAI API', 'MySQL', 'JWT'],
    problem:
      'Operators needed to understand incoming review data, inspect AI-assisted suggestions, and respond without losing control over the final customer-facing output.',
    role:
      'Worked across admin UI, API contracts, crawler integration, database structures, and AI response generation flows.',
    approach: [
      'Separated collection, analysis, review, and response generation into visible workflow steps.',
      'Designed admin UI states for loading, empty, failed, and permission-sensitive scenarios.',
      'Kept AI-generated output inspectable instead of treating automation as a black box.',
    ],
    result:
      'Turned repetitive review-response work into an operator-controlled workflow with AI assistance and clearer operational visibility.',
    verification: [
      'API behavior checks for review and response states.',
      'Permission-aware admin UI review.',
      'Manual workflow testing for operator handoff points.',
    ],
  },
  {
    slug: 'settlement-operations',
    title: 'Payment and settlement operations flow',
    label: 'Realtime business operations',
    summary:
      'Connected settlement, permissions, merchant data, and realtime notification surfaces across web and mobile admin workflows.',
    stack: ['React', 'React Native', 'Spring API', 'PG integration', 'Realtime notification'],
    problem:
      'Business users needed reliable access to payment and settlement data while permissions and operational status changed across roles.',
    role:
      'Implemented UI flows and API integration for merchant data management, settlement visibility, permissions, and notification surfaces.',
    approach: [
      'Made payment and settlement states visible through role-aware screens.',
      'Kept admin and mobile workflows aligned around the same operational concepts.',
      'Handled realtime status updates as product state, not just transient messages.',
    ],
    result:
      'Improved the clarity of settlement operations across admin and mobile surfaces.',
    verification: [
      'Role-based UI checks.',
      'API integration review for settlement states.',
      'Manual testing around notification and status changes.',
    ],
  },
  {
    slug: 'legacy-admin-modernization',
    title: 'Legacy admin modernization',
    label: 'Back-office migration',
    summary:
      'Modernized operational back-office flows while preserving service continuity across framework and deployment changes.',
    stack: ['Vue', 'React', 'Next.js', 'Firebase', 'Docker', 'GitHub Actions'],
    problem:
      'A live operations system needed framework migration and workflow improvement without interrupting the business processes it supported.',
    role:
      'Worked on admin UI migration, service workflows, deployment environments, and CI/CD stabilization.',
    approach: [
      'Moved functionality gradually instead of rewriting all screens at once.',
      'Separated environment concerns so local, staging, and production workflows were less error-prone.',
      'Used deployment automation to make repeatable releases part of the product workflow.',
    ],
    result:
      'Created a more maintainable web foundation for operational workflows and future feature delivery.',
    verification: [
      'Build and deployment checks.',
      'Workflow review for migrated screens.',
      'Environment-specific verification before release.',
    ],
  },
];

export const changelogEntries: ChangelogEntry[] = [
  {
    title: 'Export runtime parity rules',
    period: '2026-06',
    category: 'export-deploy',
    problem: 'Preview and deployable output can diverge when conditional rendering rules are evaluated in separate paths.',
    approach: [
      'Moved shared visibility decisions into one public-safe rendering contract.',
      'Checked nested structures against generated artifact behavior.',
      'Captured regression cases before broadening the affected surface.',
    ],
    result: 'The same product state is easier to reason about across preview, export, and deployment-oriented outputs.',
    stack: ['TypeScript', 'React', 'Vitest'],
  },
  {
    title: 'Variant state ownership',
    period: '2026-06',
    category: 'editor-engine',
    problem: 'Component variant selection becomes fragile when local editing state and runtime state share unclear boundaries.',
    approach: [
      'Separated design-time variant concerns from runtime interaction concerns.',
      'Checked owner ancestry before changing shared readers.',
      'Kept selection behavior scoped to the product model that owns it.',
    ],
    result: 'Variant behavior became safer to extend without turning shared readers into broad permissive paths.',
    stack: ['React', 'TypeScript', 'Zustand'],
  },
  {
    title: 'Generated artifact review loop',
    period: '2026-06',
    category: 'testing-ci',
    problem: 'Source-level changes can look correct while generated HTML or deployment artifacts reveal a mismatch.',
    approach: [
      'Reviewed real generated output before finalizing fixes.',
      'Added regression coverage around artifact shape and runtime behavior.',
      'Kept the verification loop tied to user-visible output.',
    ],
    result: 'Output regressions are caught closer to the artifact users actually receive.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Vitest'],
  },
  {
    title: 'Agent-assisted root-cause workflow',
    period: '2026-06',
    category: 'ai-workflow',
    problem: 'Large front-end systems make it easy to patch symptoms without finding the canonical owner.',
    approach: [
      'Used AI agents to search code paths, compare hypotheses, and narrow suspect owners.',
      'Verified every proposed change against actual source paths and tests.',
      'Rejected workaround-style fixes when the root contract needed correction.',
    ],
    result: 'AI accelerated investigation while the final decision stayed grounded in code evidence and regression checks.',
    stack: ['Codex', 'Claude Code', 'GitHub', 'TypeScript'],
  },
  {
    title: 'Canvas performance guardrails',
    period: '2026-05',
    category: 'performance',
    problem: 'Large editing surfaces need predictable interaction even as documents grow in size and complexity.',
    approach: [
      'Reduced unnecessary render work around selection and viewport-driven surfaces.',
      'Used focused benchmarks and interaction checks instead of subjective speed impressions.',
      'Kept optimizations tied to editor behavior rather than isolated micro-changes.',
    ],
    result: 'The editor surface became easier to keep responsive while adding product features.',
    stack: ['React', 'TypeScript', 'Performance profiling'],
  },
  {
    title: 'Admin empty and failure states',
    period: '2025-12',
    category: 'admin-ops',
    problem: 'Operational users need clear state feedback when data is loading, missing, restricted, or failed.',
    approach: [
      'Treated loading, empty, failed, and permission states as product states.',
      'Aligned UI messaging with what operators could do next.',
      'Kept admin workflows readable under partial data conditions.',
    ],
    result: 'Back-office workflows became easier to operate and debug during real service usage.',
    stack: ['React', 'TypeScript', 'API integration'],
  },
  {
    title: 'Environment-aware release workflow',
    period: '2025-08',
    category: 'testing-ci',
    problem: 'Manual environment handling increases the risk of deploying the wrong configuration.',
    approach: [
      'Separated local, staging, and production configuration paths.',
      'Connected Docker and GitHub Actions to repeatable deployment checks.',
      'Kept release steps documented and reproducible.',
    ],
    result: 'Deployments became less dependent on manual configuration discipline.',
    stack: ['Docker', 'GitHub Actions', 'Firebase'],
  },
  {
    title: 'AI review operations workflow',
    period: '2025-04',
    category: 'admin-ops',
    problem: 'AI-generated responses need operator trust, review, and correction before they affect customer-facing workflows.',
    approach: [
      'Separated data collection, AI analysis, human review, and response generation.',
      'Made generated output visible and editable in the admin workflow.',
      'Kept automation bounded by operator decisions.',
    ],
    result: 'AI assistance became part of a reviewable operations flow instead of a hidden backend action.',
    stack: ['React', 'NestJS', 'Python', 'OpenAI API'],
  },
];

export const skills: SkillContext[] = [
  {
    group: 'Core front-end',
    tools: ['React', 'Next.js', 'TypeScript'],
    context: 'Complex product interfaces, App Router surfaces, product-state-driven UI, and typed component contracts.',
  },
  {
    group: 'State and product models',
    tools: ['Zustand', 'Immer', 'AST-like editor models'],
    context: 'Editor state ownership, variant behavior, nested structures, and product actions that need clear source-of-truth boundaries.',
  },
  {
    group: 'Quality and verification',
    tools: ['Vitest', 'Testing Library', 'E2E checks', 'CI'],
    context: 'Regression prevention for preview/output parity, rendering contracts, and user-facing workflows.',
  },
  {
    group: 'Operations and backend understanding',
    tools: ['NestJS', 'FastAPI', 'Spring API', 'MySQL', 'Oracle'],
    context: 'Admin workflows, API contracts, permission-sensitive screens, and data structures behind product interfaces.',
  },
  {
    group: 'Release and deployment',
    tools: ['Docker', 'GitHub Actions', 'Firebase', 'Vercel'],
    context: 'Environment separation, repeatable release paths, static portfolio deployment, and production-ready checks.',
  },
  {
    group: 'AI workflow',
    tools: ['Codex', 'Claude Code', 'OpenAI API'],
    context: 'Agent-assisted codebase exploration, root-cause narrowing, review follow-up, CI failure triage, and AI-assisted product workflows.',
  },
];

export const aiWorkflowSteps = [
  {
    title: 'Frame the issue',
    description: 'Start from the product symptom, expected behavior, and user-visible impact instead of jumping to a patch.',
  },
  {
    title: 'Search the code path',
    description: 'Use agents to inspect likely owners, tests, generated artifacts, and adjacent contracts quickly.',
  },
  {
    title: 'Find the owner',
    description: 'Identify the canonical module responsible for the behavior and avoid adding parallel logic.',
  },
  {
    title: 'Patch narrowly',
    description: 'Change the shared contract or owner path that explains the issue without adding silent alternate behavior.',
  },
  {
    title: 'Verify behavior',
    description: 'Run focused checks, inspect output, and add regression coverage where the failure could return.',
  },
  {
    title: 'Document the learning',
    description: 'Turn repeated diagnosis patterns into reusable workflow notes, tests, or public-safe changelog entries.',
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
