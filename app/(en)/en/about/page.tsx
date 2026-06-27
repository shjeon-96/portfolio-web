import { SectionHeading } from '@/components/section-heading';

export const metadata = {
  title: 'About',
  description: 'About Seunghun Jeon, product front-end working principles, focus areas, and public engineering evidence.',
};

export default function AboutPage() {
  return (
    <main className="page-shell page-narrow">
      <SectionHeading
        eyebrow="About"
        title="I align product state, release boundaries, and front-end delivery."
        description="I structure products where editor engines, operational tools, mobile platforms, and AI-assisted engineering workflows can easily drift across multiple sources of truth."
      />
      <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
        <article className="surface-panel p-6">
          <p className="eyebrow">Profile</p>
          <div className="mt-4 space-y-5 text-copy">
            <p>
              I am a front-end developer focused on complex product interfaces. Recently, I have worked on an AST-based
              visual editor engine, component variants, canvas interactions, data binding, and export/deploy pipelines
              where edited state and generated output need to stay aligned.
            </p>
            <p>
              Before that, I built admin dashboards, AI-assisted review operations, payment and settlement workflows,
              realtime operational surfaces, and back-office migrations. I do not treat complex product UI as screen
              delivery alone; I work through state models, verification loops, and release boundaries together.
            </p>
          </div>
          <div className="mt-6 border-t border-[var(--border)] pt-5">
            <h2 className="font-semibold">Working principles</h2>
            <ul className="mt-3 grid gap-3 text-sm leading-6 text-[var(--text-secondary)] md:grid-cols-3">
              <li>Find the owning module and product boundary first.</li>
              <li>Move duplicated decisions into shared rules and checks.</li>
              <li>Keep public evidence useful without exposing private operations.</li>
            </ul>
          </div>
        </article>
        <aside className="surface-panel p-6">
          <p className="eyebrow">Current focus</p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--text-secondary)]">
            <li>B2B SaaS and product engineering</li>
            <li>Visual builders and operational tools</li>
            <li>Mobile release and native product boundaries</li>
            <li>Teams using AI agents as part of real engineering work</li>
          </ul>
          <div className="mt-6 border-t border-[var(--border)] pt-5">
            <h2 className="font-semibold">Evidence to review</h2>
            <ul className="mt-3 space-y-3 text-sm leading-6 text-[var(--text-secondary)]">
              <li>Date-based engineering changelog entries</li>
              <li>Public repositories and reusable developer tooling</li>
              <li>AI-agent workflow used in real engineering work</li>
            </ul>
          </div>
          <div className="mt-6 border-t border-[var(--border)] pt-5">
            <h2 className="font-semibold">Links</h2>
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
          </div>
        </aside>
      </section>
    </main>
  );
}
