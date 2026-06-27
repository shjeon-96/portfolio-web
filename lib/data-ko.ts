import type { ChangelogEntry, ProjectHighlight, SkillContext } from '@/lib/data';

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
      'Codex가 로컬 언어 서버에서 진단, 정의, 참조, 심볼, hover, 상태 정보를 읽기 전용으로 가져오게 하는 MCP/LSP 브리지입니다.',
    stack: ['TypeScript', 'Node.js', 'MCP', 'LSP', 'Vitest'],
    status: '공개 패키지와 GitHub 저장소',
    href: 'https://github.com/shjeon-96/codex-lsp-bridge',
  },
  {
    title: 'Gyeol Mobile',
    label: 'Expo/React Native 제품 플랫폼',
    summary:
      '네이티브 정책, EAS 설정, 런타임 환경, 위젯, 스토어 메타데이터, UI 스모크 테스트 근거를 릴리즈 게이트로 묶은 캘린더 중심 모바일 제품입니다.',
    stack: ['Expo', 'React Native', 'TypeScript', 'Supabase', 'EAS'],
    status: 'iOS/Android 릴리즈 흐름',
  },
  {
    title: 'PureFlow',
    label: '네이티브 생산성 앱',
    summary:
      'MVVM, 기능 모듈, 적응형 내비게이션, SwiftData, CloudKit 동기화, 위젯, 공유 확장 타깃으로 구성한 SwiftUI 생산성 앱입니다.',
    stack: ['SwiftUI', 'SwiftData', 'CloudKit', 'Firebase', 'Swift Testing'],
    status: 'iOS, iPadOS, Mac Catalyst 아키텍처',
  },
  {
    title: 'Web Toolkit',
    label: 'Privacy-first 개발자 도구',
    summary:
      '클라이언트 처리, 오프라인 PWA, i18n, WebAssembly 기반 처리, 공유 가능한 도구 상태를 중심으로 구성한 브라우저 개발자 도구 제품입니다.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vitest'],
    status: '공개 웹 제품 방향',
    href: 'https://github.com/shjeon-96/dev-tool-kit',
  },
  {
    title: 'app-store-connect-release',
    label: 'Codex 릴리즈 검토 플러그인',
    summary:
      'App Store Connect 제출 입력을 보수적으로 검토하고 App Review 응답 초안을 작성하기 위한 공개 Codex 플러그인입니다.',
    stack: ['Python', 'Codex plugin', 'App Store Connect', '릴리즈 흐름'],
    status: '공개 GitHub 저장소',
    href: 'https://github.com/shjeon-96/app-store-connect-release',
  },
  {
    title: 'IdeaToPRD',
    label: 'AI 제품 기획 SaaS',
    summary:
      '아이디어 입력을 구조화된 PRD와 제품 계획으로 바꾸는 AI 보조 기획 제품 방향입니다.',
    stack: ['Next.js', 'TypeScript', 'AI 흐름', 'Vercel'],
    status: '공개 저장소와 라이브 웹 화면',
    href: 'https://github.com/shjeon-96/ideatoprd',
  },
  {
    title: 'Nightbound Survival',
    label: 'Bevy 게임 런타임',
    summary:
      '포맷팅, 컴파일, 테스트 바이너리 빌드, 테스트 실행을 하나의 검증 스크립트로 묶은 Rust/Bevy 기반 게임 프로젝트입니다.',
    stack: ['Rust', 'Bevy', 'Serde', 'Cargo'],
    status: '인터랙티브 시스템과 런타임 검증',
  },
  {
    title: '세무·정산 운영 플랫폼',
    label: '백오피스와 모바일 운영 흐름',
    summary:
      '세무대리 신청, 매입·매출 대시보드, 가맹점 승인, 알림, Vue에서 React와 Next.js로 이어지는 마이그레이션을 다룬 업무 시스템입니다.',
    stack: ['Flutter', 'React', 'Next.js', 'Firebase', 'Docker'],
    status: '운영 흐름과 프레임워크 마이그레이션',
  },
  {
    title: 'AI 리뷰 운영 시스템',
    label: 'AI 보조 관리자 흐름',
    summary:
      'React 관리자 UI, NestJS API, Python 데이터 수집, JWT 인증, MySQL 스키마, OpenAI 기반 리뷰 응답 흐름을 함께 다룬 멀티스택 운영 도구입니다.',
    stack: ['React', 'NestJS', 'Python', 'OpenAI API', 'MySQL'],
    status: '운영자가 통제하는 AI 흐름',
  },
  {
    title: '데스크톱 POS 시스템',
    label: '오프라인 우선 Flutter 데스크톱 앱',
    summary:
      'Windows/macOS POS 앱에서 테이블 주문, 결제 흐름, 프린터 연동, SQLite 로컬 저장소, 네트워크 복구 후 동기화를 다뤘습니다.',
    stack: ['Flutter', 'Dart', 'SQLite', 'Desktop', 'Hardware integration'],
    status: '식당 운영과 로컬 데이터 안정성',
  },
  {
    title: '실시간 배달 운영 백엔드',
    label: 'Socket.io 운영 백엔드',
    summary:
      '실시간 주문 상태, 업데이트 소켓 이벤트, 경로 최적화 지원, 데이터 수집 파이프라인, 로그 관리를 포함한 배달 운영 백엔드입니다.',
    stack: ['NestJS', 'Python', 'Socket.io', 'Realtime operations'],
    status: '백엔드와 실시간 운영 흐름 경험',
  },
  {
    title: 'POS 리팩토링과 결제 흐름',
    label: '레거시 React POS 현대화',
    summary:
      '결제/취소 모달, 현금영수증, 테이블 이동·분리·합석, 그룹 결제, 성능 정리를 포함한 React POS 리팩토링입니다.',
    stack: ['React', 'JavaScript', 'POS', '결제 흐름'],
    status: '운영 중인 시스템의 레거시 현대화',
  },
  {
    title: '유통 제품 카탈로그 사이트',
    label: 'Next.js SEO와 카탈로그 화면',
    summary:
      'SSR, 동적 라우팅, 이미지 최적화, 지연 로딩, i18n 라우트, 검색, 문의 흐름을 포함한 반응형 제품 카탈로그 사이트입니다.',
    stack: ['Next.js', 'TypeScript', 'SSR', 'SEO', 'i18n'],
    status: '외부에 공개되는 카탈로그와 성능 작업',
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
      '세무대리 신청, 수임동의, 해지, 가맹점 승인, 관리 흐름을 운영 제품 상태로 다뤘습니다.',
      'Firebase 알림, Docker 배포, 대시보드 화면을 같은 백오피스 흐름에 연결했습니다.',
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
      '프린터와 주문 알림 흐름을 핵심 제품 경로로 통합했습니다.',
    ],
    result: '데스크톱 POS 작업은 오프라인 우선 운영과 하드웨어 인접 제품 경험을 보여주는 축이 됐습니다.',
    stack: ['Flutter', 'Dart', 'SQLite', 'Desktop'],
  },
  {
    title: '실시간 배달 운영 백엔드',
    date: '2024-04-30',
    category: 'realtime-backend',
    problem: '배달 운영 시스템은 주문 상태, 업데이트 이벤트, 경로 지원, 데이터 수집 로그가 즉시 반영되고 추적 가능해야 했습니다.',
    approach: [
      'Socket.io로 실시간 주문과 업데이트 이벤트를 처리했습니다.',
      'NestJS 백엔드와 Python 데이터 수집 책임을 분리했습니다.',
      '운영 이슈를 추적할 수 있도록 로그와 오류 처리 흐름을 정리했습니다.',
    ],
    result: '변경 기록이 프론트엔드 UI뿐 아니라 백엔드와 실시간 운영 흐름 이해도까지 보여주게 됐습니다.',
    stack: ['NestJS', 'Python', 'Socket.io'],
  },
  {
    title: '레거시 POS 결제 리팩토링',
    date: '2023-10-31',
    category: 'pos-system',
    problem: '레거시 POS 프론트엔드의 결제, 영수증, 테이블, 정산 로직은 유지보수와 성능 정리가 필요했습니다.',
    approach: [
      '결제와 취소 모달 흐름을 리팩토링했습니다.',
      '테이블 이동, 분리, 합석, 그룹 지정, 그룹 결제 케이스를 정리했습니다.',
      '실제 운영 중인 화면에서 렌더링과 유지보수성을 개선했습니다.',
    ],
    result: '과거 POS 작업이 실제 업무 흐름과 레거시 현대화 경험을 보강합니다.',
    stack: ['React', 'JavaScript', 'POS 흐름'],
  },
  {
    title: '카탈로그 사이트 SEO와 i18n 화면',
    date: '2025-03-31',
    category: 'catalog-site',
    problem: '제품 정보 사이트는 빠른 초기 로딩, 검색 가능한 카탈로그 콘텐츠, 다국어 라우트, 반응형 표현이 필요했습니다.',
    approach: [
      'Next.js SSR, 동적 라우팅, 이미지 최적화를 사용했습니다.',
      '제품 정보 중심 카탈로그 검색과 문의 흐름을 구성했습니다.',
      '다국어 콘텐츠 전달을 위해 i18n 라우트 구조를 추가했습니다.',
    ],
    result: '프로젝트 기록에 외부에 공개되는 웹 성능과 콘텐츠 아키텍처 작업이 추가됐습니다.',
    stack: ['Next.js', 'TypeScript', 'SSR', 'SEO', 'i18n'],
  },
  {
    title: 'App Store Review 보조 도구화',
    date: '2026-04-19',
    category: 'app-review-tooling',
    problem: '릴리즈 제출 작업은 문구와 입력값을 신중하게 다뤄야 하며, 비공개 데이터나 검증되지 않은 설명이 섞이면 리뷰 지연으로 이어질 수 있습니다.',
    approach: [
      '제출 입력 검토와 App Review 응답 초안 작성에 집중한 보수적인 플러그인으로 범위를 좁혔습니다.',
      '릴리즈 보조 문서 작성과 실제 스토어 운영 경계를 분리했습니다.',
      '비공개 앱 릴리즈 세부사항을 넣지 않고 공개 가능한 보조 도구로 문서화했습니다.',
    ],
    result: '반복되는 릴리즈 검토 작업을 재사용 가능한 도구로 바꾼 작은 공개 사례가 추가됐습니다.',
    stack: ['Python', 'Codex plugin', 'App Store Connect'],
  },
  {
    title: '단일 목적 iOS 앱 릴리즈 패키징',
    date: '2026-04-25',
    category: 'mobile-release',
    problem:
      '작은 App Store 제품도 제출 전에 프로덕션 서명, 스크린샷, 지원 페이지, 광고 설정, 앱 아이콘 정리가 필요했습니다.',
    approach: [
      '짧은 세션형 모바일 제품에 맞춰 서명과 스크린샷 자산을 준비했습니다.',
      '심사용 웹사이트와 프로덕션 광고 설정을 같은 릴리즈 경로에 연결했습니다.',
      '스토어 준비가 불필요한 기능 확장으로 번지지 않도록 MVP 범위를 좁게 유지했습니다.',
    ],
    result:
      '큰 플랫폼 작업 사이에 실제 모바일 제출 준비 경험을 보여주는 중간 기록이 추가됐습니다.',
    stack: ['iOS', 'App Store', 'AdMob', 'Release assets'],
  },
  {
    title: 'PDF 유틸리티 App Store 준비',
    date: '2026-04-19',
    category: 'app-review-tooling',
    problem:
      '작은 유틸리티 앱도 App Store 제출을 위해 공개 메타데이터, 개인정보 처리방침, 심사 설정, 마케팅 페이지가 필요했습니다.',
    approach: [
      '심사 가능한 앱 설정과 저장소 메타데이터를 준비했습니다.',
      '공개 개인정보 처리방침과 마케팅 사이트 표면을 추가했습니다.',
      '비공개 제출 자격 정보를 노출하지 않고 릴리즈 흐름을 문서화했습니다.',
    ],
    result:
      '집중된 유틸리티 제품을 스토어 제출 가능한 상태로 만드는 또 하나의 실제 사례가 추가됐습니다.',
    stack: ['Swift', 'App Store', 'Privacy policy', 'Marketing site'],
  },
  {
    title: '영양 앱 기능 확장과 구조 정리',
    date: '2026-04-08',
    category: 'native-product',
    problem:
      '건강/영양 모바일 제품은 기록, AI 보조 입력, 데이터 내보내기, 기기 연동, 결제, 기능 소유 경계가 함께 커지고 있었습니다.',
    approach: [
      'AI 음식 인식, 운동 기록, 데이터 내보내기, 건강 기기 연동 경로를 추가했습니다.',
      '카메라 분석 주변에 프리미엄 게이트, 실제 API 연결, stale 결과 방지, 비동기 취소 처리를 넣었습니다.',
      '화면 로직을 feature hook과 container 경계로 분리해 하나의 큰 화면에 책임이 몰리지 않게 했습니다.',
    ],
    result:
      '릴리즈 게이트뿐 아니라 실제 모바일 제품 기능 확장과 구조 정리 흐름도 체인지로그에 보강됐습니다.',
    stack: ['React Native', 'Expo', 'AI 흐름', 'Health sync', 'Billing'],
  },
  {
    title: 'AI PRD 생성 제품 화면',
    date: '2026-01-17',
    category: 'ai-product',
    problem: '초기 제품 아이디어는 구현 전에 구조화된 요구사항과 제품 계획으로 정리될 필요가 있습니다.',
    approach: [
      '아이디어 입력과 PRD 생성을 연결하는 AI 보조 제품 기획 흐름을 탐색했습니다.',
      '작업 흐름이 실제 웹 앱으로 공유될 수 있도록 Next.js 제품 화면으로 구성했습니다.',
      '비공개 기획 데이터를 노출하지 않고 제품 흐름 수준으로만 포트폴리오에 정리했습니다.',
    ],
    result: 'IdeaToPRD는 구현 중심 케이스 사이에 공개 가능한 AI 제품 기획 사례를 더합니다.',
    stack: ['Next.js', 'TypeScript', 'AI 흐름', 'Vercel'],
  },
  {
    title: '건강 추적 앱 수익화와 리텐션 릴리즈',
    date: '2026-02-19',
    category: 'mobile-release',
    problem:
      '건강 추적 앱은 수익화, 접근성, 알림 안정성, 앱 완성도, 스토어 제출용 polish를 함께 조정해야 했습니다.',
    approach: [
      '수익화 모델을 조정하고 공개 화면에서 과도하게 구체적인 데이터 가정을 제거했습니다.',
      '앱 전반의 UI 구조, 접근성, 알림 처리, 설정 연결성을 개선했습니다.',
      '다음 제출에 맞춰 build number, 아이콘, expo-doctor 정리, 릴리즈 문서를 함께 맞췄습니다.',
    ],
    result:
      '2월 중순의 모바일 릴리즈 흐름이 리텐션과 스토어 준비 관점으로 더 분명해졌습니다.',
    stack: ['React Native', 'Expo', 'RevenueCat', 'Notifications', 'Accessibility'],
  },
  {
    title: '부채 상환 앱 MVP 안정화',
    date: '2026-02-18',
    category: 'native-product',
    problem:
      '부채 상환 모바일 제품은 핵심 상환 흐름을 강조하면서도 오류 처리, 다국어, 테스트, 리텐션 기본기를 갖춰야 했습니다.',
    approach: [
      '상환 우선 UX를 중심으로 모바일 제품을 부트스트랩했습니다.',
      '단위 테스트, error boundary, 한국어 로컬라이제이션, 미완성 TODO 표면 정리를 추가했습니다.',
      '핵심 UI와 리텐션 기능을 개선하고 쓰지 않는 의존성을 제거했습니다.',
    ],
    result:
      '개인 금융 앱 아이디어를 안정화된 MVP로 만드는 작은 사례가 체인지로그에 추가됐습니다.',
    stack: ['React Native', 'TypeScript', 'Testing', 'i18n'],
  },
  {
    title: 'Programmatic SEO 콘텐츠 시스템',
    date: '2026-01-11',
    category: 'web-toolkit',
    problem:
      '콘텐츠 중심 웹 제품은 검색 구조, AI 생성 글 처리 안정성, 정보 구조를 함께 갖춰야 했습니다.',
    approach: [
      '토픽 클러스터, programmatic SEO 라우트, 글 목록, Open Graph 이미지 지원을 추가했습니다.',
      'AI 응답 파싱 실패가 숨겨지지 않도록 오류 메시지와 중복 slug 처리를 강화했습니다.',
      'RAG 보조 콘텐츠 생성 경로를 쓰되 깨진 JSON을 조용히 받아들이지 않도록 했습니다.',
    ],
    result:
      '1월 구간에 웹 성장, 콘텐츠 아키텍처, AI 보조 발행 경험을 보여주는 기록이 채워졌습니다.',
    stack: ['Next.js', 'SEO', 'AI 흐름', 'Supabase', 'TypeScript'],
  },
  {
    title: 'SwiftUI 제품 모듈 아키텍처',
    date: '2026-02-08',
    category: 'native-product',
    problem: '네이티브 생산성 앱에서 작업, 집중, 라벨, 위젯, 공유, 동기화 화면이 늘어나도 구조가 무너지지 않아야 했습니다.',
    approach: [
      '앱 진입점, 핵심 유틸리티, 데이터 모델, 기능 모듈, 공통 UI, 리소스를 분리했습니다.',
      'SwiftUI, SwiftData, CloudKit, adaptive navigation을 네이티브 제품 경계로 사용했습니다.',
      '모델, 서비스, ViewModel 동작은 Swift Testing과 인메모리 데이터 경로로 확인했습니다.',
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
      '클라이언트 처리, 서버 업로드 없음, 오프라인 PWA 사용을 제품 방향으로 잡았습니다.',
      'text/code, media/design, converters, security 그룹으로 도구를 분류했습니다.',
      'i18n, 명령 검색, WebAssembly 처리, 공유 가능한 상태를 제품 기능으로 정리했습니다.',
    ],
    result: 'Web Toolkit은 유틸리티 중심 브라우저 소프트웨어를 공개 제품 방향으로 보여주는 항목이 됐습니다.',
    stack: ['Next.js', 'React', 'TypeScript', 'PWA', 'WebAssembly'],
  },
  {
    title: 'Bevy 런타임 검증 흐름',
    date: '2026-06-27',
    category: 'game-runtime',
    problem: '게임 런타임은 게임플레이 변경 이후 포맷팅, 컴파일, 테스트가 계속 통과하는지 빠르게 확인할 수 있어야 했습니다.',
    approach: [
      'CI에서 쓰는 것과 같은 검증 경로를 하나의 스크립트로 문서화했습니다.',
      'Cargo 기반 검사, 테스트 바이너리 빌드, 테스트 실행 명령을 분리해 집중 검증할 수 있게 했습니다.',
      '게임 프로젝트도 실험이 아니라 반복 가능한 피드백이 필요한 제품 시스템으로 다뤘습니다.',
    ],
    result: 'Nightbound Survival은 Rust와 인터랙티브 런타임 경험을 제품 엔지니어링 흐름 안에 추가했습니다.',
    stack: ['Rust', 'Bevy', 'Cargo', 'Serde'],
  },
  {
    title: '포트폴리오 근거 모델 정리',
    date: '2026-06-27',
    category: 'portfolio-system',
    problem:
      '공개 포트폴리오는 프로젝트 기록, 라우트 구조, 변경 기록이 각자 다른 이야기를 하면 단순 활동 목록처럼 보이기 쉽습니다.',
    approach: [
      '최근 작업이 흩어진 커밋이 아니라 제품 엔지니어링 노트로 읽히도록 체인지로그를 날짜별로 묶었습니다.',
      '프로젝트 기록, 날짜별 변경 기록, 검증 근거가 같은 방향으로 읽히도록 정리했습니다.',
      '프로토타입 중심 화면을 줄이고 첫 화면을 포지션과 근거 중심으로 재구성했습니다.',
    ],
    result:
      '커밋 이력이 원문 기록이 아니라 공개 가능한 제품 엔지니어링 근거로 읽히는 구조가 됐습니다.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Public safety checks'],
  },
  {
    title: '모바일 제품 카탈로그 릴리즈 경계',
    date: '2026-06-27',
    category: 'mobile-release',
    problem:
      '모바일 릴리즈에서 제품 식별자, 권한 확인, 릴리즈 자산, 제출 자격 정보, 백엔드 스모크 테스트가 따로 움직이면 제출 준비 상태를 판단하기 어렵습니다.',
    approach: [
      '결제 webhook 인증을 제품 카탈로그 경계로 라우팅했습니다.',
      'iOS 릴리즈 경로에 맞춰 구독 제품 식별자를 정렬했습니다.',
      '릴리즈 자산, 보호된 자격 정보, 백엔드 스모크 확인을 같은 제출 준비 흐름에 묶었습니다.',
    ],
    result:
      '비공개 자격 정보나 이슈 번호를 노출하지 않고도 스토어 제출 전 모바일 릴리즈 근거를 더 명확하게 보여줄 수 있게 됐습니다.',
    stack: ['Expo', 'React Native', 'RevenueCat', 'Supabase', 'EAS'],
  },
  {
    title: '네이티브 위젯과 Expo 설정 소유 경계',
    date: '2026-06-18',
    category: 'mobile-release',
    problem:
      '네이티브 위젯과 Expo 설정은 앱 설정, 패키지 설정, privacy manifest, 생성 네이티브 화면이 각자 정책을 가지면 쉽게 어긋납니다.',
    approach: [
      '네이티브 정책의 소유 경계를 Expo 설정 경로로 되돌렸습니다.',
      '위젯 패키지 설정이 앱 로컬 릴리즈 가정에 묶이지 않도록 분리했습니다.',
      '위젯 렌더링, 지역화된 payload, 네이티브 pager 동작, 의존성 호환성을 함께 확인했습니다.',
    ],
    result:
      '스토어 제출용 검증 전에 네이티브 모바일 경계와 위젯 정책이 더 명확해졌습니다.',
    stack: ['Expo', 'React Native', 'WidgetKit', 'TypeScript', 'Config plugins'],
  },
  {
    title: 'Agent LSP Bridge 릴리즈 계약',
    date: '2026-05-19',
    category: 'agent-tooling',
    problem: 'AI 코딩 흐름에는 프로젝트에 넓은 쓰기 권한을 주지 않으면서 의미 기반 코드 정보를 제공하는 도구가 필요했습니다.',
    approach: [
      '진단, 정의, 참조, 심볼, hover 정보를 읽기 전용 MCP 도구로 감쌌습니다.',
      '작업 경로 확인과 어댑터 경계를 명시적으로 유지했습니다.',
      '빌드, 타입 검사, 통합 테스트, 패키지 스모크 검사로 패키지 동작을 검증했습니다.',
    ],
    result: '의미 기반 코드 정보를 에이전트 보조 개발 흐름에서 공개 가능하고 반복 가능한 도구로 사용할 수 있게 됐습니다.',
    stack: ['TypeScript', 'Node.js', 'MCP', 'LSP', 'Vitest'],
  },
  {
    title: '에이전트 의미 기반 도구 안정화',
    date: '2026-05-19',
    category: 'agent-tooling',
    problem:
      '의미 기반 에이전트 도구는 재사용 가능한 패키지로 쓰이려면 예측 가능한 진단 처리, 언어 서버 시작 동작, 릴리즈 문서가 필요했습니다.',
    approach: [
      '자동 진단 timeout 정책과 호출별 timeout 처리를 추가했습니다.',
      '초기 TypeScript 경로를 넘어 workspace seed와 언어 어댑터 범위를 넓혔습니다.',
      '설치 안내, 진단 예시, maintainer workflow, 패키지 릴리즈 메타데이터를 문서화했습니다.',
    ],
    result:
      'LSP 브리지가 로컬 일회성 통합이 아니라 설치 가능한 공개 도구로 더 안정적으로 설명될 수 있게 됐습니다.',
    stack: ['TypeScript', 'Node.js', 'MCP', 'LSP', 'Language servers'],
  },
  {
    title: '모바일 릴리즈 게이트 시스템',
    date: '2026-06-27',
    category: 'mobile-release',
    problem: 'Expo 설정, 스토어 메타데이터, 위젯, 런타임 환경, 제품 문서를 따로 확인하면 네이티브 모바일 릴리즈 기준이 쉽게 어긋납니다.',
    approach: [
      '릴리즈 설정, 네이티브 정책, 제품 문서가 하나의 전달 기준을 보게 했습니다.',
      '반복되는 앱 동작이 공통 패키지에 남도록 공통 기반 검사를 추가했습니다.',
      '스토어 제출용 빌드 전에 모바일 UI와 릴리즈 스모크 테스트 근거를 확인했습니다.',
    ],
    result: 'iOS와 Android 운영 배포 전에 모바일 릴리즈 경로를 더 명확하게 검증할 수 있게 됐습니다.',
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
    result: '같은 제품 상태가 미리보기, 내보내기, 배포 경로에서 어떻게 해석되는지 더 명확해졌습니다.',
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
    title: '생성 산출물 검토 흐름',
    date: '2026-06-24',
    category: 'testing-ci',
    problem: '소스 코드만 보면 맞아 보여도 실제 HTML이나 배포 산출물에서 어긋남이 드러날 수 있습니다.',
    approach: [
      '수정 완료 전 실제 생성 산출물을 직접 확인했습니다.',
      '산출물 구조와 런타임 동작에 대한 회귀 검증을 추가했습니다.',
      '검증 기준을 사용자가 실제로 받는 산출물에 맞췄습니다.',
    ],
    result: '사용자에게 전달되는 산출물에 더 가까운 지점에서 회귀를 잡을 수 있게 됐습니다.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Vitest'],
  },
  {
    title: 'AI 에이전트 기반 원인 분석 흐름',
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
      '로컬, 스테이징, 운영 설정 경로를 분리했습니다.',
      'Docker와 GitHub Actions를 반복 가능한 배포 확인에 연결했습니다.',
      '릴리즈 단계를 문서화하고 재현 가능하게 정리했습니다.',
    ],
    result: '배포가 개인의 수동 설정 기억에 덜 의존하게 됐습니다.',
    stack: ['Docker', 'GitHub Actions', 'Firebase'],
  },
  {
    title: 'AI 리뷰 운영 흐름',
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
  {
    title: '메뉴 스크래퍼 스케줄링 유틸리티',
    date: '2025-11-24',
    category: 'web-toolkit',
    problem:
      '작은 자동화 유틸리티도 메뉴 데이터를 안정적으로 수집하려면 웹 프로젝트 기반과 예측 가능한 스케줄이 필요했습니다.',
    approach: [
      'Next.js 유틸리티 프로젝트를 부트스트랩하고 scraping과 schedule 제어에 범위를 좁혔습니다.',
      '운영 의도에 맞는 시간대에 수집이 돌도록 cron 타이밍을 조정했습니다.',
      '프레임워크 보안 공지가 필요한 경우 의존성 업데이트도 함께 처리했습니다.',
    ],
    result:
      '큰 모바일/플랫폼 작업 사이에 가벼운 자동화 유틸리티 사례가 체인지로그에 추가됐습니다.',
    stack: ['Next.js', 'Cron', 'Automation', 'React'],
  },
  {
    title: '스케줄러 iOS 위젯 반복 작업',
    date: '2025-09-01',
    category: 'native-product',
    problem:
      '스케줄러 앱에서 위젯을 제품 일부로 다루려면 위젯 전용 프로젝트 구조와 데이터 업데이트 경로가 필요했습니다.',
    approach: [
      'iOS 위젯 기능을 위한 초기 프로젝트 구조를 추가했습니다.',
      '위젯 상태 업데이트를 위한 예제 코드와 가이드를 정리했습니다.',
      '네이티브 변경이 임시 파일로 남지 않도록 버전 업데이트와 함께 묶었습니다.',
    ],
    result:
      '이후 모바일 릴리즈 게이트 작업 이전의 네이티브 위젯 탐색 흐름이 월별 기록에 추가됐습니다.',
    stack: ['Flutter', 'iOS Widget', 'Native extension', 'Release versioning'],
  },
  {
    title: 'Flutter 인증과 알림 릴리즈 안정화',
    date: '2025-08-18',
    category: 'mobile-release',
    problem:
      '웹 연동 흐름이 있는 Flutter 앱은 계정 연결, 알림 동작, 권한, 버전 업데이트가 함께 맞아야 했습니다.',
    approach: [
      '익명 로그인과 소셜 계정 연동 흐름을 앱 표면에 추가했습니다.',
      'FCM, 로컬 알림 처리, iOS 백그라운드 알림 권한을 릴리즈 경로에 연결했습니다.',
      'Android SDK와 앱 버전 업데이트를 같은 제출 준비 흐름으로 다뤘습니다.',
    ],
    result:
      '비어 보이던 8월 구간이 실제 모바일 릴리즈 안정화 기록으로 채워졌습니다.',
    stack: ['Flutter', 'Firebase', 'FCM', 'iOS', 'Android'],
  },
  {
    title: '체중 기록 앱 부트스트랩과 릴리즈 설정',
    date: '2025-07-31',
    category: 'native-product',
    problem:
      '체중 기록 제품은 기능 작업 전에 모바일 shell, Firebase 설정, 인증, 앱 정체성, 릴리즈 설정이 필요했습니다.',
    approach: [
      'Firebase, 앱 아이콘, 스플래시 화면, release keystore 설정을 준비했습니다.',
      'Google/Apple 로그인과 회원 탈퇴 흐름을 추가했습니다.',
      '백그라운드 복귀 시 새로고침과 상태바 표현을 모바일 shell의 일부로 정리했습니다.',
    ],
    result:
      '7월 모바일 제품 기반 작업이 이후 알림과 릴리즈 반복 작업의 앞단 기록으로 보강됐습니다.',
    stack: ['Flutter', 'Firebase', 'Authentication', 'Release signing'],
  },
  {
    title: '초기 스케줄러 기능 반복',
    date: '2025-01-06',
    category: 'native-product',
    problem:
      '스케줄러 모바일 프로젝트는 이후 인증, 알림, 위젯 작업을 얹기 전에 초기 기능과 버그 수정 반복이 필요했습니다.',
    approach: [
      '짧은 feature/fix 커밋을 통해 초기 Flutter 앱을 전진시켰습니다.',
      '이 달의 커밋 제목이 짧기 때문에 공개 설명은 보수적으로 유지했습니다.',
      '상세한 제품 주장보다 foundation 근거로만 다뤘습니다.',
    ],
    result:
      '로컬 커밋 제목에서 확인 가능한 범위를 넘지 않으면서 2025년 1월 작업을 기록했습니다.',
    stack: ['Flutter', 'Mobile UI', 'Early product iteration'],
  },
  {
    title: '스케줄러 소셜 로그인 연동',
    date: '2024-11-11',
    category: 'native-product',
    problem:
      '스케줄러 앱이 익명 로컬 사용을 넘어가려면 모바일 계정 진입 흐름이 필요했습니다.',
    approach: [
      'Flutter 앱 흐름에 소셜 로그인을 연동했습니다.',
      '여러 feature 커밋을 통해 초기 인증 표면을 반복했습니다.',
      '공개 요약에서는 provider별 비공개 설정이 아니라 인증 기능 자체에 집중했습니다.',
    ],
    result:
      '2024년 11월이 모바일 계정 흐름의 구체적인 이정표로 기록됐습니다.',
    stack: ['Flutter', 'Authentication', 'Mobile app'],
  },
  {
    title: '스케줄러 캘린더 최적화 반복',
    date: '2024-10-27',
    category: 'native-product',
    problem:
      '캘린더 중심 스케줄러 작업은 핵심 기능 동작과 캘린더 성능을 초기에 함께 잡아야 했습니다.',
    approach: [
      '여러 feature 커밋으로 스케줄러 앱을 반복했습니다.',
      '데이터가 늘어나도 핵심 화면이 사용할 수 있도록 캘린더 최적화 작업을 포함했습니다.',
      '오래된 커밋 제목이 짧기 때문에 월별 제품 시스템 노트 수준으로만 정리했습니다.',
    ],
    result:
      '2024년 10월의 캘린더 제품 방향이 이후 인증/위젯 작업 앞단에 놓였습니다.',
    stack: ['Flutter', 'Calendar UI', 'Mobile performance'],
  },
  {
    title: '스케줄러 Flutter 앱 부트스트랩',
    date: '2024-07-16',
    category: 'native-product',
    problem:
      '스케줄러 제품은 인증, 알림, 위젯 개발 전에 초기 Flutter 앱 기반이 필요했습니다.',
    approach: [
      '초기 app commit을 통해 스케줄러 Flutter 프로젝트를 시작했습니다.',
      '초기 feature 작업으로 모바일 제품 표면을 세웠습니다.',
      '가장 오래된 커밋 제목은 정보가 제한적이므로 공개 요약은 넓고 보수적으로 유지했습니다.',
    ],
    result:
      '현재 로컬 repo 집합에서 확인 가능한 가장 이른 작업 근거가 포트폴리오 타임라인에 반영됐습니다.',
    stack: ['Flutter', 'Dart', 'Mobile app bootstrap'],
  },
  {
    title: 'B2B 운영 관리자와 공개 사이트 기반',
    date: '2023-04-30',
    category: 'admin-ops',
    problem:
      '초기 B2B 제품 작업은 운영자가 쓰는 관리자 화면과 외부에 보이는 공개 사이트가 함께 전진해야 했습니다.',
    approach: [
      '같은 제품 맥락 안에서 React 관리자 화면과 공개 사이트 라우트를 반복했습니다.',
      '비공개 사업명이나 내부 경로를 노출하지 않고 workflow 수준으로만 정리했습니다.',
      '요청된 2023년 3월 이후 확인 가능한 첫 커밋 기반 운영 항목으로 이 달을 기록했습니다.',
    ],
    result:
      '3월에 확인되는 커밋이 없다는 점을 넘겨짚지 않으면서 2023년 첫 제품 엔지니어링 달을 반영했습니다.',
    stack: ['React', 'Admin UI', 'Public site', 'Product operations'],
  },
  {
    title: '운영 API와 관리자 workflow 확장',
    date: '2023-05-31',
    category: 'ops-platform',
    problem:
      '운영 제품은 실제 workflow 반복을 위해 backend route, 관리자 화면, 작은 scheduling utility가 함께 필요했습니다.',
    approach: [
      '같은 운영 도메인 안에서 API와 관리자 동작을 확장했습니다.',
      '커밋 이력에 별도 프로젝트 활동이 보이는 시간 기반 workflow utility를 함께 반영했습니다.',
      '짧은 커밋 기록을 원문 작업명 대신 공개 가능한 시스템 책임으로 번역했습니다.',
    ],
    result:
      '2023년 5월이 빈 구간이 아니라 backend와 admin을 함께 다룬 반복 작업으로 보이게 됐습니다.',
    stack: ['React', 'Node.js', 'Python', 'Scheduling utilities'],
  },
  {
    title: '관리자-backend 통합 안정화',
    date: '2023-06-30',
    category: 'ops-platform',
    problem:
      '운영 workflow가 커질수록 관리자 UI와 backend service 동작이 반복 수정 과정에서도 맞아야 했습니다.',
    approach: [
      'Backend service 변경과 admin-side 업데이트를 함께 반복했습니다.',
      '오래된 커밋 메시지가 짧기 때문에 통합 안정성 중심으로 보수적으로 기록했습니다.',
      '공개 설명에서 private repository 이름을 반복 노출하지 않았습니다.',
    ],
    result:
      '2023년 6월이 repo 활동에 근거한 운영 플랫폼 안정화 기간으로 표현됐습니다.',
    stack: ['React', 'Backend services', 'Python', 'Operational tooling'],
  },
  {
    title: '공개 사이트와 관리자 계정 화면 반복',
    date: '2023-07-31',
    category: 'admin-ops',
    problem:
      '초기 운영 기반 이후 공개 사이트 업데이트와 관리자 계정 화면은 계속 다듬어져야 했습니다.',
    approach: [
      '외부에 보이는 asset과 page를 전진시키면서 계정 중심 관리자 화면을 정리했습니다.',
      'Backend와 script fix를 같은 운영 지원 맥락에 묶었습니다.',
      '내부 task label보다 실제로 보이는 제품 표면 기준으로 월을 요약했습니다.',
    ],
    result:
      '2023년 7월이 큰 admin 작업 사이에 있던 제품 표면 반복 구간으로 기록됐습니다.',
    stack: ['React', 'Public site', 'Admin UI', 'Backend fixes'],
  },
  {
    title: '리뷰 운영 유지보수 반복',
    date: '2023-08-31',
    category: 'admin-ops',
    problem:
      '운영 리뷰 도구는 admin UI, backend script, 작은 runtime 실험이 함께 바뀔 때 꾸준한 유지보수가 필요했습니다.',
    approach: [
      'Admin, server, script fix를 하나의 운영 유지보수 항목으로 묶었습니다.',
      '제품 시스템 폭을 보여주는 경우가 아니면 실험성 side work는 핵심 주장으로 삼지 않았습니다.',
      '큰 feature 기간 사이의 연속성을 보여주는 달로 기록했습니다.',
    ],
    result:
      '2023년 8월이 설명 없이 비어 있는 구간이 아니게 됐습니다.',
    stack: ['React', 'Server maintenance', 'Python', 'Product operations'],
  },
  {
    title: 'Legacy POS refactor groundwork',
    date: '2023-09-30',
    category: 'pos-system',
    problem:
      'Legacy POS front end는 이후 결제 flow 변경을 명확히 설명하기 전에 집중적인 refactor groundwork가 필요했습니다.',
    approach: [
      '9월의 refactor groundwork를 이후 결제 중심 milestone과 분리했습니다.',
      '비공개 커밋 세부사항보다 시스템 현대화에 초점을 맞췄습니다.',
      '이미 타임라인에 있는 POS 현대화 흐름과 연결했습니다.',
    ],
    result:
      '10월 결제 refactor 항목 전에 POS case의 준비 구간이 보이게 됐습니다.',
    stack: ['React', 'POS UI', 'Legacy refactor', 'TypeScript'],
  },
  {
    title: '운영 도구 유지보수 연결 구간',
    date: '2023-11-30',
    category: 'admin-ops',
    problem:
      'POS 중심 refactor 이후에도 운영 repo에는 더 작은 admin, server, automation fix가 필요했습니다.',
    approach: [
      '낮은 수준의 maintenance commit을 보수적인 월 단위 운영 노트로 묶었습니다.',
      '커밋 근거가 강하지 않은 상태에서 새로운 제품 claim으로 과장하지 않았습니다.',
      '2023년 주요 제품 항목 사이의 연속성을 유지했습니다.',
    ],
    result:
      '등록된 repo 이력에서 보이는 2023년 11월 유지보수 작업이 기록됐습니다.',
    stack: ['React', 'Server fixes', 'Automation scripts'],
  },
  {
    title: '연말 운영 안정화',
    date: '2023-12-31',
    category: 'admin-ops',
    problem:
      '연말 운영 codebase는 admin, server, review-support 화면 전반의 안정화가 필요했습니다.',
    approach: [
      '늦은 연말 fix를 더 큰 feature claim으로 만들지 않고 stabilization으로 요약했습니다.',
      '비공개 project identifier 대신 workflow class를 설명했습니다.',
      '주변 2023년 항목과 같은 운영 플랫폼 흐름에 연결했습니다.',
    ],
    result:
      '2023년 12월이 등록된 repo commit에 기반한 안정화 항목으로 채워졌습니다.',
    stack: ['React', 'Backend services', 'Operations tooling'],
  },
  {
    title: '스케줄러 앱과 service 반복',
    date: '2024-01-31',
    category: 'native-product',
    problem:
      '스케줄러 제품은 이후 Flutter 중심 모바일 작업 전에 app과 server를 함께 반복해야 했습니다.',
    approach: [
      'App-side와 service-side scheduler commit을 하나의 제품 시스템 항목으로 묶었습니다.',
      '과거 커밋 메시지가 짧고 구현 중심이므로 요약 범위를 넓고 보수적으로 유지했습니다.',
      '이전 service 반복과 이후 모바일 app bootstrap을 분리했습니다.',
    ],
    result:
      '2024년 1월에 scheduler 제품 작업이 모바일 타임라인 이전부터 있었다는 점이 보입니다.',
    stack: ['Mobile app', 'Scheduler service', 'Product iteration'],
  },
  {
    title: '스케줄러 service 안정화',
    date: '2024-02-29',
    category: 'native-product',
    problem:
      '스케줄러 app과 server 변경은 1월의 큰 반복 이후 작은 안정화 pass가 필요했습니다.',
    approach: [
      '이 달을 새로운 대형 기능이 아니라 app-service maintenance로 기록했습니다.',
      '1월과 이후 scheduler 항목에서 쓰는 같은 제품 흐름을 유지했습니다.',
      '공개 요약에서 내부 repository label을 제거했습니다.',
    ],
    result:
      '2024년 2월이 커밋 기반 scheduler 안정화 노트로 채워졌습니다.',
    stack: ['Mobile app', 'Backend service', 'Scheduler workflows'],
  },
  {
    title: '배송 운영과 스케줄러 service 반복',
    date: '2024-03-31',
    category: 'realtime-backend',
    problem:
      '배송 지향 backend 작업과 scheduler service가 여러 등록 repo에서 병렬로 반복되고 있었습니다.',
    approach: [
      'Delivery service, scheduler service, 작은 app fix를 하나의 운영 플랫폼 월로 묶었습니다.',
      '비공개 운영 세부사항이 드러나지 않도록 익명화된 도메인 label을 사용했습니다.',
      '이후 real-time delivery backend 항목으로 이어지는 앞단 작업으로 연결했습니다.',
    ],
    result:
      '2024년 3월이 4월 real-time backend milestone으로 이어지는 missing lead-in이 됐습니다.',
    stack: ['Backend services', 'Scheduling', 'Operations systems', 'Python'],
  },
  {
    title: '스케줄러 다크모드 polish',
    date: '2024-05-31',
    category: 'native-product',
    problem:
      '스케줄러 제품은 visual mode가 바뀌어도 앱이 일관되게 보이도록 작은 presentation fix가 필요했습니다.',
    approach: [
      'Dark-mode와 app-service maintenance commit을 좁은 polish 항목으로 기록했습니다.',
      '등록된 commit volume이 낮아 이 달의 설명은 의도적으로 작게 유지했습니다.',
      '더 큰 architecture claim은 근거가 강한 다른 달에 맡겼습니다.',
    ],
    result:
      '2024년 5월이 작지만 실제 존재한 제품 polish 달로 표현됐습니다.',
    stack: ['Mobile UI', 'Dark mode', 'Scheduler service'],
  },
  {
    title: 'Prototype system과 service upkeep',
    date: '2024-06-30',
    category: 'testing-ci',
    problem:
      '스케줄러 모바일 app이 주요 흐름이 되기 전 여러 작은 repo에서 service upkeep과 prototype 작업이 보였습니다.',
    approach: [
      '낮은 commit volume의 game, scheduler, service 작업을 보수적인 prototype-systems 항목으로 묶었습니다.',
      '강한 근거 없이 shipped feature로 설명하지 않았습니다.',
      '실제 commit 기반 timeline을 보존하기 위해 체인지로그에 남겼습니다.',
    ],
    result:
      '2024년 6월이 사라지지 않으면서도 scope를 정직하게 유지했습니다.',
    stack: ['Prototype apps', 'Service maintenance', 'Flutter', 'Python'],
  },
  {
    title: '건강/게임 prototype checkpoint',
    date: '2024-08-31',
    category: 'testing-ci',
    problem:
      '스케줄러 milestone 사이에 작은 prototype repo 작업이 있어 공개 가능한 방식으로 표현할 필요가 있었습니다.',
    approach: [
      'Health-monitor와 game-prototype 작업을 exploratory product-system 근거로 기록했습니다.',
      '해당 월의 등록 commit set이 작기 때문에 항목을 짧게 유지했습니다.',
      'Prototype을 production product처럼 표현하지 않았습니다.',
    ],
    result:
      '2024년 8월이 blank month가 아니라 prototype checkpoint로 채워졌습니다.',
    stack: ['Prototype apps', 'Mobile experimentation', 'Runtime checks'],
  },
  {
    title: '커리어 project site bootstrap',
    date: '2025-02-28',
    category: 'portfolio-system',
    problem:
      '공개 career-facing project site는 이후 portfolio와 content-system 작업 전에 초기 구조가 필요했습니다.',
    approach: [
      '등록된 project-site commit을 공개 evidence-system milestone으로 기록했습니다.',
      '같은 달에 있는 POS 운영 항목과 별개의 흐름으로 분리했습니다.',
      '비공개 지원 세부사항보다 site structure와 presentation에 초점을 맞췄습니다.',
    ],
    result:
      '2025년 2월에 등록 repo 이력에서 확인되는 career-site 작업이 추가됐습니다.',
    stack: ['Web', 'Portfolio content', 'Project presentation'],
  },
  {
    title: '공개 profile content와 deploy 반복',
    date: '2025-03-31',
    category: 'portfolio-system',
    problem:
      '공개 profile site가 지원 자산으로 쓰이려면 content와 deployment 반복이 필요했습니다.',
    approach: [
      'Content, page, deploy commit을 하나의 portfolio-system 항목으로 묶었습니다.',
      'Page별 활동 원문보다 공개 presentation 관점으로 요약했습니다.',
      '이후 portfolio evidence model 정리의 앞단 작업으로 위치시켰습니다.',
    ],
    result:
      '2025년 3월이 commit history에 보이는 공개 profile/deployment 작업으로 표현됐습니다.',
    stack: ['Next.js', 'Public profile', 'Deployment', 'Content system'],
  },
  {
    title: '인터뷰 content와 app-link routing',
    date: '2025-04-30',
    category: 'portfolio-system',
    problem:
      'Career-facing web content에는 interview 중심 page와 안정적인 outbound app-link 처리가 필요했습니다.',
    approach: [
      'Profile content와 interview page surface를 반복했습니다.',
      'App-store link handling을 같은 공개 presentation flow의 일부로 추가했습니다.',
      '이미 존재하는 4월 AI review operations milestone과 구분했습니다.',
    ],
    result:
      '2025년 4월이 운영 AI 작업뿐 아니라 공개 career-site 반복도 함께 보여주게 됐습니다.',
    stack: ['Next.js', 'Content pages', 'Routing', 'App links'],
  },
  {
    title: 'Social writing surface bootstrap',
    date: '2025-05-31',
    category: 'web-toolkit',
    problem:
      'Social writing 제품은 feed 기능이 의미를 갖기 전에 authentication, profile, writing, mobile-web surface가 필요했습니다.',
    approach: [
      '초기 auth, profile, writing-page, webview-oriented flow를 구축했습니다.',
      '등록 repo commit을 하나의 product-surface milestone으로 묶었습니다.',
      '비공개 label을 노출하지 않고 system을 설명하는 일반화된 문구를 사용했습니다.',
    ],
    result:
      '2025년 5월이 4월 profile 작업과 6월 feed 반복 사이의 구체적인 제품 항목이 됐습니다.',
    stack: ['Next.js', 'Authentication', 'Profile UI', 'Mobile webview'],
  },
  {
    title: 'Social feed interaction 반복',
    date: '2025-06-30',
    category: 'web-toolkit',
    problem:
      'Writing surface가 생긴 이후에는 feed, search, detail, comment, like, auth-routing 동작이 필요했습니다.',
    approach: [
      'Feed discovery와 post-detail interaction 중심으로 social surface를 확장했습니다.',
      'Comment와 like 동작을 인증 routing 기대와 연결했습니다.',
      '내부 구현명 대신 feature boundary 수준으로 정리했습니다.',
    ],
    result:
      '2025년 6월이 5월 product bootstrap 이후 붙은 interaction layer로 설명됩니다.',
    stack: ['Next.js', 'Feed UI', 'Search', 'Comments', 'Authentication'],
  },
  {
    title: 'Profile automation cadence',
    date: '2025-10-31',
    category: 'portfolio-system',
    problem:
      '공개 developer profile은 수동 정리 작업에 의존하지 않고 최신 상태로 갱신되는 cadence가 필요했습니다.',
    approach: [
      'Generated-profile commit stream을 feature volume이 아니라 automation evidence로 기록했습니다.',
      '작업 성격이 cadence와 publishing infrastructure에 가까워 항목을 작게 유지했습니다.',
      '큰 제품 작업 사이의 지속적인 공개 profile maintenance를 보여주는 달로 사용했습니다.',
    ],
    result:
      '2025년 10월이 등록된 automation commit을 기반으로 과장 없이 채워졌습니다.',
    stack: ['GitHub automation', 'Generated content', 'Public profile'],
  },
  {
    title: '영양 앱 service와 AI advice 경계',
    date: '2026-03-31',
    category: 'ai-product',
    problem:
      '영양 앱은 이후 feature expansion을 설명하기 전에 service boundary, AI advice 동작, app configuration이 필요했습니다.',
    approach: [
      'AI meal advice, storage, notification, service-layer commit을 하나의 제품 milestone으로 묶었습니다.',
      '개인 데이터나 비공개 service 세부사항 대신 제품 동작에 초점을 맞췄습니다.',
      '3월 foundation을 이미 타임라인에 있는 4월 영양 앱 확장 항목과 연결했습니다.',
    ],
    result:
      '2026년 3월이 nutrition-app 흐름의 missing foundation month로 추가됐습니다.',
    stack: ['Flutter', 'AI advice', 'Notifications', 'Local storage', 'Service layer'],
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
    context: '에디터 상태 소유, Variant 동작, 중첩 구조, 단일 기준이 필요한 제품 액션에 사용했습니다.',
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
    context: '환경 분리, 반복 가능한 릴리즈, 정적 포트폴리오 배포, 모바일 스토어 준비, 운영 배포 검증 흐름에 사용했습니다.',
  },
  {
    group: 'AI 개발 흐름',
    tools: ['Codex', 'Claude Code', 'OpenAI API', 'MCP', 'LSP'],
    context: '코드베이스 탐색, 의미 기반 코드 도구, 원인 분석, CI 실패 추적, AI 기반 제품 운영 흐름에 사용했습니다.',
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
    description: '동작을 책임지는 기준 모듈을 찾고 같은 판단이 여러 곳에 생기지 않게 합니다.',
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
    description: '반복되는 분석 패턴을 작업 흐름, 테스트, 공개 가능한 변경 기록으로 남깁니다.',
  },
];
