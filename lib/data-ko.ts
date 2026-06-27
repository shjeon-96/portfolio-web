import type { CaseStudy, ChangelogEntry, ProjectHighlight, SkillContext } from '@/lib/data';

export const proofPointsKo = [
  '오픈소스 에이전트 도구',
  '모바일 릴리즈 게이트',
  '네이티브 제품 아키텍처',
  '에디터 엔진 시스템',
];

export const projectHighlightsKo: ProjectHighlight[] = [
  {
    title: 'codex-lsp-bridge',
    label: '오픈소스 에이전트 도구',
    summary:
      'Codex가 로컬 language server에서 diagnostics, definition, references, symbols, hover, status를 읽기 전용으로 가져오게 하는 MCP/LSP 브리지입니다.',
    stack: ['TypeScript', 'Node.js', 'MCP', 'LSP', 'Vitest'],
    status: '공개 패키지와 GitHub 저장소',
    href: 'https://github.com/shjeon-96/codex-lsp-bridge',
  },
  {
    title: 'Gyeol Mobile',
    label: 'Expo/React Native 제품 플랫폼',
    summary:
      'native policy, EAS configuration, runtime environment, widgets, store metadata, UI smoke evidence를 릴리즈 게이트로 묶은 calendar-first 모바일 제품입니다.',
    stack: ['Expo', 'React Native', 'TypeScript', 'Supabase', 'EAS'],
    status: 'iOS/Android 릴리즈 워크플로우',
  },
  {
    title: 'PureFlow',
    label: '네이티브 생산성 앱',
    summary:
      'MVVM, feature module, adaptive navigation, SwiftData, CloudKit sync, widget, share extension target으로 구성한 SwiftUI 생산성 앱입니다.',
    stack: ['SwiftUI', 'SwiftData', 'CloudKit', 'Firebase', 'Swift Testing'],
    status: 'iOS, iPadOS, Mac Catalyst 아키텍처',
  },
  {
    title: 'Web Toolkit',
    label: 'Privacy-first 개발자 도구',
    summary:
      'client-side processing, offline PWA, i18n, WebAssembly 기반 처리, shareable tool state를 중심으로 구성한 브라우저 개발자 도구 제품입니다.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vitest'],
    status: '공개 웹 제품 방향',
    href: 'https://github.com/shjeon-96/dev-tool-kit',
  },
  {
    title: 'app-store-connect-release',
    label: 'Codex 릴리즈 검토 플러그인',
    summary:
      'App Store Connect 제출 입력을 보수적으로 검토하고 App Review 응답 초안을 작성하기 위한 공개 Codex 플러그인입니다.',
    stack: ['Python', 'Codex plugin', 'App Store Connect', 'Release workflow'],
    status: '공개 GitHub 저장소',
    href: 'https://github.com/shjeon-96/app-store-connect-release',
  },
  {
    title: 'IdeaToPRD',
    label: 'AI 제품 기획 SaaS',
    summary:
      '아이디어 입력을 구조화된 PRD와 제품 계획으로 바꾸는 AI-assisted planning 제품 방향입니다.',
    stack: ['Next.js', 'TypeScript', 'AI workflow', 'Vercel'],
    status: '공개 저장소와 라이브 웹 surface',
    href: 'https://github.com/shjeon-96/ideatoprd',
  },
  {
    title: 'Nightbound Survival',
    label: 'Bevy 게임 런타임',
    summary:
      'formatting, compile, test binary build, test execution을 하나의 검증 스크립트로 묶은 Rust/Bevy 기반 게임 프로젝트입니다.',
    stack: ['Rust', 'Bevy', 'Serde', 'Cargo'],
    status: '인터랙티브 시스템과 런타임 검증',
  },
  {
    title: '세무·정산 운영 플랫폼',
    label: '백오피스와 모바일 운영 흐름',
    summary:
      '세무대리 신청, 매입·매출 대시보드, 가맹점 승인, 알림, Vue에서 React와 Next.js로 이어지는 마이그레이션을 다룬 업무 시스템입니다.',
    stack: ['Flutter', 'React', 'Next.js', 'Firebase', 'Docker'],
    status: '운영 workflow와 프레임워크 마이그레이션',
  },
  {
    title: 'AI 리뷰 운영 시스템',
    label: 'AI 보조 관리자 workflow',
    summary:
      'React 관리자 UI, NestJS API, Python 데이터 수집, JWT 인증, MySQL 스키마, OpenAI 기반 리뷰 응답 흐름을 함께 다룬 멀티스택 운영 도구입니다.',
    stack: ['React', 'NestJS', 'Python', 'OpenAI API', 'MySQL'],
    status: '운영자가 통제하는 AI workflow',
  },
  {
    title: '데스크톱 POS 시스템',
    label: 'Offline-first Flutter desktop app',
    summary:
      'Windows/macOS POS 앱에서 테이블 주문, 결제 흐름, 프린터 연동, SQLite 로컬 저장소, 네트워크 복구 후 동기화를 다뤘습니다.',
    stack: ['Flutter', 'Dart', 'SQLite', 'Desktop', 'Hardware integration'],
    status: '식당 운영과 로컬 데이터 안정성',
  },
  {
    title: '실시간 배달 운영 백엔드',
    label: 'Socket.io 운영 백엔드',
    summary:
      '실시간 주문 상태, updater socket event, 경로 최적화 지원, scraping pipeline, log management를 포함한 배달 운영 백엔드입니다.',
    stack: ['NestJS', 'Python', 'Socket.io', 'Realtime operations'],
    status: '백엔드와 실시간 workflow 경험',
  },
  {
    title: 'POS 리팩토링과 결제 workflow',
    label: '레거시 React POS 현대화',
    summary:
      '결제/취소 모달, 현금영수증, 테이블 이동·분리·합석, 그룹 결제, 성능 정리를 포함한 React POS 리팩토링입니다.',
    stack: ['React', 'JavaScript', 'POS', 'Payment workflow'],
    status: '운영 중인 시스템의 레거시 현대화',
  },
  {
    title: '유통 제품 카탈로그 사이트',
    label: 'Next.js SEO와 catalog surface',
    summary:
      'SSR, 동적 라우팅, 이미지 최적화, lazy loading, i18n route, 검색, 문의 흐름을 포함한 반응형 제품 카탈로그 사이트입니다.',
    stack: ['Next.js', 'TypeScript', 'SSR', 'SEO', 'i18n'],
    status: '외부-facing catalog와 성능 작업',
  },
];

export const caseStudiesKo: CaseStudy[] = [
  {
    slug: 'codex-lsp-bridge',
    title: 'Codex LSP Semantic Safety Layer',
    label: '오픈소스 AI 개발 도구',
    summary:
      '코딩 에이전트가 diagnostics, definition, references, symbols, hover 같은 언어 서버 정보를 읽기 전용으로 사용할 수 있게 MCP/LSP 브리지를 만들었습니다.',
    stack: ['TypeScript', 'Node.js', 'MCP', 'Language Server Protocol', 'Vitest'],
    publicProof: [
      'shjeon-96 계정의 공개 GitHub 저장소',
      '패키지 smoke check를 포함한 공개 배포 워크플로우',
      'MCP 도구, 안전 경계, maintainer workflow 문서화',
    ],
    problem:
      'AI 코딩 에이전트는 텍스트 탐색만으로 빠르게 움직일 수 있지만, 큰 코드베이스에서는 변경을 신뢰하기 전에 언어 서버의 semantic feedback이 필요했습니다.',
    role:
      '읽기 전용 도구 경계, workspace-root 안전 모델, 언어 어댑터 흐름, 패키지 계약, 공개 배포 검증 경로를 설계했습니다.',
    approach: [
      '에이전트가 프로젝트 상태를 직접 바꾸지 않도록 언어 서버 기능을 좁은 MCP 인터페이스로 노출했습니다.',
      'root check와 symlink escape 방어를 포함해 workspace 경계를 명시적으로 다뤘습니다.',
      'diagnostics timeout 정책, package smoke check, 통합 테스트를 추가해 릴리즈 전 동작을 검증했습니다.',
    ],
    result:
      'semantic code intelligence를 AI 보조 개발 워크플로우 안에서 더 안전하게 사용할 수 있는 공개 에이전트 도구 패키지로 만들었습니다.',
    verification: [
      'TypeScript 동작, diagnostics 처리, package contract, 언어 어댑터 경계를 단위/통합 테스트로 검증했습니다.',
      'build, type-check, smoke install, smoke package를 패키지 검증 경로에 포함했습니다.',
      '지원 도구, 안전 경계, maintainer workflow를 공개 문서로 정리했습니다.',
    ],
    tradeOffs: [
      'semantic context는 제공하되 도구가 프로젝트를 직접 수정하는 alternate mutation path가 되지 않도록 read-only로 제한했습니다.',
      'TypeScript를 우선 검증 언어로 두고, 다른 language server는 adapter boundary를 통해 확장 가능하게 남겼습니다.',
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
    title: '모바일 릴리즈 게이트와 Shared Foundations',
    label: 'Expo/React Native 제품 플랫폼',
    summary:
      '모바일 제품 모노레포에서 release policy, shared packages, native boundary, 제품 문서가 앱 전반에서 같은 기준으로 움직이도록 구조화했습니다.',
    stack: ['Expo', 'React Native', 'TypeScript', 'Supabase', 'EAS', 'Maestro'],
    publicProof: [
      '릴리즈 정책을 검증 스크립트로 고정',
      'shared foundation package를 package-level check로 보호',
      '제품 문서를 planning source of truth로 사용',
    ],
    problem:
      'native calendar, widgets, billing, invite, backend 연동을 가진 모바일 제품은 문서, 앱 코드, native policy, release script가 각각 다른 기준을 갖기 쉽습니다.',
    role:
      '제품 관점의 아키텍처 경계, shared package 규칙, 릴리즈 검증 스크립트, 공개 가능한 모바일 delivery workflow 문서화를 담당했습니다.',
    approach: [
      '제품 문서를 planning source of truth로 두고 앱 코드, 릴리즈 체크, 패키지 소유 경계가 같은 모델을 보게 했습니다.',
      'auth, billing, invite, notification, analytics, configuration처럼 반복되는 동작을 shared foundations와 package-level test로 이동했습니다.',
      'native policy, EAS configuration, runtime environment, widgets, store metadata, mobile UI smoke evidence를 릴리즈 게이트로 확인했습니다.',
    ],
    result:
      '공유 동작은 한 번 검증하고, store-facing build 전에 production readiness를 확인할 수 있는 반복 가능한 모바일 릴리즈 경로를 만들었습니다.',
    verification: [
      'Expo, EAS, native policy, runtime environment, store-readiness 입력을 release configuration check로 검증했습니다.',
      'shared foundation verification으로 앱별 중복 구현이 competing source of truth가 되지 않게 했습니다.',
      'mobile UI와 device-oriented smoke flow로 주요 앱 경로의 릴리즈 전 증거를 남겼습니다.',
    ],
    tradeOffs: [
      'native calendar, widget, billing, store 동작은 실제 모바일 경계가 필요해 web이나 Expo Go 경로를 릴리즈 증거로 쓰지 않았습니다.',
      '반복 동작의 소유자가 명확한 경우에만 shared package로 이동해 안정화 전 추상화로 인한 결합을 피했습니다.',
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
    title: 'AST 기반 비주얼 에디터 엔진',
    label: 'B2B 노코드 웹 빌더',
    summary:
      '컴포넌트 Variant, 스타일, 인터랙션, 데이터 바인딩, 미리보기, 배포 산출물이 같은 기준으로 움직여야 하는 비주얼 편집 화면을 구조화했습니다.',
    stack: ['React', 'Next.js', 'TypeScript', 'Zustand', 'Immer', 'Vitest'],
    publicProof: [
      '제품 모델 경계를 중심으로 정리한 공개 가능한 아키텍처 설명',
      '에디터 상태와 렌더링 계약 중심 회귀 검증',
      '이 포트폴리오의 인터랙티브 프로토타입 경로',
    ],
    problem:
      '노코드 에디터는 템플릿, 컴포넌트, 스타일, 이벤트, 데이터 바인딩을 하나의 일관된 모델로 편집·저장·미리보기·산출물 생성까지 연결해야 했습니다.',
    role:
      '프론트엔드 에디터 모델링, 상태 경계, 캔버스 조작 흐름, 편집 상태와 생성 산출물 사이의 계약을 담당했습니다.',
    approach: [
      '각 패널을 독립적인 UI로 다루기보다 AST에 가까운 제품 구조를 중심으로 편집 상태를 모델링했습니다.',
      '컴포넌트 Variant, Slot, Binding, Interaction이 서로 충돌하지 않도록 편집 시점 관심사와 런타임 관심사를 분리했습니다.',
      '미리보기와 산출물 경로에서 중복 판단이 생기지 않도록 소유 모듈과 회귀 테스트를 기준으로 정리했습니다.',
    ],
    result:
      'Variant, Slot, Data Binding, Interaction, Preview, Export, Deploy 기능을 같은 제품 모델 위에서 확장할 수 있는 에디터 코어를 만들었습니다.',
    verification: [
      '상태 전이와 렌더링 계약에 대한 단위/통합 테스트를 작성했습니다.',
      '미리보기와 생성 산출물에서 공유되는 동작을 회귀 시나리오로 확인했습니다.',
      '코드 리뷰 후속에서는 임시 수정이 아니라 소유 경계와 계약을 기준으로 검증했습니다.',
    ],
    tradeOffs: [
      '각 패널이 별도 local truth를 갖게 하지 않고 하나의 제품 구조를 중심으로 에디터를 모델링했습니다.',
      'Variant, Slot, Interaction이 숨은 결합 없이 확장되도록 편집 시점 상태와 런타임 동작을 분리했습니다.',
    ],
    verificationEvidence: ['상태 전이 단위 테스트', '미리보기 동작 통합 확인', '생성 산출물 회귀 리뷰'],
    links: [
      {
        label: '인터랙티브 프로토타입',
        href: '/editor-prototype',
      },
    ],
  },
  {
    slug: 'export-deploy-parity',
    title: 'Export/Deploy 산출물 정합성',
    label: '커머스 사이트 빌더',
    summary:
      '편집 상태에서 HTML/CSS/JS 및 배포용 산출물로 이어지는 경로를 안정화해 사용자가 설정한 결과와 실제 산출물이 어긋나지 않도록 했습니다.',
    stack: ['TypeScript', 'React', 'HTML/CSS', 'Liquid-style templates', 'Vitest'],
    publicProof: [
      '공개 가능한 산출물 정합성 설명',
      '생성 산출물 중심 회귀 확인',
      'preview와 deploy 경로가 공유하는 렌더링 계약',
    ],
    problem:
      '렌더링 규칙, asset 처리, repeat 동작, 조건부 표시가 여러 경로에서 다르게 해석되면 에디터 미리보기와 실제 산출물이 달라질 수 있었습니다.',
    role:
      '산출물 생성 경계를 정리하고, 여러 output 경로가 같은 판단을 해야 하는 부분을 공통 규칙으로 이동했습니다.',
    approach: [
      'Preview, Export, Deploy를 서로 다른 화면이 아니라 하나의 렌더링 계약을 공유해야 하는 경로로 다뤘습니다.',
      'Repeat, Slot, Asset, Font, Visibility 처리를 명시적인 생성 규칙으로 묶었습니다.',
      '눈으로 확인하는 것에 의존하지 않고 산출물 중심 회귀 검증을 추가했습니다.',
    ],
    result:
      '산출물 생성을 별도 부가 기능이 아니라 프론트엔드 파이프라인의 핵심으로 다루면서 편집 결과와 배포 결과 사이의 어긋남을 줄였습니다.',
    verification: [
      '생성 산출물 구조를 빌드 시점에 확인했습니다.',
      '조건부 렌더링과 중첩 구조에 대한 회귀 시나리오를 검증했습니다.',
      '공개 가능한 익명화 산출물 예시 기준으로 수동 리뷰했습니다.',
    ],
    tradeOffs: [
      '생성 산출물을 에디터 뒤의 구현 세부사항이 아니라 실제 제품 표면으로 다뤘습니다.',
      'preview와 deploy 경로를 각각 패치하지 않고 공통 규칙으로 판단을 이동했습니다.',
    ],
    verificationEvidence: ['생성 산출물 shape 확인', '조건부 렌더링 회귀 시나리오', '수동 output review'],
    links: [],
  },
  {
    slug: 'ai-review-operations',
    title: 'AI 리뷰 운영 시스템',
    label: 'AI 운영 도구',
    summary:
      '리뷰 데이터를 수집하고, AI가 응답 초안을 만들며, 운영자가 최종 검수할 수 있는 운영 흐름을 구축했습니다.',
    stack: ['React', 'NestJS', 'Python', 'OpenAI API', 'MySQL', 'JWT'],
    publicProof: [
      'AI 보조 운영 흐름의 공개 가능한 요약',
      '사람 검수와 수정 가능성을 제품 흐름에 유지',
      '권한, 빈 상태, 로딩, 실패 상태를 제품 상태로 처리',
    ],
    problem:
      '운영자는 수집된 리뷰 데이터와 AI 응답 제안을 이해하고, 최종 고객 응답을 통제할 수 있어야 했습니다.',
    role:
      '관리자 UI, API 계약, 크롤러 연동, 데이터베이스 구조, AI 응답 생성 흐름을 함께 다뤘습니다.',
    approach: [
      '수집, 분석, 검수, 응답 생성을 눈에 보이는 워크플로우 단계로 분리했습니다.',
      '로딩, 빈 상태, 실패 상태, 권한 상태를 관리자 화면에서 다룰 수 있게 했습니다.',
      'AI 결과를 숨겨진 자동화가 아니라 운영자가 확인하고 수정할 수 있는 출력으로 만들었습니다.',
    ],
    result:
      '반복적인 리뷰 응답 업무를 AI가 보조하되 운영자가 통제할 수 있는 운영 워크플로우로 전환했습니다.',
    verification: [
      '리뷰/응답 상태별 API 동작을 확인했습니다.',
      '권한이 반영된 관리자 UI를 검토했습니다.',
      '운영자 검수 지점 기준으로 수동 워크플로우 테스트를 진행했습니다.',
    ],
    tradeOffs: [
      'AI 제안을 고객-facing 응답으로 자동 전송하지 않고 운영자가 검토할 수 있게 유지했습니다.',
      '수집, 분석, 검수, 응답 생성을 분리해 운영자가 각 단계를 진단할 수 있게 했습니다.',
    ],
    verificationEvidence: ['API 상태 확인', '권한 기반 UI 검토', '운영자 handoff 수동 테스트'],
    links: [],
  },
  {
    slug: 'settlement-operations',
    title: '결제·정산 운영 흐름',
    label: '실시간 운영 시스템',
    summary:
      '정산, 권한, 가맹점 데이터, 실시간 알림 화면을 웹과 모바일 운영 흐름에 연결했습니다.',
    stack: ['React', 'React Native', 'Spring API', 'PG integration', 'Realtime notification'],
    publicProof: [
      '공개 가능한 운영 workflow 설명',
      '역할 기반 결제/정산 가시성',
      '실시간 상태 변화를 제품 상태로 모델링',
    ],
    problem:
      '역할과 운영 상태가 바뀌는 상황에서도 비즈니스 사용자는 결제·정산 데이터를 안정적으로 확인해야 했습니다.',
    role:
      '가맹점 데이터 관리, 정산 표시, 권한, 알림 화면을 위한 UI 흐름과 API 연동을 구현했습니다.',
    approach: [
      '결제와 정산 상태를 역할별 화면에서 명확히 볼 수 있게 했습니다.',
      '관리자와 모바일 화면이 같은 운영 개념을 기준으로 움직이도록 맞췄습니다.',
      '실시간 상태 변화를 단순 메시지가 아니라 제품 상태로 다뤘습니다.',
    ],
    result:
      '관리자와 모바일 화면에서 정산 운영 흐름을 더 명확하게 이해하고 처리할 수 있게 했습니다.',
    verification: [
      '역할별 UI 표시를 확인했습니다.',
      '정산 상태 API 연동을 검토했습니다.',
      '알림과 상태 변경 흐름을 수동으로 테스트했습니다.',
    ],
    tradeOffs: [
      '관리자와 모바일 흐름은 같은 운영 개념을 공유하되 역할별 화면 차이는 유지했습니다.',
      '실시간 업데이트를 놓치기 쉬운 메시지가 아니라 상태 모델 일부로 다뤘습니다.',
    ],
    verificationEvidence: ['역할별 UI 확인', '정산 API 연동 검토', '알림 상태 수동 테스트'],
    links: [],
  },
  {
    slug: 'legacy-admin-modernization',
    title: '레거시 관리자 시스템 현대화',
    label: '백오피스 마이그레이션',
    summary:
      '운영 중인 백오피스 흐름을 유지하면서 프레임워크 전환과 배포 안정화를 진행했습니다.',
    stack: ['Vue', 'React', 'Next.js', 'Firebase', 'Docker', 'GitHub Actions'],
    publicProof: [
      '공개 가능한 migration narrative',
      '환경 분리와 반복 가능한 릴리즈 확인',
      '프레임워크 전환 중 운영 연속성 유지',
    ],
    problem:
      '운영 시스템은 업무를 멈추지 않으면서 프레임워크 전환과 기능 개선을 함께 진행해야 했습니다.',
    role:
      '관리자 UI 전환, 서비스 워크플로우, 배포 환경, CI/CD 안정화 작업을 담당했습니다.',
    approach: [
      '모든 화면을 한 번에 다시 만들기보다 기능을 점진적으로 옮겼습니다.',
      'local, staging, production 환경을 분리해 잘못된 설정 적용 가능성을 낮췄습니다.',
      '반복 가능한 배포 자동화를 운영 흐름의 일부로 만들었습니다.',
    ],
    result:
      '운영 업무와 신규 기능 추가를 더 안정적으로 이어갈 수 있는 웹 기반을 만들었습니다.',
    verification: [
      '빌드와 배포 과정을 확인했습니다.',
      '이관된 화면의 업무 흐름을 검토했습니다.',
      '환경별 릴리즈 전 검증을 진행했습니다.',
    ],
    tradeOffs: [
      '운영 시스템이 계속 사용자 업무를 처리해야 했기 때문에 기능을 점진적으로 이동했습니다.',
      '환경 설정을 기능 작업과 분리해 production 이전에 릴리즈 실수를 잡기 쉽게 만들었습니다.',
    ],
    verificationEvidence: ['빌드 확인', '배포 workflow 검토', '환경별 릴리즈 검증'],
    links: [],
  },
];

export const changelogEntriesKo: ChangelogEntry[] = [
  {
    title: '세무 운영 플랫폼 마이그레이션 경로',
    date: '2025-11-30',
    category: 'ops-platform',
    problem: '운영 중인 업무 플랫폼에서 세무 신청, 매입·매출 대시보드, 가맹점 심사, 알림, 프레임워크 마이그레이션을 서비스 중단 없이 다뤄야 했습니다.',
    approach: [
      '레거시 Vue 화면을 React와 Next.js 구조로 단계적으로 옮겼습니다.',
      '세무대리 신청, 수임동의, 해지, 가맹점 승인, 관리 workflow를 운영 제품 상태로 다뤘습니다.',
      'Firebase 알림, Docker 배포, dashboard surface를 같은 백오피스 흐름에 연결했습니다.',
    ],
    result: '에디터와 AI 도구 외에도 실제 업무 운영 플랫폼 경험이 포트폴리오에 보강됐습니다.',
    stack: ['Flutter', 'React', 'Next.js', 'Firebase', 'Docker'],
  },
  {
    title: 'Offline-first 데스크톱 POS 아키텍처',
    date: '2025-02-28',
    category: 'pos-system',
    problem: '식당 POS는 네트워크가 불안정해도 주문, 결제, 프린터 출력, 매출 데이터가 계속 운영 가능해야 했습니다.',
    approach: [
      'Flutter Desktop으로 Windows와 macOS를 하나의 코드베이스에서 지원했습니다.',
      'SQLite 기반 로컬 저장소로 오프라인 운영 흐름을 유지했습니다.',
      '프린터와 주문 알림 workflow를 핵심 제품 경로로 통합했습니다.',
    ],
    result: '데스크톱 POS 작업은 offline-first 운영과 하드웨어 인접 제품 경험을 보여주는 축이 됐습니다.',
    stack: ['Flutter', 'Dart', 'SQLite', 'Desktop'],
  },
  {
    title: '실시간 배달 운영 백엔드',
    date: '2024-04-30',
    category: 'realtime-backend',
    problem: '배달 운영 시스템은 주문 상태, updater event, 경로 지원, 데이터 수집 로그가 즉시 반영되고 추적 가능해야 했습니다.',
    approach: [
      'Socket.io로 실시간 주문과 updater event를 처리했습니다.',
      'NestJS 백엔드와 Python 데이터 수집 책임을 분리했습니다.',
      '운영 이슈를 추적할 수 있도록 log와 error handling 흐름을 정리했습니다.',
    ],
    result: '체인지로그가 프론트엔드 UI뿐 아니라 백엔드와 실시간 운영 workflow 이해도까지 보여주게 됐습니다.',
    stack: ['NestJS', 'Python', 'Socket.io'],
  },
  {
    title: '레거시 POS 결제 리팩토링',
    date: '2023-10-31',
    category: 'pos-system',
    problem: '레거시 POS 프론트엔드의 결제, 영수증, 테이블, 정산 로직은 유지보수와 성능 정리가 필요했습니다.',
    approach: [
      '결제와 취소 modal flow를 리팩토링했습니다.',
      '테이블 이동, 분리, 합석, 그룹 지정, 그룹 결제 케이스를 정리했습니다.',
      '실제 운영 중인 화면에서 rendering과 유지보수성을 개선했습니다.',
    ],
    result: '과거 POS 작업이 실제 업무 workflow와 레거시 현대화 경험을 보강합니다.',
    stack: ['React', 'JavaScript', 'POS workflow'],
  },
  {
    title: '카탈로그 사이트 SEO와 i18n surface',
    date: '2025-03-31',
    category: 'catalog-site',
    problem: '제품 정보 사이트는 빠른 초기 로딩, 검색 가능한 catalog content, 다국어 route, 반응형 presentation이 필요했습니다.',
    approach: [
      'Next.js SSR, dynamic routing, image optimization을 사용했습니다.',
      '제품 정보 중심 catalog search와 inquiry flow를 구성했습니다.',
      '다국어 콘텐츠 전달을 위해 i18n route 구조를 추가했습니다.',
    ],
    result: 'Project Ledger에 외부-facing 웹 성능과 콘텐츠 아키텍처 작업이 추가됐습니다.',
    stack: ['Next.js', 'TypeScript', 'SSR', 'SEO', 'i18n'],
  },
  {
    title: 'App Store Review 보조 도구화',
    date: '2026-04-19',
    category: 'app-review-tooling',
    problem: '릴리즈 제출 작업은 문구와 입력값을 신중하게 다뤄야 하며, private data나 검증되지 않은 설명이 섞이면 리뷰 지연으로 이어질 수 있습니다.',
    approach: [
      '제출 입력 검토와 App Review 응답 초안 작성에 집중한 보수적인 플러그인으로 범위를 좁혔습니다.',
      '릴리즈 보조 문서 작성과 실제 스토어 운영 경계를 분리했습니다.',
      'private app release detail을 넣지 않고 공개 가능한 helper로 문서화했습니다.',
    ],
    result: '반복되는 릴리즈 검토 작업을 재사용 가능한 도구로 바꾼 작은 공개 사례가 추가됐습니다.',
    stack: ['Python', 'Codex plugin', 'App Store Connect'],
  },
  {
    title: 'AI PRD 생성 제품 surface',
    date: '2026-01-17',
    category: 'ai-product',
    problem: '초기 제품 아이디어는 구현 전에 구조화된 요구사항과 제품 계획으로 정리될 필요가 있습니다.',
    approach: [
      '아이디어 입력과 PRD 생성을 연결하는 AI-assisted product planning 흐름을 탐색했습니다.',
      '워크플로우가 실제 웹 앱으로 공유될 수 있도록 Next.js 제품 surface로 구성했습니다.',
      'private planning data를 노출하지 않고 제품 흐름 수준으로만 포트폴리오에 정리했습니다.',
    ],
    result: 'IdeaToPRD는 구현 중심 케이스 사이에 공개 가능한 AI 제품 기획 사례를 더합니다.',
    stack: ['Next.js', 'TypeScript', 'AI workflow', 'Vercel'],
  },
  {
    title: 'SwiftUI 제품 모듈 아키텍처',
    date: '2026-02-08',
    category: 'native-product',
    problem: '네이티브 생산성 앱에서 task, focus, label, widget, share, sync 화면이 늘어나도 구조가 무너지지 않아야 했습니다.',
    approach: [
      '앱 진입점, core utilities, data models, feature modules, shared UI, resources를 분리했습니다.',
      'SwiftUI, SwiftData, CloudKit, adaptive navigation을 네이티브 제품 경계로 사용했습니다.',
      '모델, 서비스, ViewModel 동작은 Swift Testing과 in-memory data path로 확인했습니다.',
    ],
    result: 'PureFlow는 웹 프론트엔드 밖의 네이티브 제품 아키텍처 경험을 보여주는 축이 됐습니다.',
    stack: ['SwiftUI', 'SwiftData', 'CloudKit', 'Swift Testing', 'XcodeGen'],
  },
  {
    title: 'Privacy-first 개발자 도구 제품 방향',
    date: '2026-06-18',
    category: 'web-toolkit',
    problem: '개발자 도구는 사용자가 민감한 JSON, JWT, 텍스트를 붙여 넣는 경우가 많아 서버 처리 경로를 신중히 다뤄야 했습니다.',
    approach: [
      'client-side processing, no server uploads, offline PWA 사용을 제품 방향으로 잡았습니다.',
      'text/code, media/design, converters, security 그룹으로 도구를 분류했습니다.',
      'i18n, command search, WebAssembly 처리, shareable state를 제품 기능으로 정리했습니다.',
    ],
    result: 'Web Toolkit은 유틸리티 중심 브라우저 소프트웨어를 공개 제품 방향으로 보여주는 항목이 됐습니다.',
    stack: ['Next.js', 'React', 'TypeScript', 'PWA', 'WebAssembly'],
  },
  {
    title: 'Bevy 런타임 검증 루프',
    date: '2026-06-27',
    category: 'game-runtime',
    problem: '게임 런타임은 gameplay 변경 이후 formatting, compile, tests가 계속 통과하는지 빠르게 확인할 수 있어야 했습니다.',
    approach: [
      'CI에서 쓰는 것과 같은 검증 경로를 하나의 script로 문서화했습니다.',
      'cargo 기반 check, test binary build, test execution 명령을 분리해 집중 검증할 수 있게 했습니다.',
      '게임 프로젝트도 실험이 아니라 반복 가능한 feedback이 필요한 제품 시스템으로 다뤘습니다.',
    ],
    result: 'Nightbound Survival은 Rust와 interactive runtime 경험을 제품 엔지니어링 흐름 안에 추가했습니다.',
    stack: ['Rust', 'Bevy', 'Cargo', 'Serde'],
  },
  {
    title: 'Agent LSP Bridge 릴리즈 계약',
    date: '2026-05-19',
    category: 'agent-tooling',
    problem: 'AI 코딩 워크플로우에는 프로젝트에 넓은 쓰기 권한을 주지 않으면서 semantic code feedback을 제공하는 도구가 필요했습니다.',
    approach: [
      'diagnostics, definitions, references, symbols, hover context를 읽기 전용 MCP 도구로 감쌌습니다.',
      'workspace-root check와 adapter boundary를 명시적으로 유지했습니다.',
      'build, type-check, integration test, smoke package check로 패키지 동작을 검증했습니다.',
    ],
    result: 'semantic code intelligence를 에이전트 보조 개발 워크플로우에서 공개 가능하고 반복 가능한 도구로 사용할 수 있게 됐습니다.',
    stack: ['TypeScript', 'Node.js', 'MCP', 'LSP', 'Vitest'],
  },
  {
    title: '모바일 릴리즈 게이트 시스템',
    date: '2026-06-27',
    category: 'mobile-release',
    problem: 'Expo config, store metadata, widgets, runtime environment, 제품 문서를 따로 확인하면 native mobile release 기준이 쉽게 어긋납니다.',
    approach: [
      'release configuration, native policy, product documentation이 하나의 delivery model을 보게 했습니다.',
      '반복되는 앱 동작이 shared packages에 남도록 shared foundation check를 추가했습니다.',
      'store-facing build 전에 mobile UI와 release smoke evidence를 확인했습니다.',
    ],
    result: 'iOS와 Android production distribution 전에 모바일 릴리즈 경로를 더 명확하게 검증할 수 있게 됐습니다.',
    stack: ['Expo', 'React Native', 'EAS', 'Maestro', 'TypeScript'],
  },
  {
    title: 'Export 런타임 정합성 규칙 정리',
    date: '2026-06-26',
    category: 'export-deploy',
    problem: '조건부 렌더링 규칙이 여러 경로에서 평가되면 미리보기와 배포 산출물이 달라질 수 있었습니다.',
    approach: [
      '공유 표시 판단을 하나의 공개 가능한 렌더링 계약으로 정리했습니다.',
      '중첩 구조가 실제 생성 산출물에서 어떻게 동작하는지 확인했습니다.',
      '영향 범위를 넓히기 전에 회귀 시나리오를 먼저 잡았습니다.',
    ],
    result: '같은 제품 상태가 미리보기, export, deploy 경로에서 어떻게 해석되는지 더 명확해졌습니다.',
    stack: ['TypeScript', 'React', 'Vitest'],
  },
  {
    title: 'Variant 상태 소유 경계 정리',
    date: '2026-06-25',
    category: 'editor-engine',
    problem: '컴포넌트 Variant 선택은 편집 상태와 런타임 상태의 경계가 흐리면 쉽게 불안정해집니다.',
    approach: [
      '디자인 시점 Variant 관심사와 런타임 인터랙션 관심사를 분리했습니다.',
      '공유 reader를 수정하기 전에 소유 경로와 상위 구조를 확인했습니다.',
      '선택 동작이 해당 제품 모델의 범위 안에서만 움직이도록 정리했습니다.',
    ],
    result: 'Variant 동작을 확장할 때 공유 reader가 넓은 우회 경로가 되지 않도록 만들었습니다.',
    stack: ['React', 'TypeScript', 'Zustand'],
  },
  {
    title: '생성 산출물 검토 루프',
    date: '2026-06-24',
    category: 'testing-ci',
    problem: '소스 코드만 보면 맞아 보여도 실제 HTML이나 배포 산출물에서 어긋남이 드러날 수 있습니다.',
    approach: [
      '수정 완료 전 실제 생성 산출물을 직접 확인했습니다.',
      '산출물 구조와 런타임 동작에 대한 회귀 검증을 추가했습니다.',
      '검증 기준을 사용자가 실제로 받는 output에 맞췄습니다.',
    ],
    result: '사용자에게 전달되는 산출물에 더 가까운 지점에서 회귀를 잡을 수 있게 됐습니다.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Vitest'],
  },
  {
    title: 'AI 에이전트 기반 원인 분석 루프',
    date: '2026-06-23',
    category: 'ai-workflow',
    problem: '큰 프론트엔드 시스템에서는 실제 소유 모듈을 찾지 못한 채 증상만 고치기 쉽습니다.',
    approach: [
      'AI 에이전트로 코드 경로를 탐색하고 가설을 좁혔습니다.',
      '모든 제안은 실제 소스 경로와 테스트로 검증했습니다.',
      '근본 계약을 고쳐야 하는 경우 임시 우회성 수정을 배제했습니다.',
    ],
    result: 'AI가 조사 속도를 높이되 최종 판단은 코드 근거와 회귀 검증에 두는 흐름을 만들었습니다.',
    stack: ['Codex', 'Claude Code', 'GitHub', 'TypeScript'],
  },
  {
    title: '캔버스 성능 가드레일',
    date: '2026-05-31',
    category: 'performance',
    problem: '큰 편집 화면은 문서가 복잡해져도 예측 가능한 조작감을 유지해야 합니다.',
    approach: [
      '선택과 viewport 기반 화면에서 불필요한 렌더링을 줄였습니다.',
      '주관적인 체감 대신 집중된 benchmark와 interaction 확인을 사용했습니다.',
      '최적화가 고립된 미세 변경이 아니라 에디터 동작과 연결되도록 했습니다.',
    ],
    result: '기능을 추가하면서도 에디터 화면의 반응성을 유지하기 쉬워졌습니다.',
    stack: ['React', 'TypeScript', 'Performance profiling'],
  },
  {
    title: '관리자 빈 상태와 실패 상태 정리',
    date: '2025-12-31',
    category: 'admin-ops',
    problem: '운영자는 데이터가 로딩 중인지, 없는지, 권한이 없는지, 실패했는지를 명확히 알아야 합니다.',
    approach: [
      '로딩, 빈 상태, 실패 상태, 권한 상태를 제품 상태로 다뤘습니다.',
      '운영자가 다음에 무엇을 할 수 있는지 중심으로 UI 문맥을 맞췄습니다.',
      '일부 데이터만 있는 상황에서도 업무 흐름을 읽을 수 있게 했습니다.',
    ],
    result: '백오피스 업무 흐름을 실제 운영 상황에서 더 쉽게 이해하고 디버깅할 수 있게 했습니다.',
    stack: ['React', 'TypeScript', 'API integration'],
  },
  {
    title: '환경별 릴리즈 흐름 정리',
    date: '2025-08-31',
    category: 'testing-ci',
    problem: '환경 설정을 수동으로 관리하면 잘못된 설정으로 배포될 위험이 커집니다.',
    approach: [
      'local, staging, production 설정 경로를 분리했습니다.',
      'Docker와 GitHub Actions를 반복 가능한 배포 확인에 연결했습니다.',
      '릴리즈 단계를 문서화하고 재현 가능하게 정리했습니다.',
    ],
    result: '배포가 개인의 수동 설정 기억에 덜 의존하게 됐습니다.',
    stack: ['Docker', 'GitHub Actions', 'Firebase'],
  },
  {
    title: 'AI 리뷰 운영 워크플로우',
    date: '2025-04-30',
    category: 'admin-ops',
    problem: 'AI 생성 응답은 고객에게 노출되기 전에 운영자의 신뢰, 검토, 수정 흐름이 필요했습니다.',
    approach: [
      '데이터 수집, AI 분석, 사람 검수, 응답 생성을 분리했습니다.',
      '생성된 내용을 관리자 화면에서 확인하고 수정할 수 있게 했습니다.',
      '자동화가 운영자의 판단 범위 안에서 동작하도록 만들었습니다.',
    ],
    result: 'AI 보조가 숨겨진 백엔드 동작이 아니라 검토 가능한 운영 흐름의 일부가 됐습니다.',
    stack: ['React', 'NestJS', 'Python', 'OpenAI API'],
  },
];

export const skillsKo: SkillContext[] = [
  {
    group: '제품 프론트엔드',
    tools: ['React', 'Next.js', 'TypeScript', 'React Native'],
    context: '복잡한 제품 UI, App Router 기반 화면, 모바일 앱 흐름, 제품 상태 중심 UI, 타입 기반 컴포넌트 계약에 사용했습니다.',
  },
  {
    group: '상태와 제품 모델',
    tools: ['Zustand', 'Immer', 'AST-like editor models'],
    context: '에디터 상태 소유, Variant 동작, 중첩 구조, source of truth가 필요한 제품 액션에 사용했습니다.',
  },
  {
    group: '품질과 검증',
    tools: ['Vitest', 'Testing Library', 'Maestro', 'E2E checks', 'CI'],
    context: '미리보기와 산출물 정합성, 렌더링 계약, 릴리즈 게이트, 사용자 흐름의 회귀 방지에 사용했습니다.',
  },
  {
    group: '운영/백엔드 이해',
    tools: ['NestJS', 'FastAPI', 'Spring API', 'MySQL', 'Oracle'],
    context: '관리자 업무 흐름, API 계약, 권한이 중요한 화면, 제품 UI 뒤의 데이터 구조를 이해하는 데 사용했습니다.',
  },
  {
    group: '릴리즈와 배포',
    tools: ['Docker', 'GitHub Actions', 'Firebase', 'Vercel', 'EAS'],
    context: '환경 분리, 반복 가능한 릴리즈, 정적 포트폴리오 배포, 모바일 스토어 준비, production 검증 흐름에 사용했습니다.',
  },
  {
    group: 'AI 워크플로우',
    tools: ['Codex', 'Claude Code', 'OpenAI API', 'MCP', 'LSP'],
    context: '코드베이스 탐색, semantic tooling, 원인 분석, CI 실패 추적, AI 기반 제품 운영 흐름에 사용했습니다.',
  },
];

export const aiWorkflowStepsKo = [
  {
    title: '문제 정의',
    description: '바로 수정하지 않고 제품 증상, 기대 동작, 사용자 영향부터 정리합니다.',
  },
  {
    title: '코드 경로 탐색',
    description: 'AI 에이전트로 관련 소유 모듈, 테스트, 생성 산출물, 주변 계약을 빠르게 확인합니다.',
  },
  {
    title: '소유 경계 확인',
    description: '동작을 책임지는 canonical module을 찾고 같은 판단이 여러 곳에 생기지 않게 합니다.',
  },
  {
    title: '좁은 범위 수정',
    description: '증상을 가리는 분기보다 문제를 설명하는 소유 경로나 공유 계약을 수정합니다.',
  },
  {
    title: '동작 검증',
    description: '집중 검증, 산출물 확인, 회귀 테스트로 같은 문제가 다시 생길 수 있는 지점을 막습니다.',
  },
  {
    title: '학습 기록',
    description: '반복되는 분석 패턴을 워크플로우, 테스트, 공개 가능한 changelog로 남깁니다.',
  },
];

export function getCaseStudyKo(slug: string) {
  return caseStudiesKo.find((caseStudy) => caseStudy.slug === slug);
}
