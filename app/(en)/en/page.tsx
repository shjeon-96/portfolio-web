import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { ChangelogEntry } from '@/components/changelog-entry';
import { HomeEvidencePanel } from '@/components/home-evidence-panel';
import { ProjectHighlightCard } from '@/components/project-highlight-card';
import { changelogEntries, projectHighlights, proofPoints, sortChangelogEntriesByDateDesc } from '@/lib/data';

export default function Home() {
  const featuredProjects = projectHighlights.filter((project) =>
    [
      'codex-lsp-bridge',
      'Gyeol Mobile',
      'PureFlow',
      'Web Toolkit',
      'Tax and settlement operations platform',
    ].includes(project.title),
  );
  const homeChangelogEntries = sortChangelogEntriesByDateDesc(changelogEntries).slice(0, 3);

  return (
    <main>
      <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:py-10">
        <div>
          <p className="mb-4 font-mono text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent-blue)]">
            Seunghun Jeon / Product Console Portfolio
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-balance sm:text-5xl">
            Product front-end across AI tooling, mobile release, and editor engines
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            I structure visual builders, mobile products, and AI development workflows where product state,
            runtime behavior, release checks, and generated artifacts must stay in sync.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="flex min-h-11 items-center rounded-md bg-[var(--text-primary)] px-4 py-2 text-sm font-semibold text-white" href="/en/changelog">
              Read changelog
            </Link>
            <Link className="flex min-h-11 items-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold" href="/en/ai-workflow">
              View AI workflow
            </Link>
            <a
              aria-label="GitHub profile"
              className="grid size-11 place-items-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)]"
              href="https://github.com/shjeon-96"
              rel="noreferrer"
              target="_blank"
              title="GitHub"
            >
              <ExternalLink aria-hidden="true" size={18} />
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
          summary="The portfolio prioritizes state models, data flow, inspectable behavior, release verification, and generated output over isolated screenshots."
          items={[
            {
              label: 'Scope',
              title: 'Complex product UI and runtime boundaries',
              description: 'Editor engines, mobile release paths, and AI tooling where state and output can easily drift.',
            },
            {
              label: 'Recent work',
              title: 'Monthly changelog and project evidence',
              description: 'Representative work is supported by public project records while commit history is rewritten into monthly engineering notes.',
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
          <Metric label="Focus" value="Product front-end" />
          <Metric label="AI tooling" value="LSP bridge" />
          <Metric label="Mobile product" value="Release gates" />
          <Metric label="Product system" value="Editor engine" />
        </div>
      </section>
      <section className="border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-blue)]">Project Evidence</p>
              <h2 className="mt-3 text-3xl font-semibold">Supporting product work</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">
              Instead of long narrative pages, this section keeps the public repositories and product surfaces close
              to the monthly changelog.
            </p>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-2 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectHighlightCard project={project} key={project.title} />
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-blue)]">Recent Changelog</p>
            <h2 className="mt-2 text-3xl font-semibold">Recent engineering notes</h2>
          </div>
          <Link className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--accent-blue)]" href="/en/changelog">
            View full changelog
          </Link>
        </div>
        <div className="surface-panel px-5 py-2">
          {homeChangelogEntries.map((entry) => (
            <ChangelogEntry entry={entry} key={entry.title} locale="en" />
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
