import Link from 'next/link';
import { CaseStudyCard } from '@/components/case-study-card';
import { ChangelogEntry } from '@/components/changelog-entry';
import { caseStudies, changelogEntries, proofPoints } from '@/lib/data';

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid min-h-[calc(100vh-73px)] w-full max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent-blue)]">
            Product Console Portfolio
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-balance">
            React/Next.js B2B Product Front-End Developer
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            I build complex product interfaces where editor state, runtime behavior,
            and deployable artifacts must stay in sync.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="rounded-md bg-[var(--text-primary)] px-4 py-2 text-sm font-semibold text-white" href="/case-studies">
              View case studies
            </Link>
            <Link className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold" href="/editor-prototype">
              Try prototype
            </Link>
            <Link className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold" href="/changelog">
              Read changelog
            </Link>
            <a
              className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold"
              href="https://github.com/shjeon-96"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {proofPoints.map((point) => (
              <span
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text-secondary)]"
                key={point}
              >
                {point}
              </span>
            ))}
          </div>
        </div>

        <aside className="grid gap-4">
          <ConsolePanel
            eyebrow="Current Focus"
            title="AST Editor Engine"
            description="Structured visual editing, component variants, and product state ownership. A lightweight prototype is available."
          />
          <ConsolePanel
            eyebrow="Recent Changelog"
            title="Export/Deploy Parity"
            description="Public-safe engineering ledger for runtime, preview, and artifact consistency."
          />
          <ConsolePanel
            eyebrow="AI Workflow"
            title="Issue -> Owner -> Patch -> Verify"
            description="Agent-assisted diagnosis with code-path evidence and regression checks."
          />
        </aside>
      </section>
      <section className="border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-8 md:grid-cols-4">
          <Metric label="Positioning" value="B2B product FE" />
          <Metric label="Core system" value="Editor engine" />
          <Metric label="Evidence" value="Case studies" />
          <Metric label="Workflow" value="AI assisted" />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-blue)]">Case Studies</p>
            <h2 className="mt-3 text-3xl font-semibold">Product systems, not just screens</h2>
          </div>
          <Link className="text-sm font-semibold text-[var(--accent-blue)]" href="/case-studies">
            View all case studies
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {caseStudies.slice(0, 2).map((caseStudy) => (
            <CaseStudyCard caseStudy={caseStudy} key={caseStudy.slug} />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-2 shadow-sm">
          {changelogEntries.slice(0, 3).map((entry) => (
            <ChangelogEntry entry={entry} key={entry.title} />
          ))}
        </div>
      </section>
    </main>
  );
}

function ConsolePanel({
  eyebrow,
  title,
  description,
}: Readonly<{
  eyebrow: string;
  title: string;
  description: string;
}>) {
  return (
    <section className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--text-secondary)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-xl font-semibold">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
    </section>
  );
}

function Metric({ label, value }: Readonly<{ label: string; value: string }>) {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-secondary)]">{label}</p>
      <p className="mt-2 text-lg font-semibold">{value}</p>
    </div>
  );
}
