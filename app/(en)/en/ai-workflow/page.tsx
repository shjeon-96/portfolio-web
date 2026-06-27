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
        title="Agents search broadly. Code and output decide."
        description="I use AI agents to explore the codebase, organize likely owner paths, and surface missing verification angles. The final change is still decided by the owning module, the product rule, and the rendered result."
      />
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <Principle title="What I delegate" body="Wide search, candidate files, adjacent tests, generated artifacts, and possible verification gaps." />
        <Principle title="What I decide" body="The owner boundary, public-safe explanation, implementation direction, and completion criteria." />
        <Principle title="Done means" body="Builds and tests pass, but routes, sitemap, rendered HTML, and visible layout are also checked when they matter." />
      </section>
      <section className="surface-panel mt-10 divide-y divide-[var(--border)]">
        {aiWorkflowSteps.map((step, index) => (
          <article className="grid gap-4 p-5 md:grid-cols-[96px_1fr]" key={step.title}>
            <p className="font-mono text-sm font-semibold text-[var(--accent-blue)]">Step {index + 1}</p>
            <div>
              <h2 className="text-xl font-semibold">{step.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{step.description}</p>
              <p className="mt-4 text-sm leading-6 text-[var(--text-primary)]">{step.detail}</p>
              <div className="mt-4 rounded-md border border-[var(--border)] bg-[var(--surface-strong)] p-4">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-green)]">Example</p>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{step.example}</p>
              </div>
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
