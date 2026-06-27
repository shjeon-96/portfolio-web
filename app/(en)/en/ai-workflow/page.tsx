import { SectionHeading } from '@/components/section-heading';
import { aiWorkflowSteps } from '@/lib/data';

export const metadata = {
  title: 'AI Workflow',
  description: 'How AI agents are integrated into root-cause analysis, implementation, review follow-up, and verification.',
};

export default function AiWorkflowPage() {
  return (
    <main className="page-shell">
      <SectionHeading
        eyebrow="AI Workflow"
        title="Agents accelerate investigation. Code evidence makes the decision."
        description="The workflow is built around root-cause analysis, canonical ownership, narrow implementation, and verification. AI is part of the loop, not the final authority."
      />
      <section className="surface-panel mt-10 divide-y divide-[var(--border)]">
        {aiWorkflowSteps.map((step, index) => (
          <article className="grid gap-4 p-5 md:grid-cols-[88px_1fr]" key={step.title}>
            <p className="font-mono text-sm font-semibold text-[var(--accent-blue)]">Step {index + 1}</p>
            <div>
              <h2 className="text-xl font-semibold">{step.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{step.description}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="surface-panel mt-10 p-6">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent-amber)]">Boundaries</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Boundary title="No blind patches" body="Agent suggestions are checked against the actual owner path before implementation." />
          <Boundary title="No hidden alternate behavior" body="The preferred fix is the canonical contract, not a permissive alternate branch." />
          <Boundary title="Verification first" body="Generated output, tests, and user-visible behavior decide whether the change is done." />
        </div>
      </section>
    </main>
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
