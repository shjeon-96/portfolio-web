import Link from 'next/link';
import { CaseStudyCard } from '@/components/case-study-card';
import { ChangelogEntry } from '@/components/changelog-entry';
import { HomeEvidencePanel } from '@/components/home-evidence-panel';
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
      <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-20">
        <div>
          <p className="mb-4 font-mono text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent-blue)]">
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

        <HomeEvidencePanel
          kicker="Work Summary"
          title="Recent work focus"
          summary="The portfolio focuses on product state, release verification, and generated output rather than isolated UI screenshots."
          items={[
            {
              label: 'Scope',
              title: 'Complex product UI and runtime boundaries',
              description: 'Editor engines, mobile release paths, and AI tooling where state and output can easily drift.',
            },
            {
              label: 'Recent work',
              title: 'Case studies and date-based changelog',
              description: 'Representative work is structured by problem, approach, result, and verification evidence.',
            },
            {
              label: 'Work style',
              title: 'Find the owner and patch narrowly',
              description: 'Changes are tied to the owning module and verified through the public-safe evidence path.',
            },
          ]}
        />
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

function Metric({ label, value }: Readonly<{ label: string; value: string }>) {
  return (
    <div className="surface-panel bg-[var(--surface-strong)] p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-secondary)]">{label}</p>
      <p className="mt-2 text-lg font-semibold">{value}</p>
    </div>
  );
}
