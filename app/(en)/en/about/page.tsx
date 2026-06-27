import { SectionHeading } from '@/components/section-heading';

export const metadata = {
  title: 'About',
  description: 'About Seunghun Jeon, product front-end engineering focus, and contact links.',
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading
        eyebrow="About"
        title="I structure complex front-end product systems."
        description="My strongest work sits around editor engines, operational tools, deployment-oriented output, and AI-assisted engineering workflows."
      />
      <section className="mt-10 grid gap-4">
        <article className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Profile</h2>
          <p className="mt-4 leading-8 text-[var(--text-secondary)]">
            I am a front-end developer focused on complex product interfaces. Recently, I have worked on an AST-based
            visual editor engine, component variants, canvas interactions, data binding, and export/deploy pipelines.
            Before that, I built admin dashboards, AI-assisted review operations, payment and settlement workflows,
            realtime operational surfaces, and back-office migrations.
          </p>
        </article>
        <article className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Current focus</h2>
          <p className="mt-4 leading-8 text-[var(--text-secondary)]">
            I am most interested in B2B SaaS, product engineering, visual builders, workflow-heavy admin tools,
            and teams that use AI agents as a real part of engineering work.
          </p>
        </article>
        <article className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
          <h2 className="text-xl font-semibold">How I work</h2>
          <p className="mt-4 leading-8 text-[var(--text-secondary)]">
            I do not treat complex product UI as screen delivery alone. I work through state models, verification loops,
            and release boundaries together, especially across B2B SaaS, editor and builder products, mobile product
            platforms, and AI development workflows.
          </p>
        </article>
        <article className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Links</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              className="rounded-md bg-[var(--text-primary)] px-4 py-2 text-sm font-semibold text-white"
              href="https://github.com/shjeon-96"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold"
              href="https://github.com/shjeon-96/portfolio-web"
              rel="noreferrer"
              target="_blank"
            >
              Portfolio repository
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
