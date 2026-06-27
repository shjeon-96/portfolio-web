export type CaseStudy = {
  slug: string;
  title: string;
  label: string;
  summary: string;
  stack: string[];
  publicProof: string[];
  problem: string;
  role: string;
  approach: string[];
  result: string;
  verification: string[];
  tradeOffs: string[];
  verificationEvidence: string[];
  links: Array<{
    label: string;
    href: string;
  }>;
};

export type ChangelogEntry = {
  title: string;
  date: string;
  category:
    | 'editor-engine'
    | 'export-deploy'
    | 'performance'
    | 'testing-ci'
    | 'ai-workflow'
    | 'admin-ops'
    | 'agent-tooling'
    | 'mobile-release'
    | 'native-product'
    | 'web-toolkit'
    | 'game-runtime'
    | 'app-review-tooling'
    | 'ai-product'
    | 'ops-platform'
    | 'pos-system'
    | 'realtime-backend'
    | 'catalog-site';
  problem: string;
  approach: string[];
  result: string;
  stack: string[];
};

export type ProjectHighlight = {
  title: string;
  label: string;
  summary: string;
  stack: string[];
  status: string;
  href?: string;
};

export type SkillContext = {
  group: string;
  tools: string[];
  context: string;
};

export const proofPoints = [
  'Open-source agent tooling',
  'Mobile release gates',
  'Native product architecture',
  'Editor engine systems',
];

export const projectHighlights: ProjectHighlight[] = [
  {
    title: 'codex-lsp-bridge',
    label: 'Open-source agent tooling',
    summary:
      'Read-only MCP/LSP bridge that gives Codex diagnostics, definitions, references, symbols, hover, and status from local language servers.',
    stack: ['TypeScript', 'Node.js', 'MCP', 'LSP', 'Vitest'],
    status: 'Public package and GitHub repository',
    href: 'https://github.com/shjeon-96/codex-lsp-bridge',
  },
  {
    title: 'Gyeol Mobile',
    label: 'Expo/React Native product platform',
    summary:
      'Calendar-first mobile product with release gates for native policy, EAS configuration, runtime environment, widgets, store metadata, and UI smoke evidence.',
    stack: ['Expo', 'React Native', 'TypeScript', 'Supabase', 'EAS'],
    status: 'iOS/Android release workflow',
  },
  {
    title: 'PureFlow',
    label: 'Native productivity app',
    summary:
      'SwiftUI and SwiftData productivity app organized with MVVM, feature modules, adaptive navigation, CloudKit sync, widget, and share extension targets.',
    stack: ['SwiftUI', 'SwiftData', 'CloudKit', 'Firebase', 'Swift Testing'],
    status: 'iOS, iPadOS, and Mac Catalyst architecture',
  },
  {
    title: 'Web Toolkit',
    label: 'Privacy-first developer tools',
    summary:
      'Browser-based developer toolkit direction for client-side processing, offline PWA usage, i18n, WebAssembly-powered tools, and shareable tool state.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vitest'],
    status: 'Public web product direction',
    href: 'https://github.com/shjeon-96/dev-tool-kit',
  },
  {
    title: 'app-store-connect-release',
    label: 'Codex release review plugin',
    summary:
      'Conservative App Store Connect submission helper for reviewing release inputs and drafting App Review responses without exposing private release data.',
    stack: ['Python', 'Codex plugin', 'App Store Connect', 'Release workflow'],
    status: 'Public GitHub repository',
    href: 'https://github.com/shjeon-96/app-store-connect-release',
  },
  {
    title: 'IdeaToPRD',
    label: 'AI product planning SaaS',
    summary:
      'AI-assisted PRD generation product direction that connects idea capture, structured planning, and deployable Next.js product surfaces.',
    stack: ['Next.js', 'TypeScript', 'AI workflow', 'Vercel'],
    status: 'Public repository and live web surface',
    href: 'https://github.com/shjeon-96/ideatoprd',
  },
  {
    title: 'Nightbound Survival',
    label: 'Bevy game runtime',
    summary:
      'Rust and Bevy game project with a CI-style verification script for formatting, compilation, test binary builds, and test execution.',
    stack: ['Rust', 'Bevy', 'Serde', 'Cargo'],
    status: 'Interactive systems and runtime verification',
  },
  {
    title: 'Tax and settlement operations platform',
    label: 'Back-office and mobile operations',
    summary:
      'Business workflow platform covering tax agency requests, purchase and sales dashboards, merchant approval, notifications, and legacy Vue to React to Next.js migration.',
    stack: ['Flutter', 'React', 'Next.js', 'Firebase', 'Docker'],
    status: 'Operational workflow and framework migration',
  },
  {
    title: 'AI review operations system',
    label: 'AI-assisted admin workflow',
    summary:
      'Multi-stack operations tool with React admin UI, NestJS API, Python data collection, JWT authentication, MySQL schema design, and OpenAI-assisted review response flow.',
    stack: ['React', 'NestJS', 'Python', 'OpenAI API', 'MySQL'],
    status: 'Operator-controlled AI workflow',
  },
  {
    title: 'Desktop POS system',
    label: 'Offline-first Flutter desktop app',
    summary:
      'Windows and macOS POS app with table ordering, payment flows, printer integration, local SQLite storage, and synchronization after network recovery.',
    stack: ['Flutter', 'Dart', 'SQLite', 'Desktop', 'Hardware integration'],
    status: 'Restaurant operations and local data reliability',
  },
  {
    title: 'Realtime delivery backend',
    label: 'Socket.io operations backend',
    summary:
      'Delivery operations backend with realtime order status, updater socket events, route optimization support, scraping pipeline, and log management.',
    stack: ['NestJS', 'Python', 'Socket.io', 'Realtime operations'],
    status: 'Backend and realtime workflow experience',
  },
  {
    title: 'POS refactor and payment workflow',
    label: 'Legacy React POS modernization',
    summary:
      'React POS refactor covering payment and cancellation modals, cash receipt flows, table move/split/merge logic, group payment, and performance cleanup.',
    stack: ['React', 'JavaScript', 'POS', 'Payment workflow'],
    status: 'Legacy modernization in an operational system',
  },
  {
    title: 'Distribution catalog site',
    label: 'Next.js SEO and catalog surface',
    summary:
      'Responsive product catalog site with SSR, dynamic routing, image optimization, lazy loading, i18n routes, search, and inquiry flow.',
    stack: ['Next.js', 'TypeScript', 'SSR', 'SEO', 'i18n'],
    status: 'Public-facing catalog and performance work',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: 'codex-lsp-bridge',
    title: 'Codex LSP semantic safety layer',
    label: 'Open-source AI developer tooling',
    summary:
      'Built a public MCP/LSP bridge that gives coding agents read-only semantic checks such as diagnostics, definitions, references, symbols, and hover context.',
    stack: ['TypeScript', 'Node.js', 'MCP', 'Language Server Protocol', 'Vitest'],
    publicProof: [
      'Public GitHub repository under shjeon-96',
      'Published package workflow with package smoke checks',
      'Documented MCP tools, safety limits, and maintainer workflow',
    ],
    problem:
      'AI coding agents can move quickly through text search, but large codebases still need semantic feedback from the language server before changes are trusted.',
    role:
      'Designed the read-only tool boundary, workspace-root safety model, language adapter flow, package contract, and verification path for public distribution.',
    approach: [
      'Exposed language-server capabilities through a narrow MCP interface instead of allowing agents to mutate project state directly.',
      'Kept workspace boundaries explicit, including root checks and symlink escape protection.',
      'Added diagnostics timeout policy, package smoke checks, and integration coverage so tool behavior could be verified before release.',
    ],
    result:
      'Published a reusable agent tooling package that turns semantic code intelligence into a safer part of the AI-assisted development workflow.',
    verification: [
      'Unit and integration tests cover TypeScript behavior, diagnostics handling, package contracts, and language adapter boundaries.',
      'Package verification includes build, type-check, smoke install, and smoke package checks.',
      'Public documentation explains supported tools, safety limits, and maintainer workflow.',
    ],
    tradeOffs: [
      'Kept the bridge read-only so semantic context could help agents without turning the tool into an alternate mutation path.',
      'Started with TypeScript as the primary exercised language while keeping adapter boundaries ready for additional language servers.',
    ],
    verificationEvidence: ['npm run ci:verify', 'npm run test', 'npm run verify:package', 'npm run smoke:package'],
    links: [
      {
        label: 'GitHub repository',
        href: 'https://github.com/shjeon-96/codex-lsp-bridge',
      },
    ],
  },
  {
    slug: 'mobile-release-foundations',
    title: 'Mobile release gates and shared foundations',
    label: 'Expo/React Native product platform',
    summary:
      'Structured a mobile product monorepo so release policy, shared packages, native boundaries, and product documentation stayed aligned across apps.',
    stack: ['Expo', 'React Native', 'TypeScript', 'Supabase', 'EAS', 'Maestro'],
    publicProof: [
      'Mobile release policy encoded in verification scripts',
      'Shared foundation packages guarded by package-level checks',
      'Product documentation used as the planning source of truth',
    ],
    problem:
      'Mobile products with native calendar, widgets, billing, invites, and backend integrations can drift when documentation, app code, native policy, and release scripts each define their own truth.',
    role:
      'Owned product-facing architecture boundaries, shared package rules, release verification scripts, and public-safe documentation of the mobile delivery workflow.',
    approach: [
      'Kept product documents as the planning source of truth and made app code, release checks, and package ownership point back to that model.',
      'Moved repeated auth, billing, invite, notification, analytics, and configuration behavior into shared foundations with package-level tests.',
      'Used release gates for native policy, EAS configuration, runtime environment, widgets, store metadata, and mobile UI smoke evidence.',
    ],
    result:
      'Created a repeatable mobile release path where shared behavior is verified once and production readiness is checked before store-facing builds.',
    verification: [
      'Release configuration checks validate Expo, EAS, native policy, runtime environment, and store-readiness inputs.',
      'Shared foundation verification prevents duplicated app-local implementations from becoming competing sources of truth.',
      'Mobile UI and device-oriented smoke flows provide evidence for critical app paths before release.',
    ],
    tradeOffs: [
      'Rejected web or Expo Go paths as release proof because native calendar, widget, billing, and store behavior needed the real mobile boundary.',
      'Used shared packages only where repeated app behavior had a clear owner, avoiding broad coupling for behavior that had not stabilized.',
    ],
    verificationEvidence: [
      'npm run release:config',
      'npm run verify:eas-release-config',
      'npm run verify:mobile-ui',
      'npm run verify:shared-foundations',
    ],
    links: [],
  },
  {
    slug: 'ast-editor-engine',
    title: 'AST-based visual editor engine',
    label: 'B2B no-code web builder',
    summary:
      'Structured a visual editing surface where component variants, styles, interactions, bindings, preview, and deployable artifacts had to stay consistent.',
    stack: ['React', 'Next.js', 'TypeScript', 'Zustand', 'Immer', 'Vitest'],
    publicProof: [
      'Public-safe architecture narrative with product model boundaries',
      'Regression-oriented verification around editor state and rendering contracts',
      'Generated output regression review',
    ],
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
    tradeOffs: [
      'Modeled the editor around one product structure instead of letting each side panel own separate local truth.',
      'Separated editing-time state from runtime behavior so variants, slots, and interactions could evolve without hidden coupling.',
    ],
    verificationEvidence: ['Unit tests for state transitions', 'Integration checks for preview behavior', 'Generated output regression review'],
    links: [],
  },
  {
    slug: 'export-deploy-parity',
    title: 'Export and deploy artifact parity',
    label: 'Commerce site builder',
    summary:
      'Stabilized the path from editor state to HTML/CSS/JS and deployment-oriented artifacts so what users configured matched what shipped.',
    stack: ['TypeScript', 'React', 'HTML/CSS', 'Liquid-style templates', 'Vitest'],
    publicProof: [
      'Public-safe output parity narrative',
      'Regression checks centered on generated artifacts',
      'Shared rendering-contract framing across preview and deploy paths',
    ],
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
    tradeOffs: [
      'Treated generated output as the product surface, not just an implementation detail behind the editor.',
      'Moved shared decisions into common rules instead of patching preview and deploy paths independently.',
    ],
    verificationEvidence: ['Generated artifact shape checks', 'Conditional rendering regression scenarios', 'Manual output review'],
    links: [],
  },
  {
    slug: 'ai-review-operations',
    title: 'AI-assisted review operations system',
    label: 'AI admin workflow',
    summary:
      'Built an operations flow for collecting review data, generating AI-assisted responses, and keeping human review in the loop.',
    stack: ['React', 'NestJS', 'Python', 'OpenAI API', 'MySQL', 'JWT'],
    publicProof: [
      'Public-safe workflow summary for AI-assisted operations',
      'Human review and editability kept visible in the product flow',
      'Permission, empty, loading, and failed states treated as product states',
    ],
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
    tradeOffs: [
      'Kept AI suggestions reviewable instead of auto-sending customer-facing responses.',
      'Separated collection, analysis, review, and response generation so operators could diagnose each stage.',
    ],
    verificationEvidence: ['API state checks', 'Permission-aware UI review', 'Manual operator handoff testing'],
    links: [],
  },
  {
    slug: 'settlement-operations',
    title: 'Payment and settlement operations flow',
    label: 'Realtime business operations',
    summary:
      'Connected settlement, permissions, merchant data, and realtime notification surfaces across web and mobile admin workflows.',
    stack: ['React', 'React Native', 'Spring API', 'PG integration', 'Realtime notification'],
    publicProof: [
      'Public-safe operations workflow narrative',
      'Role-aware settlement and payment visibility',
      'Realtime status changes modeled as product state',
    ],
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
    tradeOffs: [
      'Kept admin and mobile flows aligned around shared operational concepts while preserving role-specific views.',
      'Made realtime updates part of the state model instead of transient messages that could be missed.',
    ],
    verificationEvidence: ['Role-based UI checks', 'Settlement API integration review', 'Notification state manual tests'],
    links: [],
  },
  {
    slug: 'legacy-admin-modernization',
    title: 'Legacy admin modernization',
    label: 'Back-office migration',
    summary:
      'Modernized operational back-office flows while preserving service continuity across framework and deployment changes.',
    stack: ['Vue', 'React', 'Next.js', 'Firebase', 'Docker', 'GitHub Actions'],
    publicProof: [
      'Public-safe migration narrative',
      'Environment separation and repeatable release checks',
      'Operational continuity preserved during framework changes',
    ],
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
    tradeOffs: [
      'Moved workflows gradually because the operational system had to keep serving users during modernization.',
      'Separated environment setup from feature work so release mistakes were easier to detect before production.',
    ],
    verificationEvidence: ['Build checks', 'Deployment workflow review', 'Environment-specific release verification'],
    links: [],
  },
];

export const changelogEntries: ChangelogEntry[] = [
  {
    title: 'Tax operations migration path',
    date: '2025-11-30',
    category: 'ops-platform',
    problem: 'A live business operations platform needed tax request workflows, purchase and sales dashboards, merchant review, notifications, and framework migration without interrupting work.',
    approach: [
      'Moved legacy Vue surfaces through React and Next.js in stages.',
      'Modeled tax agency request, consent, cancellation, merchant approval, and management workflows as operational product states.',
      'Connected Firebase notifications, Docker deployment, and dashboard surfaces to the same back-office flow.',
    ],
    result: 'The portfolio gains a concrete operations-platform example beyond the editor and AI tooling stories.',
    stack: ['Flutter', 'React', 'Next.js', 'Firebase', 'Docker'],
  },
  {
    title: 'Offline-first desktop POS architecture',
    date: '2025-02-28',
    category: 'pos-system',
    problem: 'Restaurant POS software has to keep orders, payments, printer output, and sales data usable even when the network is unstable.',
    approach: [
      'Used Flutter Desktop to target Windows and macOS from one codebase.',
      'Kept local operations available through SQLite-backed storage.',
      'Integrated printer and order notification workflows as part of the core product path.',
    ],
    result: 'Desktop POS work adds offline-first operations and hardware-adjacent product experience to the site.',
    stack: ['Flutter', 'Dart', 'SQLite', 'Desktop'],
  },
  {
    title: 'Realtime delivery operations backend',
    date: '2024-04-30',
    category: 'realtime-backend',
    problem: 'Delivery operations require immediate order status updates, updater events, route support, and traceable data collection.',
    approach: [
      'Used Socket.io for realtime order and updater events.',
      'Separated NestJS backend responsibilities from Python data collection.',
      'Added logs and error handling so operational issues could be traced.',
    ],
    result: 'The changelog now shows backend and realtime workflow understanding, not only front-end UI work.',
    stack: ['NestJS', 'Python', 'Socket.io'],
  },
  {
    title: 'Legacy POS payment refactor',
    date: '2023-10-31',
    category: 'pos-system',
    problem: 'A legacy POS front end had payment, receipt, table, and settlement logic that needed maintenance and performance cleanup.',
    approach: [
      'Refactored payment and cancellation modal flows.',
      'Handled table move, split, merge, group assignment, and group payment cases.',
      'Improved rendering and maintainability in an actively used operational surface.',
    ],
    result: 'Older POS work strengthens the portfolio story around real business workflows and legacy modernization.',
    stack: ['React', 'JavaScript', 'POS workflow'],
  },
  {
    title: 'Catalog site SEO and i18n surface',
    date: '2025-03-31',
    category: 'catalog-site',
    problem: 'A product information site needed fast initial loading, searchable catalog content, multilingual routes, and responsive presentation.',
    approach: [
      'Used Next.js SSR, dynamic routing, and image optimization.',
      'Built catalog search and inquiry flow around public-facing product information.',
      'Added i18n route structure for multilingual content delivery.',
    ],
    result: 'The project ledger now includes public-facing web performance and content architecture work.',
    stack: ['Next.js', 'TypeScript', 'SSR', 'SEO', 'i18n'],
  },
  {
    title: 'App Store review helper as conservative tooling',
    date: '2026-04-19',
    category: 'app-review-tooling',
    problem: 'Release submission work needs careful wording and input review because accidental private data or unsupported claims can delay review.',
    approach: [
      'Kept the plugin focused on conservative submission input review and App Review reply drafting.',
      'Separated release-support writing from live store operations.',
      'Documented the tool as a public helper instead of embedding private app release details.',
    ],
    result: 'The portfolio now shows a small but concrete example of turning repeated release review work into reusable tooling.',
    stack: ['Python', 'Codex plugin', 'App Store Connect'],
  },
  {
    title: 'AI PRD generation product surface',
    date: '2026-01-17',
    category: 'ai-product',
    problem: 'Early product ideas need to become structured requirements before implementation starts.',
    approach: [
      'Explored an AI-assisted product planning flow around idea capture and PRD generation.',
      'Used a Next.js product surface so the workflow could be shared as an actual web app.',
      'Kept the portfolio summary at product-flow level instead of exposing private planning data.',
    ],
    result: 'IdeaToPRD adds a public AI product-planning example alongside implementation-heavy case studies.',
    stack: ['Next.js', 'TypeScript', 'AI workflow', 'Vercel'],
  },
  {
    title: 'SwiftUI product module architecture',
    date: '2026-02-08',
    category: 'native-product',
    problem: 'A native productivity app needed task, focus, label, widget, share, and sync surfaces to stay organized as the product expanded.',
    approach: [
      'Separated app entry, core utilities, data models, feature modules, shared UI, and resources.',
      'Used SwiftUI, SwiftData, CloudKit, and adaptive navigation as native product boundaries.',
      'Kept model, service, and ViewModel behavior covered through Swift Testing with in-memory data paths.',
    ],
    result: 'PureFlow became a native product architecture example beyond web-only front-end work.',
    stack: ['SwiftUI', 'SwiftData', 'CloudKit', 'Swift Testing', 'XcodeGen'],
  },
  {
    title: 'Privacy-first developer toolkit direction',
    date: '2026-06-18',
    category: 'web-toolkit',
    problem: 'Developer tools often ask users to paste sensitive text into unknown server paths.',
    approach: [
      'Framed the product around client-side processing, no server uploads, and offline PWA use.',
      'Mapped tools into text/code, media/design, converters, and security groups.',
      'Kept i18n, command search, WebAssembly processing, and shareable state as product capabilities.',
    ],
    result: 'The web toolkit adds a public product direction for utility-heavy browser software.',
    stack: ['Next.js', 'React', 'TypeScript', 'PWA', 'WebAssembly'],
  },
  {
    title: 'Bevy runtime verification loop',
    date: '2026-06-27',
    category: 'game-runtime',
    problem: 'Interactive game systems need fast local confidence that formatting, compilation, and tests still pass after gameplay changes.',
    approach: [
      'Used one verification script as the same path documented for CI.',
      'Kept focused cargo commands for check, test binary build, and test execution.',
      'Treated runtime projects as product systems with repeatable feedback, not just experiments.',
    ],
    result: 'Nightbound Survival broadens the portfolio into Rust and interactive runtime work without diluting the product-engineering story.',
    stack: ['Rust', 'Bevy', 'Cargo', 'Serde'],
  },
  {
    title: 'Agent LSP bridge release contract',
    date: '2026-05-19',
    category: 'agent-tooling',
    problem: 'AI coding workflows need semantic code feedback without giving tools broad write access to the project.',
    approach: [
      'Wrapped diagnostics, definitions, references, symbols, and hover context in read-only MCP tools.',
      'Kept workspace-root checks and adapter boundaries explicit.',
      'Verified package behavior with build, type-check, integration tests, and smoke package checks.',
    ],
    result: 'Semantic code intelligence became a public, repeatable tool in the agent-assisted development workflow.',
    stack: ['TypeScript', 'Node.js', 'MCP', 'LSP', 'Vitest'],
  },
  {
    title: 'Mobile release gate system',
    date: '2026-06-27',
    category: 'mobile-release',
    problem: 'Native mobile releases can drift when Expo config, store metadata, widgets, runtime environment, and product docs are checked separately.',
    approach: [
      'Made release configuration, native policy, and product documentation point to one delivery model.',
      'Added shared foundation checks so repeated app behavior stayed in common packages.',
      'Used mobile UI and release smoke evidence before store-facing builds.',
    ],
    result: 'The mobile release path became easier to verify before iOS and Android production distribution.',
    stack: ['Expo', 'React Native', 'EAS', 'Maestro', 'TypeScript'],
  },
  {
    title: 'Export runtime parity rules',
    date: '2026-06-26',
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
    date: '2026-06-25',
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
    date: '2026-06-24',
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
    date: '2026-06-23',
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
    date: '2026-05-31',
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
    date: '2025-12-31',
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
    date: '2025-08-31',
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
    date: '2025-04-30',
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
    group: 'Product front-end',
    tools: ['React', 'Next.js', 'TypeScript', 'React Native'],
    context: 'Complex product interfaces, App Router surfaces, mobile app flows, product-state-driven UI, and typed component contracts.',
  },
  {
    group: 'State and product models',
    tools: ['Zustand', 'Immer', 'AST-like editor models'],
    context: 'Editor state ownership, variant behavior, nested structures, and product actions that need clear source-of-truth boundaries.',
  },
  {
    group: 'Quality and verification',
    tools: ['Vitest', 'Testing Library', 'Maestro', 'E2E checks', 'CI'],
    context: 'Regression prevention for preview/output parity, rendering contracts, release gates, and user-facing workflows.',
  },
  {
    group: 'Operations and backend understanding',
    tools: ['NestJS', 'FastAPI', 'Spring API', 'MySQL', 'Oracle'],
    context: 'Admin workflows, API contracts, permission-sensitive screens, and data structures behind product interfaces.',
  },
  {
    group: 'Release and deployment',
    tools: ['Docker', 'GitHub Actions', 'Firebase', 'Vercel', 'EAS'],
    context: 'Environment separation, repeatable release paths, static portfolio deployment, mobile store readiness, and production checks.',
  },
  {
    group: 'AI workflow',
    tools: ['Codex', 'Claude Code', 'OpenAI API', 'MCP', 'LSP'],
    context: 'Agent-assisted codebase exploration, semantic tooling, root-cause narrowing, CI failure triage, and AI-assisted product workflows.',
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

export function sortChangelogEntriesByDateDesc<T extends ChangelogEntry>(entries: T[]) {
  return [...entries].sort((left, right) => right.date.localeCompare(left.date));
}

export function groupChangelogEntriesByDate<T extends ChangelogEntry>(entries: T[]) {
  return sortChangelogEntriesByDateDesc(entries).reduce<Array<{ date: string; entries: T[] }>>((groups, entry) => {
    const lastGroup = groups.at(-1);

    if (lastGroup?.date === entry.date) {
      lastGroup.entries.push(entry);
      return groups;
    }

    groups.push({ date: entry.date, entries: [entry] });
    return groups;
  }, []);
}

export function formatChangelogDate(date: string, locale: 'en' | 'ko') {
  const [year, month, day] = date.split('-');

  if (locale === 'ko') {
    return `${year}.${month}.${day}`;
  }

  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00.000Z`));
}
