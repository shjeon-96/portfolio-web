import Link from 'next/link';
import { CaseStudyCard } from '@/components/case-study-card';
import { ChangelogEntry } from '@/components/changelog-entry';
import { ProjectHighlightCard } from '@/components/project-highlight-card';
import { caseStudies, changelogEntries, projectHighlights, proofPoints } from '@/lib/data';

export default function Home() {
  const featuredProjects = projectHighlights.filter((project) =>
    [
      'codex-lsp-bridge',
      'Gyeol Mobile',
      'PureFlow',
      'Web Toolkit',
      'Tax and settlement operations platform',
      'AI review operations system',
      'Desktop POS system',
      'Realtime delivery backend',
      'Nightbound Survival',
    ].includes(project.title),
  );
  const homeChangelogEntries = [
    'Agent LSP bridge release contract',
    'Mobile release gate system',
    'SwiftUI product module architecture',
  ]
    .map((title) => changelogEntries.find((entry) => entry.title === title))
    .filter((entry): entry is (typeof changelogEntries)[number] => Boolean(entry));

  return (
    <main>
      <section className="mx-auto grid min-h-[calc(100vh-73px)] w-full max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent-blue)]">
            Product Console Portfolio
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-balance sm:text-5xl">
            Product front-end across AI tooling, mobile release, and editor engines
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            I structure visual builders, mobile products, and AI development workflows where product state,
            runtime behavior, release checks, and generated artifacts must stay in sync.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="flex min-h-11 items-center rounded-md bg-[var(--text-primary)] px-4 py-2 text-sm font-semibold text-white" href="/en/case-studies">
              View case studies
            </Link>
            <Link className="flex min-h-11 items-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold" href="/en/editor-prototype">
              Try prototype
            </Link>
            <Link className="flex min-h-11 items-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold" href="/en/changelog">
              Read changelog
            </Link>
            <a
              className="flex min-h-11 items-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold"
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
            title="Agent Semantic Tooling"
            description="Coding agents can use language-server feedback through read-only tools instead of broad project access."
          />
          <ConsolePanel
            eyebrow="Recent Changelog"
            title="Mobile Release Gates"
            description="Expo, native policy, shared packages, and store-facing build checks are tied to one release path."
          />
          <ConsolePanel
            eyebrow="Editor Systems"
            title="State -> Runtime -> Output"
            description="Editor state, runtime behavior, and generated artifacts move through one product model."
          />
        </aside>
      </section>
      <section className="border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-8 md:grid-cols-4">
          <Metric label="Focus" value="Product FE" />
          <Metric label="AI tooling" value="LSP bridge" />
          <Metric label="Mobile product" value="Release gates" />
          <Metric label="Product system" value="Editor engine" />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-blue)]">Selected Work</p>
            <h2 className="mt-3 text-3xl font-semibold">Product systems I have worked through recently</h2>
          </div>
          <Link className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--accent-blue)]" href="/en/case-studies">
            View all case studies
          </Link>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {caseStudies.slice(0, 3).map((caseStudy) => (
            <CaseStudyCard caseStudy={caseStudy} hrefPrefix="/en/case-studies" key={caseStudy.slug} />
          ))}
        </div>
      </section>
      <section className="border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-blue)]">Project Ledger</p>
              <h2 className="mt-3 text-3xl font-semibold">Products and tools beyond one codebase</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">
              A curated view of public repositories, private product systems, native apps, developer tools, and runtime work
              that shaped how I build product software.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectHighlightCard project={project} key={project.title} />
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-2 shadow-sm">
          {homeChangelogEntries.map((entry) => (
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
