import { SectionHeading } from '@/components/section-heading';
import { aiWorkflowStepsKo } from '@/lib/data-ko';

export const metadata = {
  title: 'AI 워크플로우',
  description: 'AI 에이전트를 원인 분석, 구현, 리뷰 후속, 검증에 통합하는 방식입니다.',
};

export default function KoreanAiWorkflowPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16">
      <SectionHeading
        eyebrow="AI Workflow"
        title="AI는 조사 속도를 높이고, 판단은 코드 근거로 합니다"
        description="원인 분석, 소유 경계 확인, 좁은 범위 수정, 회귀 검증을 중심으로 AI 에이전트를 개발 루프에 통합합니다."
      />
      <section className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {aiWorkflowStepsKo.map((step, index) => (
          <article className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm" key={step.title}>
            <p className="text-sm font-semibold text-[var(--accent-blue)]">Step {index + 1}</p>
            <h2 className="mt-3 text-xl font-semibold">{step.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{step.description}</p>
          </article>
        ))}
      </section>
      <section className="mt-10 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent-amber)]">Boundaries</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Boundary title="제안은 바로 적용하지 않습니다" body="AI 제안은 실제 소유 경로와 테스트 기준으로 확인한 뒤 적용합니다." />
          <Boundary title="증상을 가리지 않습니다" body="임시 분기보다 문제를 설명하는 제품 계약과 소유 경계를 고칩니다." />
          <Boundary title="검증을 먼저 봅니다" body="생성 산출물, 테스트, 사용자에게 보이는 동작이 완료 기준입니다." />
        </div>
      </section>
    </main>
  );
}

function Boundary({ title, body }: Readonly<{ title: string; body: string }>) {
  return (
    <div className="rounded-lg bg-[var(--background)] p-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{body}</p>
    </div>
  );
}
