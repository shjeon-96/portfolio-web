export type ChangelogEntry = {
  title: string;
  date: string;
  featured?: boolean;
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
    | 'catalog-site'
    | 'portfolio-system';
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
  evidenceHref: string;
  evidenceLabel: string;
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
    title: 'Single-purpose iOS release packaging',
    date: '2026-04-25',
    category: 'mobile-release',
    problem:
      'Small App Store products still need production signing, screenshots, support pages, advertising setup, and app icon polish before submission.',
    approach: [
      'Prepared signing and screenshot assets around a narrow one-session mobile product.',
      'Connected the review-facing website and production ad configuration to the same release path.',
      'Kept the MVP scope focused so store readiness did not turn into unrelated feature expansion.',
    ],
    result:
      'The changelog now shows practical mobile submission work between larger platform efforts.',
    stack: ['iOS', 'App Store', 'AdMob', 'Release assets'],
  },
  {
    title: 'PDF utility App Store readiness',
    date: '2026-04-19',
    category: 'app-review-tooling',
    problem:
      'A small utility app needed the public metadata, privacy policy, review settings, and marketing page required for App Store submission.',
    approach: [
      'Prepared review-ready app settings and repository metadata.',
      'Added the public privacy policy and marketing site surface.',
      'Kept the release flow documented without exposing private submission credentials.',
    ],
    result:
      'The portfolio gets another concrete example of turning a focused utility into a store-submittable product.',
    stack: ['Swift', 'App Store', 'Privacy policy', 'Marketing site'],
  },
  {
    title: 'Nutrition app feature expansion and refactor',
    date: '2026-04-08',
    category: 'native-product',
    problem:
      'A health and nutrition mobile product needed richer logging, AI-assisted capture, export, device sync, billing, and clearer feature ownership.',
    approach: [
      'Added AI food recognition, workout logging, data export, and health-device sync paths.',
      'Introduced premium gating, API wiring, stale-result guards, and async cancellation around camera analysis.',
      'Extracted screen logic into feature hooks and container boundaries so the UI could keep growing without one large surface owning everything.',
    ],
    result:
      'The changelog now shows mid-cycle mobile product expansion, not only release-gate work.',
    stack: ['React Native', 'Expo', 'AI workflow', 'Health sync', 'Billing'],
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
    result: 'IdeaToPRD adds a public AI product-planning example alongside implementation-heavy project records.',
    stack: ['Next.js', 'TypeScript', 'AI workflow', 'Vercel'],
  },
  {
    title: 'Health tracker monetization and retention release',
    date: '2026-02-19',
    category: 'mobile-release',
    problem:
      'A health tracking app needed release iteration around monetization, accessibility, notification reliability, app completeness, and store-facing polish.',
    approach: [
      'Adjusted the monetization model and removed clinical or overly specific data assumptions from the public-facing flow.',
      'Improved UI structure, accessibility, notification handling, and settings connectivity across the app.',
      'Kept build numbers, icons, expo-doctor cleanup, and release documents aligned with the next submission.',
    ],
    result:
      'The portfolio gains a clearer mid-February mobile release story around retention and store readiness.',
    stack: ['React Native', 'Expo', 'RevenueCat', 'Notifications', 'Accessibility'],
  },
  {
    title: 'Debt payoff app MVP hardening',
    date: '2026-02-18',
    category: 'native-product',
    problem:
      'A debt payoff mobile product needed an MVP that emphasized the payoff flow while still covering errors, localization, tests, and retention basics.',
    approach: [
      'Bootstrapped the mobile product around payoff-first UX.',
      'Added unit tests, an error boundary, Korean localization, and cleanup of unfinished TODO surfaces.',
      'Improved the core UI and retention features while removing unused dependencies.',
    ],
    result:
      'The changelog now includes a compact example of turning a personal finance app idea into a hardened MVP.',
    stack: ['React Native', 'TypeScript', 'Testing', 'i18n'],
  },
  {
    title: 'Programmatic SEO content system',
    date: '2026-01-11',
    category: 'web-toolkit',
    problem:
      'A content-heavy web product needed search-oriented architecture, robust AI-generated article handling, and clearer information architecture.',
    approach: [
      'Added topic-cluster structure, programmatic SEO routes, article indexes, and Open Graph image support.',
      'Hardened AI response parsing with better error messages and duplicate slug handling.',
      'Used a RAG-assisted content generation path while keeping parsing failures visible instead of silently accepting malformed output.',
    ],
    result:
      'The January work fills a visible gap with web growth, content architecture, and AI-assisted publishing experience.',
    stack: ['Next.js', 'SEO', 'AI workflow', 'Supabase', 'TypeScript'],
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
    title: 'Portfolio evidence model refinement',
    date: '2026-06-27',
    category: 'portfolio-system',
    problem:
      'A public portfolio can become a loose activity list when project records, route structure, and changelog entries each tell a different story.',
    approach: [
      'Grouped changelog entries by month so recent work reads as product engineering notes instead of scattered commits.',
      'Clarified the portfolio around project records, monthly changes, and verification evidence.',
      'Removed prototype-heavy surfaces and kept the first screen focused on positioning and proof.',
    ],
    result:
      'The portfolio now presents commit history as a public-safe evidence system rather than a raw project archive.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Public safety checks'],
  },
  {
    title: 'Mobile product-catalog release boundary',
    date: '2026-06-27',
    category: 'mobile-release',
    problem:
      'Mobile release work becomes risky when product identifiers, entitlement checks, release assets, credentials, and backend smoke tests are verified in separate paths.',
    approach: [
      'Routed billing webhook authorization through the product catalog boundary.',
      'Aligned subscription product identifiers with the iOS release path.',
      'Kept release assets, protected credentials, and backend smoke checks tied to the same submission readiness flow.',
    ],
    result:
      'Store-facing mobile release evidence became easier to review without exposing private credentials or issue references.',
    stack: ['Expo', 'React Native', 'RevenueCat', 'Supabase', 'EAS'],
  },
  {
    title: 'Native widget and Expo config ownership',
    date: '2026-06-18',
    category: 'mobile-release',
    problem:
      'Native widgets and Expo configuration can drift when app config, package config, privacy manifests, and generated native surfaces each define their own policy.',
    approach: [
      'Moved native policy ownership back into the Expo configuration path.',
      'Decoupled widget package configuration from app-local release assumptions.',
      'Checked widget rendering, localized payloads, native pager behavior, and dependency compatibility together.',
    ],
    result:
      'The native mobile boundary became more explicit before store-facing release checks.',
    stack: ['Expo', 'React Native', 'WidgetKit', 'TypeScript', 'Config plugins'],
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
    title: 'Agent semantic tooling hardening',
    date: '2026-05-19',
    category: 'agent-tooling',
    problem:
      'Semantic agent tooling needs predictable diagnostics, language-server startup behavior, and release documentation before it can be trusted as a reusable package.',
    approach: [
      'Added automatic diagnostics timeout policy and per-call timeout handling.',
      'Improved workspace seeding and language adapter coverage beyond the initial TypeScript path.',
      'Documented installation, diagnostic examples, maintainer workflow, and package release metadata.',
    ],
    result:
      'The public LSP bridge became more reliable as an installable tool instead of a one-off local integration.',
    stack: ['TypeScript', 'Node.js', 'MCP', 'LSP', 'Language servers'],
  },
  {
    title: 'Mobile release gate system',
    date: '2026-06-27',
    featured: true,
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
    featured: true,
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
    featured: true,
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
  {
    title: 'Menu scraper scheduling utility',
    date: '2025-11-24',
    category: 'web-toolkit',
    problem:
      'A small automation utility needed a stable web project base and a predictable schedule for collecting menu data.',
    approach: [
      'Bootstrapped the Next.js utility project and kept the workflow narrow around scraping and schedule control.',
      'Adjusted cron timing so collection could run during the intended operating window.',
      'Updated dependencies when framework security advisories required maintenance.',
    ],
    result:
      'The changelog now includes a lightweight automation example between larger mobile and platform projects.',
    stack: ['Next.js', 'Cron', 'Automation', 'React'],
  },
  {
    title: 'Scheduler iOS widget iteration',
    date: '2025-09-01',
    category: 'native-product',
    problem:
      'A scheduler app needed widget-specific project structure and data-update guidance before the native surface could be treated as part of the product.',
    approach: [
      'Added the initial iOS widget project structure.',
      'Documented example data-update paths for widget state.',
      'Kept version updates aligned with the widget iteration instead of leaving native changes as ad hoc files.',
    ],
    result:
      'The monthly changelog now shows native widget exploration before the later mobile release-gate work.',
    stack: ['Flutter', 'iOS Widget', 'Native extension', 'Release versioning'],
  },
  {
    title: 'Flutter auth and notification release hardening',
    date: '2025-08-18',
    category: 'mobile-release',
    problem:
      'Flutter mobile apps with web-linked user flows needed account linking, notification behavior, permissions, and versioning to move together.',
    approach: [
      'Added anonymous and social account linking flows across the app surface.',
      'Wired FCM, local notification handling, and iOS background notification permissions into the release path.',
      'Updated Android SDK and app versions as part of the same release-readiness work.',
    ],
    result:
      'August work now appears as a concrete mobile release-hardening month instead of an empty gap.',
    stack: ['Flutter', 'Firebase', 'FCM', 'iOS', 'Android'],
  },
  {
    title: 'Weight tracking app bootstrap and release setup',
    date: '2025-07-31',
    category: 'native-product',
    problem:
      'A weight tracking product needed a mobile shell, Firebase setup, authentication, app identity, and release configuration before feature work could stand on its own.',
    approach: [
      'Set up Firebase, app icon, splash screen, and release keystore configuration.',
      'Added Google and Apple sign-in paths plus account deletion support.',
      'Handled foreground/background refresh behavior and status-bar presentation as part of the mobile shell.',
    ],
    result:
      'The changelog now captures the July mobile product foundation work that preceded later notification and release iterations.',
    stack: ['Flutter', 'Firebase', 'Authentication', 'Release signing'],
  },
  {
    title: 'Early scheduler feature pass',
    date: '2025-01-06',
    category: 'native-product',
    problem:
      'The scheduler mobile project needed early feature and bug-fix iteration before later authentication, notification, and widget work could be layered on.',
    approach: [
      'Used short feature and fix commits to move the initial Flutter app forward.',
      'Kept the entry conservative because the available commit subjects for this month are terse.',
      'Treats the month as foundation evidence rather than a detailed product claim.',
    ],
    result:
      'January 2025 is represented without overstating what the local commit subjects prove.',
    stack: ['Flutter', 'Mobile UI', 'Early product iteration'],
  },
  {
    title: 'Scheduler social login integration',
    date: '2024-11-11',
    category: 'native-product',
    problem:
      'The scheduler app needed account entry work so the mobile surface could move beyond anonymous local usage.',
    approach: [
      'Integrated social login into the Flutter app flow.',
      'Iterated on the early authentication surface across several feature commits.',
      'Kept the public summary focused on authentication capability rather than provider-specific private setup.',
    ],
    result:
      'The November 2024 month now records a concrete mobile account-flow milestone.',
    stack: ['Flutter', 'Authentication', 'Mobile app'],
  },
  {
    title: 'Scheduler calendar optimization pass',
    date: '2024-10-27',
    category: 'native-product',
    problem:
      'Calendar-heavy scheduler work needed early product iteration around core feature behavior and calendar performance.',
    approach: [
      'Iterated the scheduler app through multiple feature commits.',
      'Focused one pass on calendar optimization so the core surface could remain usable as data grew.',
      'Kept this as a monthly product-system note because the older commit subjects are sparse.',
    ],
    result:
      'October 2024 now shows the calendar product direction before later authentication and widget work.',
    stack: ['Flutter', 'Calendar UI', 'Mobile performance'],
  },
  {
    title: 'Scheduler Flutter app bootstrap',
    date: '2024-07-16',
    category: 'native-product',
    problem:
      'The scheduler product needed an initial Flutter application base before authentication, notifications, and widgets could be developed.',
    approach: [
      'Started the scheduler Flutter project from an initial app commit.',
      'Added early feature work to establish the mobile product surface.',
      'Kept the changelog summary intentionally broad because the oldest commit subjects contain limited detail.',
    ],
    result:
      'The portfolio timeline now begins with the earliest local repository evidence available for this repo set.',
    stack: ['Flutter', 'Dart', 'Mobile app bootstrap'],
  },
  {
    title: 'B2B operations admin and public-site foundation',
    date: '2023-04-30',
    category: 'admin-ops',
    problem:
      'Early B2B product work needed both an operator-facing admin surface and a public-facing site to move forward together.',
    approach: [
      'Iterated admin React screens and public site routes from the same product context.',
      'Kept the public portfolio summary at workflow level instead of exposing private business names or internal paths.',
      'Used the month as the first commit-backed operations entry after the requested March 2023 starting point.',
    ],
    result:
      'The changelog now records the first available 2023 product-engineering month without overstating unavailable March evidence.',
    stack: ['React', 'Admin UI', 'Public site', 'Product operations'],
  },
  {
    title: 'Operations API and admin workflow expansion',
    date: '2023-05-31',
    category: 'ops-platform',
    problem:
      'The operations product needed backend routes, admin screens, and small scheduling utilities to support real workflow iteration.',
    approach: [
      'Expanded API and admin behavior across the same operations domain.',
      'Added utility work around time-based workflows where the commit history showed dedicated project activity.',
      'Translated terse commit history into public-safe system responsibilities rather than raw task names.',
    ],
    result:
      'May 2023 now appears as a concrete backend-plus-admin iteration month instead of a blank interval.',
    stack: ['React', 'Node.js', 'Python', 'Scheduling utilities'],
  },
  {
    title: 'Admin-backend integration hardening',
    date: '2023-06-30',
    category: 'ops-platform',
    problem:
      'A growing operations workflow needed the admin UI and backend service behavior to stay aligned through repeated fixes.',
    approach: [
      'Iterated backend service changes alongside admin-side updates.',
      'Kept the changelog entry focused on integration reliability because the source commits are historical and terse.',
      'Avoided duplicating private repository names in the public narrative.',
    ],
    result:
      'June 2023 is represented as an operations platform hardening period backed by repository activity.',
    stack: ['React', 'Backend services', 'Python', 'Operational tooling'],
  },
  {
    title: 'Public-site and admin account surface iteration',
    date: '2023-07-31',
    category: 'admin-ops',
    problem:
      'Public site updates and admin account surfaces needed continued iteration after the initial operations foundation.',
    approach: [
      'Moved public-facing assets and pages forward while refining account-oriented admin screens.',
      'Kept backend and script fixes tied to the same operations-support context.',
      'Summarized the month by visible product surface rather than internal task labels.',
    ],
    result:
      'July 2023 now has a product-surface entry covering the middle commits between the larger admin waves.',
    stack: ['React', 'Public site', 'Admin UI', 'Backend fixes'],
  },
  {
    title: 'Review operations maintenance pass',
    date: '2023-08-31',
    category: 'admin-ops',
    problem:
      'Operational review tools need steady maintenance when admin UI, backend scripts, and small runtime experiments change together.',
    approach: [
      'Grouped admin, server, and script fixes under one operations-maintenance entry.',
      'Kept experimental side work out of the main claim unless it supported product-system breadth.',
      'Used the commit month to show continuity between larger feature periods.',
    ],
    result:
      'August 2023 is no longer an unexplained gap in the engineering ledger.',
    stack: ['React', 'Server maintenance', 'Python', 'Product operations'],
  },
  {
    title: 'Legacy POS refactor groundwork',
    date: '2023-09-30',
    category: 'pos-system',
    problem:
      'A legacy point-of-sale front end needed concentrated refactor work before later payment-flow changes could be explained clearly.',
    approach: [
      'Separated the September refactor groundwork from the later payment-specific milestone.',
      'Focused the public entry on system modernization rather than private commit details.',
      'Connected the work to the larger POS modernization arc already present in the timeline.',
    ],
    result:
      'The POS case now has a visible setup month before the October payment refactor entry.',
    stack: ['React', 'POS UI', 'Legacy refactor', 'TypeScript'],
  },
  {
    title: 'Operations tooling maintenance bridge',
    date: '2023-11-30',
    category: 'admin-ops',
    problem:
      'After the POS-heavy refactor month, operations repositories still needed smaller admin, server, and automation fixes.',
    approach: [
      'Grouped low-level maintenance commits into a conservative month-level operations note.',
      'Avoided treating maintenance as a new product claim without stronger commit evidence.',
      'Preserved continuity in the changelog between major 2023 product entries.',
    ],
    result:
      'November 2023 now records the maintenance work visible in the registered repository history.',
    stack: ['React', 'Server fixes', 'Automation scripts'],
  },
  {
    title: 'Year-end operations stabilization',
    date: '2023-12-31',
    category: 'admin-ops',
    problem:
      'The year-end operations codebase needed stabilization across admin, server, and review-support surfaces.',
    approach: [
      'Summarized late-year fixes as stabilization rather than inventing a broader feature claim.',
      'Kept the entry public-safe by describing the workflow class, not private project identifiers.',
      'Linked the month to the same operations platform thread used for the surrounding 2023 entries.',
    ],
    result:
      'December 2023 is covered by a cautious stabilization entry based on registered repository commits.',
    stack: ['React', 'Backend services', 'Operations tooling'],
  },
  {
    title: 'Scheduler app and service iteration',
    date: '2024-01-31',
    category: 'native-product',
    problem:
      'The scheduler product needed coordinated app and server iteration before the later Flutter-specific mobile work.',
    approach: [
      'Grouped app-side and service-side scheduler commits into one product-system entry.',
      'Kept the summary broad because the historical commit messages are short and implementation-specific.',
      'Separated this earlier service iteration from the later mobile app bootstrap.',
    ],
    result:
      'January 2024 now shows scheduler product work before the mobile timeline begins in earnest.',
    stack: ['Mobile app', 'Scheduler service', 'Product iteration'],
  },
  {
    title: 'Scheduler service stabilization',
    date: '2024-02-29',
    category: 'native-product',
    problem:
      'Scheduler app and server changes needed a smaller stabilization pass after the heavier January iteration.',
    approach: [
      'Captured the month as focused app-service maintenance rather than a new major feature.',
      'Maintained the same product thread used by January and later scheduler entries.',
      'Kept the public summary free of internal repository labels.',
    ],
    result:
      'February 2024 now has a commit-backed scheduler stabilization note.',
    stack: ['Mobile app', 'Backend service', 'Scheduler workflows'],
  },
  {
    title: 'Delivery operations and scheduler service pass',
    date: '2024-03-31',
    category: 'realtime-backend',
    problem:
      'Delivery-oriented backend work and scheduler services needed parallel iteration across multiple registered repositories.',
    approach: [
      'Grouped delivery service, scheduler service, and small app fixes into one operations-platform month.',
      'Used an anonymized domain label so the public portfolio does not expose private operating details.',
      'Connected the work to the later real-time delivery backend entry.',
    ],
    result:
      'March 2024 now provides the missing lead-in to the April real-time backend milestone.',
    stack: ['Backend services', 'Scheduling', 'Operations systems', 'Python'],
  },
  {
    title: 'Scheduler dark-mode polish',
    date: '2024-05-31',
    category: 'native-product',
    problem:
      'The scheduler product needed small presentation fixes so the app could remain coherent across visual modes.',
    approach: [
      'Captured the dark-mode and app-service maintenance commits as a narrow polish entry.',
      'Kept the month intentionally modest because the registered commit volume was low.',
      'Left the larger architectural claims to months with stronger evidence.',
    ],
    result:
      'May 2024 is represented without inflating a small but real product-polish month.',
    stack: ['Mobile UI', 'Dark mode', 'Scheduler service'],
  },
  {
    title: 'Prototype systems and service upkeep',
    date: '2024-06-30',
    category: 'testing-ci',
    problem:
      'Several small repositories showed service upkeep and prototype work before the scheduler mobile app became the main thread.',
    approach: [
      'Grouped low-volume game, scheduler, and service commits under a conservative prototype-systems entry.',
      'Did not treat the month as a shipped feature without stronger evidence.',
      'Kept it in the changelog to preserve the actual commit-backed timeline.',
    ],
    result:
      'June 2024 no longer disappears from the monthly record while staying honest about scope.',
    stack: ['Prototype apps', 'Service maintenance', 'Flutter', 'Python'],
  },
  {
    title: 'Health and game prototype checkpoint',
    date: '2024-08-31',
    category: 'testing-ci',
    problem:
      'Small prototype repositories appeared between scheduler milestones and needed a truthful public-safe representation.',
    approach: [
      'Recorded health-monitor and game-prototype work as exploratory product-system evidence.',
      'Kept the entry short because the registered commit set for the month was small.',
      'Avoided presenting prototypes as production products.',
    ],
    result:
      'August 2024 is now covered as a prototype checkpoint rather than a blank month.',
    stack: ['Prototype apps', 'Mobile experimentation', 'Runtime checks'],
  },
  {
    title: 'Career project site bootstrap',
    date: '2025-02-28',
    category: 'portfolio-system',
    problem:
      'A public career-facing project site needed an initial structure before later portfolio and content-system work.',
    approach: [
      'Captured the registered project-site commits as a public evidence-system milestone.',
      'Kept the description separate from the unrelated POS operations entry with the same month.',
      'Focused on site structure and presentation rather than private application details.',
    ],
    result:
      'February 2025 now includes the career-site work visible in the registered repository history.',
    stack: ['Web', 'Portfolio content', 'Project presentation'],
  },
  {
    title: 'Public profile content and deploy iteration',
    date: '2025-03-31',
    category: 'portfolio-system',
    problem:
      'A public profile site needed repeated content and deployment iteration before it could function as an application asset.',
    approach: [
      'Grouped content, page, and deploy commits into one portfolio-system entry.',
      'Kept the summary about public presentation rather than raw page-by-page activity.',
      'Positioned the work as the precursor to the later portfolio evidence model.',
    ],
    result:
      'March 2025 is represented by the public profile and deployment work visible in the commit history.',
    stack: ['Next.js', 'Public profile', 'Deployment', 'Content system'],
  },
  {
    title: 'Interview content and app-link routing',
    date: '2025-04-30',
    category: 'portfolio-system',
    problem:
      'Career-facing web content needed interview-oriented pages and reliable outbound app-link handling.',
    approach: [
      'Iterated profile content and interview page surfaces.',
      'Added app-store link handling as part of the same public presentation flow.',
      'Kept the entry distinct from the AI review operations milestone already present for April.',
    ],
    result:
      'April 2025 now reflects both operations AI work and public career-site iteration.',
    stack: ['Next.js', 'Content pages', 'Routing', 'App links'],
  },
  {
    title: 'Social writing surface bootstrap',
    date: '2025-05-31',
    category: 'web-toolkit',
    problem:
      'A social writing product needed authentication, profile, writing, and mobile-web surface work before feed features could matter.',
    approach: [
      'Built the early auth, profile, writing-page, and webview-oriented flows.',
      'Grouped the registered repository commits into one product-surface milestone.',
      'Kept the public wording generic so the portfolio explains the system without exposing private labels.',
    ],
    result:
      'May 2025 now has a concrete product entry between the April profile work and June feed iteration.',
    stack: ['Next.js', 'Authentication', 'Profile UI', 'Mobile webview'],
  },
  {
    title: 'Social feed interaction iteration',
    date: '2025-06-30',
    category: 'web-toolkit',
    problem:
      'After the writing surface existed, the product needed feed, search, detail, comment, like, and auth-routing behavior.',
    approach: [
      'Expanded the social surface around feed discovery and post-detail interaction.',
      'Connected comment and like behavior to authenticated routing expectations.',
      'Kept the entry at feature-boundary level instead of exposing internal implementation names.',
    ],
    result:
      'June 2025 now explains the interaction layer that followed the May product bootstrap.',
    stack: ['Next.js', 'Feed UI', 'Search', 'Comments', 'Authentication'],
  },
  {
    title: 'Profile automation cadence',
    date: '2025-10-31',
    category: 'portfolio-system',
    problem:
      'A public developer profile needs automated refreshes to stay current without turning the portfolio into manual bookkeeping.',
    approach: [
      'Recorded the generated-profile commit stream as automation evidence rather than product feature volume.',
      'Kept the changelog entry modest because the work is cadence and publishing infrastructure.',
      'Used the month to show continuous public-profile maintenance between larger product projects.',
    ],
    result:
      'October 2025 is covered by the registered automation commits without overstating their product scope.',
    stack: ['GitHub automation', 'Generated content', 'Public profile'],
  },
  {
    title: 'Nutrition app service and AI advice boundary',
    date: '2026-03-31',
    category: 'ai-product',
    problem:
      'A nutrition app needed service boundaries, AI advice behavior, and app configuration work before the later feature expansion could be explained.',
    approach: [
      'Grouped AI meal advice, storage, notification, and service-layer commits into one product milestone.',
      'Kept the public summary focused on product behavior rather than personal data or private service details.',
      'Connected the March foundation to the April nutrition app expansion already in the timeline.',
    ],
    result:
      'March 2026 now provides the missing foundation month for the nutrition-app arc.',
    stack: ['Flutter', 'AI advice', 'Notifications', 'Local storage', 'Service layer'],
  },
];

export const skills: SkillContext[] = [
  {
    group: 'Product front-end',
    tools: ['React', 'Next.js', 'TypeScript', 'React Native'],
    context: 'Complex product interfaces, App Router surfaces, mobile app flows, product-state-driven UI, and typed component contracts.',
    evidenceHref: '/en/changelog',
    evidenceLabel: 'Review product UI changes',
  },
  {
    group: 'State and product models',
    tools: ['Zustand', 'Immer', 'AST-like editor models'],
    context: 'Editor state ownership, variant behavior, nested structures, and product actions that need clear source-of-truth boundaries.',
    evidenceHref: '/en/changelog',
    evidenceLabel: 'Review state model evidence',
  },
  {
    group: 'Quality and verification',
    tools: ['Vitest', 'Testing Library', 'Maestro', 'E2E checks', 'CI'],
    context: 'Regression prevention for preview/output parity, rendering contracts, release gates, and user-facing workflows.',
    evidenceHref: '/en/changelog',
    evidenceLabel: 'Review verification notes',
  },
  {
    group: 'Operations and backend understanding',
    tools: ['NestJS', 'FastAPI', 'Spring API', 'MySQL', 'Oracle'],
    context: 'Admin workflows, API contracts, permission-sensitive screens, and data structures behind product interfaces.',
    evidenceHref: '/en/changelog',
    evidenceLabel: 'Review operations notes',
  },
  {
    group: 'Release and deployment',
    tools: ['Docker', 'GitHub Actions', 'Firebase', 'Vercel', 'EAS'],
    context: 'Environment separation, repeatable release paths, static portfolio deployment, mobile store readiness, and production checks.',
    evidenceHref: '/en/changelog',
    evidenceLabel: 'Review release evidence',
  },
  {
    group: 'AI workflow',
    tools: ['Codex', 'Claude Code', 'OpenAI API', 'MCP', 'LSP'],
    context: 'Agent-assisted codebase exploration, semantic tooling, root-cause narrowing, CI failure triage, and AI-assisted product workflows.',
    evidenceHref: '/en/ai-workflow',
    evidenceLabel: 'Review AI workflow',
  },
];

export const aiWorkflowSteps = [
  {
    title: 'Intake the request',
    description: 'Most sessions start from a PRD, GitHub issue, screenshot, crash log, or a direct product concern.',
    tools: ['PRD', 'GitHub issue', 'Screenshot', 'Crash log'],
    artifact: 'A scoped task frame that separates repo work from external console or store work.',
  },
  {
    title: 'Scan repo context',
    description: 'Codex checks local files, commit history, issue context, generated output, and existing project rules before editing.',
    tools: ['Codex', 'rg', 'git history', 'AGENTS.md', 'public checks'],
    artifact: 'A short owner map: files to touch, files to leave alone, and the rule that should stay authoritative.',
  },
  {
    title: 'Capture evidence',
    description: 'The useful sessions keep the observed state visible with screenshots, logs, route output, or browser snapshots.',
    tools: ['Playwright', 'build logs', 'simulator logs', 'route output'],
    artifact: 'A before-state that explains why the change is needed without exposing private session details.',
  },
  {
    title: 'Patch the owner',
    description: 'The implementation changes the canonical source instead of layering fallback UI, duplicate data, or alternate behavior.',
    tools: ['React', 'TypeScript', 'shared helpers', 'data model'],
    artifact: 'A narrow diff that makes the product rule, UI copy, and verification target point to the same source.',
  },
  {
    title: 'Verify the result',
    description: 'Sessions close only after checks run and the rendered or runtime surface matches the requested behavior.',
    tools: ['ESLint', 'Next build', 'Route check', 'Public-safety check', 'Playwright'],
    artifact: 'Passing commands plus a rendered page, route response, simulator result, or deployment status.',
  },
  {
    title: 'Ship and record',
    description: 'Several sessions end with commit, push, deployment, issue closure, or a public-safe changelog entry.',
    tools: ['git commit', 'git push', 'Vercel', 'changelog'],
    artifact: 'A traceable finish: commit hash, deployment result, verification note, or monthly engineering record.',
  },
];

export function sortChangelogEntriesByDateDesc<T extends ChangelogEntry>(entries: T[]) {
  return [...entries].sort((left, right) => right.date.localeCompare(left.date));
}

export function getFeaturedChangelogEntries<T extends ChangelogEntry>(entries: T[], limit = 3) {
  return sortChangelogEntriesByDateDesc(entries)
    .filter((entry) => entry.featured)
    .slice(0, limit);
}

export function groupChangelogEntriesByDate<T extends ChangelogEntry>(entries: T[]) {
  return sortChangelogEntriesByDateDesc(entries).reduce<Array<{ date: string; entries: T[] }>>((groups, entry) => {
    const entryMonth = entry.date.slice(0, 7);
    const lastGroup = groups.at(-1);

    if (lastGroup?.date === entryMonth) {
      lastGroup.entries.push(entry);
      return groups;
    }

    groups.push({ date: entryMonth, entries: [entry] });
    return groups;
  }, []);
}

export function formatChangelogDate(date: string, locale: 'en' | 'ko') {
  const [year, month] = date.split('-');

  if (locale === 'ko') {
    return `${year}.${month}`;
  }

  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    timeZone: 'UTC',
  }).format(new Date(`${year}-${month}-01T00:00:00.000Z`));
}
