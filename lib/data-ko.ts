import type { CaseStudy, ChangelogEntry, SkillContext } from '@/lib/data';

export const proofPointsKo = [
  'AST 에디터 엔진',
  'Export/Deploy 정합성',
  '운영 대시보드',
  'AI 에이전트 워크플로우',
];

export const caseStudiesKo: CaseStudy[] = [
  {
    slug: 'ast-editor-engine',
    title: 'AST 기반 비주얼 에디터 엔진',
    label: 'B2B 노코드 웹 빌더',
    summary:
      '컴포넌트 Variant, 스타일, 인터랙션, 데이터 바인딩, 미리보기, 배포 산출물이 같은 기준으로 움직여야 하는 비주얼 편집 화면을 구조화했습니다.',
    stack: ['React', 'Next.js', 'TypeScript', 'Zustand', 'Immer', 'Vitest'],
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
  },
  {
    slug: 'export-deploy-parity',
    title: 'Export/Deploy 산출물 정합성',
    label: '커머스 사이트 빌더',
    summary:
      '편집 상태에서 HTML/CSS/JS 및 배포용 산출물로 이어지는 경로를 안정화해 사용자가 설정한 결과와 실제 산출물이 어긋나지 않도록 했습니다.',
    stack: ['TypeScript', 'React', 'HTML/CSS', 'Liquid-style templates', 'Vitest'],
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
  },
  {
    slug: 'ai-review-operations',
    title: 'AI 리뷰 운영 시스템',
    label: 'AI 운영 도구',
    summary:
      '리뷰 데이터를 수집하고, AI가 응답 초안을 만들며, 운영자가 최종 검수할 수 있는 운영 흐름을 구축했습니다.',
    stack: ['React', 'NestJS', 'Python', 'OpenAI API', 'MySQL', 'JWT'],
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
  },
  {
    slug: 'settlement-operations',
    title: '결제·정산 운영 흐름',
    label: '실시간 운영 시스템',
    summary:
      '정산, 권한, 가맹점 데이터, 실시간 알림 화면을 웹과 모바일 운영 흐름에 연결했습니다.',
    stack: ['React', 'React Native', 'Spring API', 'PG integration', 'Realtime notification'],
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
  },
  {
    slug: 'legacy-admin-modernization',
    title: '레거시 관리자 시스템 현대화',
    label: '백오피스 마이그레이션',
    summary:
      '운영 중인 백오피스 흐름을 유지하면서 프레임워크 전환과 배포 안정화를 진행했습니다.',
    stack: ['Vue', 'React', 'Next.js', 'Firebase', 'Docker', 'GitHub Actions'],
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
  },
];

export const changelogEntriesKo: ChangelogEntry[] = [
  {
    title: 'Export 런타임 정합성 규칙 정리',
    period: '2026-06',
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
    period: '2026-06',
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
    period: '2026-06',
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
    period: '2026-06',
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
    period: '2026-05',
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
    period: '2025-12',
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
    period: '2025-08',
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
    period: '2025-04',
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
    group: 'Core Front-End',
    tools: ['React', 'Next.js', 'TypeScript'],
    context: '복잡한 제품 UI, App Router 기반 화면, 제품 상태 중심 UI, 타입 기반 컴포넌트 계약에 사용했습니다.',
  },
  {
    group: '상태와 제품 모델',
    tools: ['Zustand', 'Immer', 'AST-like editor models'],
    context: '에디터 상태 소유, Variant 동작, 중첩 구조, source of truth가 필요한 제품 액션에 사용했습니다.',
  },
  {
    group: '품질과 검증',
    tools: ['Vitest', 'Testing Library', 'E2E checks', 'CI'],
    context: '미리보기와 산출물 정합성, 렌더링 계약, 사용자 흐름의 회귀 방지에 사용했습니다.',
  },
  {
    group: '운영/백엔드 이해',
    tools: ['NestJS', 'FastAPI', 'Spring API', 'MySQL', 'Oracle'],
    context: '관리자 업무 흐름, API 계약, 권한이 중요한 화면, 제품 UI 뒤의 데이터 구조를 이해하는 데 사용했습니다.',
  },
  {
    group: '릴리즈와 배포',
    tools: ['Docker', 'GitHub Actions', 'Firebase', 'Vercel'],
    context: '환경 분리, 반복 가능한 릴리즈, 정적 포트폴리오 배포, production 검증 흐름에 사용했습니다.',
  },
  {
    group: 'AI 워크플로우',
    tools: ['Codex', 'Claude Code', 'OpenAI API'],
    context: '코드베이스 탐색, 원인 분석, 리뷰 후속, CI 실패 추적, AI 기반 제품 운영 흐름에 사용했습니다.',
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
