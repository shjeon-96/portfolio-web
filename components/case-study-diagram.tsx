import type { CaseStudy } from '@/lib/data';

const diagramBySlug: Record<string, {
  title: string;
  nodes: string[];
  caption: string;
}> = {
  'codex-lsp-bridge': {
    title: 'Agent semantic tooling path',
    nodes: ['Coding agent', 'MCP tool', 'LSP bridge', 'Language server', 'Read-only insight'],
    caption: 'Semantic code feedback is exposed through a narrow read-only boundary before an agent proposes changes.',
  },
  'mobile-release-foundations': {
    title: 'Mobile release gate flow',
    nodes: ['Product docs', 'Shared packages', 'App config', 'Verifier suite', 'Store build'],
    caption: 'Product rules, shared foundations, native configuration, and release evidence move through one delivery model.',
  },
  'ast-editor-engine': {
    title: 'Editor model flow',
    nodes: ['Editable AST', 'State owner', 'Canvas UI', 'Preview', 'Generated output'],
    caption: 'A single product model drives editing, preview, and output-oriented behavior.',
  },
  'export-deploy-parity': {
    title: 'Artifact parity pipeline',
    nodes: ['Editor state', 'Render contract', 'HTML/CSS/JS', 'Deploy artifact', 'Regression check'],
    caption: 'Preview and deployment paths are treated as outputs of the same rendering contract.',
  },
  'ai-review-operations': {
    title: 'Human-in-the-loop operations',
    nodes: ['Collected data', 'AI draft', 'Operator review', 'Editable response', 'Customer-facing action'],
    caption: 'AI output stays inspectable and correctable before it reaches a user-facing workflow.',
  },
  'settlement-operations': {
    title: 'Operational state path',
    nodes: ['Merchant data', 'Permission check', 'Settlement state', 'Realtime signal', 'Operator action'],
    caption: 'Payment and settlement visibility is modeled around role-aware operational state.',
  },
  'legacy-admin-modernization': {
    title: 'Incremental migration path',
    nodes: ['Legacy screen', 'Shared workflow', 'Modern route', 'Environment check', 'Repeatable release'],
    caption: 'Live operational workflows move gradually while release and environment checks become repeatable.',
  },
};

const koreanDiagramBySlug: typeof diagramBySlug = {
  'codex-lsp-bridge': {
    title: '에이전트 semantic tooling 경로',
    nodes: ['코딩 에이전트', 'MCP 도구', 'LSP 브리지', '언어 서버', '읽기 전용 근거'],
    caption: '에이전트가 변경을 제안하기 전에 좁은 읽기 전용 경계로 semantic code feedback을 받습니다.',
  },
  'mobile-release-foundations': {
    title: '모바일 릴리즈 게이트 흐름',
    nodes: ['제품 문서', 'Shared packages', 'App config', '검증 스위트', '스토어 빌드'],
    caption: '제품 규칙, shared foundations, native configuration, 릴리즈 증거가 하나의 delivery model을 따릅니다.',
  },
  'ast-editor-engine': {
    title: '에디터 모델 흐름',
    nodes: ['편집 AST', '상태 소유자', '캔버스 UI', '미리보기', '생성 산출물'],
    caption: '하나의 제품 모델이 편집, 미리보기, 산출물 지향 동작을 함께 이끕니다.',
  },
  'export-deploy-parity': {
    title: '산출물 정합성 파이프라인',
    nodes: ['편집 상태', '렌더링 계약', 'HTML/CSS/JS', '배포 산출물', '회귀 검증'],
    caption: '미리보기와 배포 경로를 같은 렌더링 계약에서 나온 결과로 다룹니다.',
  },
  'ai-review-operations': {
    title: 'Human-in-the-loop 운영 흐름',
    nodes: ['수집 데이터', 'AI 초안', '운영자 검수', '수정 가능한 응답', '사용자-facing 동작'],
    caption: 'AI 출력은 사용자에게 닿기 전에 운영자가 확인하고 수정할 수 있어야 합니다.',
  },
  'settlement-operations': {
    title: '운영 상태 흐름',
    nodes: ['가맹점 데이터', '권한 확인', '정산 상태', '실시간 신호', '운영자 액션'],
    caption: '결제와 정산 가시성은 역할별 운영 상태를 중심으로 모델링합니다.',
  },
  'legacy-admin-modernization': {
    title: '점진적 마이그레이션 경로',
    nodes: ['레거시 화면', '공유 업무 흐름', '현대화 라우트', '환경 검증', '반복 가능한 릴리즈'],
    caption: '운영 중인 업무 흐름을 유지하면서 릴리즈와 환경 검증을 반복 가능하게 만듭니다.',
  },
};

export function CaseStudyDiagram({
  caseStudy,
  locale = 'en',
}: Readonly<{
  caseStudy: CaseStudy;
  locale?: 'en' | 'ko';
}>) {
  const diagrams = locale === 'ko' ? koreanDiagramBySlug : diagramBySlug;
  const diagram = diagrams[caseStudy.slug];

  if (!diagram) {
    return null;
  }

  return (
    <section className="mt-12 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent-blue)]">
            {locale === 'ko' ? '시각 모델' : 'Visual model'}
          </p>
          <h2 className="mt-2 text-2xl font-semibold">{diagram.title}</h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-[var(--text-secondary)]">{diagram.caption}</p>
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-5">
        {diagram.nodes.map((node, index) => (
          <div className="relative rounded-lg border border-[var(--border)] bg-[var(--background)] p-4" key={node}>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-secondary)]">
              {String(index + 1).padStart(2, '0')}
            </p>
            <p className="mt-2 text-sm font-semibold">{node}</p>
            {index < diagram.nodes.length - 1 ? (
              <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-[var(--accent-blue)] md:block" />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
