import { SectionHeading } from '@/components/section-heading';
import { aiWorkflowStepsKo } from '@/lib/data-ko';

export const metadata = {
  title: 'AI 개발 흐름',
  description: 'AI 에이전트를 원인 분석, 구현, 리뷰 후속, 검증에 통합하는 방식입니다.',
};

export default function KoreanAiWorkflowPage() {
  return (
    <main className="page-shell">
      <SectionHeading
        eyebrow="AI 개발 흐름"
        title="AI는 넓게 찾게 하고, 결정은 코드와 산출물로 합니다"
        description="AI 에이전트는 코드베이스 탐색, 후보 경로 정리, 검증 항목 누락 확인에 사용합니다. 최종 수정은 소유 모듈, 제품 규칙, 실제 렌더 결과를 기준으로 좁게 결정합니다."
      />
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <Principle title="AI에게 맡기는 일" body="넓은 탐색, 후보 파일 정리, 관련 테스트와 산출물 찾기, 누락된 검증 관점 제안." />
        <Principle title="제가 결정하는 일" body="실제 소유 경계, 공개 가능한 설명 범위, 수정 방향, 완료 기준." />
        <Principle title="완료 기준" body="빌드와 테스트뿐 아니라 라우트, sitemap, 렌더 HTML, 화면 overflow처럼 사용자에게 보이는 결과." />
      </section>
      <section className="surface-panel mt-10 divide-y divide-[var(--border)]">
        {aiWorkflowStepsKo.map((step, index) => (
          <article className="grid gap-4 p-5 md:grid-cols-[96px_1fr]" key={step.title}>
            <p className="font-mono text-sm font-semibold text-[var(--accent-blue)]">단계 {index + 1}</p>
            <div>
              <h2 className="text-xl font-semibold">{step.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{step.description}</p>
              <p className="mt-4 text-sm leading-6 text-[var(--text-primary)]">{step.detail}</p>
              <div className="mt-4 rounded-md border border-[var(--border)] bg-[var(--surface-strong)] p-4">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-green)]">예시</p>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{step.example}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
      <section className="surface-panel mt-10 p-6">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent-amber)]">기준</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Boundary title="제안은 바로 적용하지 않습니다" body="AI 제안은 실제 소유 경로와 테스트 기준으로 확인한 뒤 적용합니다." />
          <Boundary title="증상을 가리지 않습니다" body="임시 분기보다 문제를 설명하는 제품 계약과 소유 경계를 고칩니다." />
          <Boundary title="검증을 먼저 봅니다" body="생성 산출물, 테스트, 사용자에게 보이는 동작이 완료 기준입니다." />
        </div>
      </section>
    </main>
  );
}

function Principle({ title, body }: Readonly<{ title: string; body: string }>) {
  return (
    <article className="surface-panel p-5">
      <h2 className="font-semibold">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{body}</p>
    </article>
  );
}

function Boundary({ title, body }: Readonly<{ title: string; body: string }>) {
  return (
    <div className="rounded-lg bg-[var(--surface-strong)] p-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{body}</p>
    </div>
  );
}
