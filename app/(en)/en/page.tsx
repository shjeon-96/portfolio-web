import { ExternalLink } from 'lucide-react';
import { ChangelogEntry } from '@/components/changelog-entry';
import { HomeEvidencePanel } from '@/components/home-evidence-panel';
import { ImplementationEvidenceBoard } from '@/components/implementation-evidence-board';
import { ProjectHighlightCard } from '@/components/project-highlight-card';
import { ActionLink, BadgeList, Panel } from '@/components/ui';
import { changelogEntries, implementationEvidence, projectHighlights, proofPoints, sortChangelogEntriesByDateDesc } from '@/lib/data';
import { cx, ds } from '@/lib/design-system';
import { GITHUB_PROFILE_URL } from '@/lib/site-links';

export default function Home() {
  const featuredProjects = projectHighlights.filter((project) => project.featured);
  const homeChangelogEntries = sortChangelogEntriesByDateDesc(changelogEntries).slice(0, 3);
  const homeEvidenceEntries = implementationEvidence.slice(0, 2);

  return (
    <main>
      <section className={cx(ds.layout.content, 'grid w-full gap-10 py-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:py-10')}>
        <div>
          <p className={cx('mb-4', ds.text.eyebrowAccent)}>
            Seunghun Jeon / Product Console Portfolio
          </p>
          <h1 className={cx('max-w-3xl', ds.text.headingLg, 'sm:text-5xl')}>
            Product front-end across AI tooling, mobile release, and editor engines
          </h1>
          <p className={cx('mt-6 max-w-2xl', ds.text.bodyLarge)}>
            I structure visual builders, mobile products, and AI development workflows where product state,
            runtime behavior, release checks, and generated artifacts must stay in sync.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionLink href="/en/evidence" variant="primary">
              Review evidence
            </ActionLink>
            <ActionLink href="/en/changelog">
              Read changelog
            </ActionLink>
            <ActionLink
              ariaLabel="GitHub profile"
              external
              href={GITHUB_PROFILE_URL}
              title="GitHub"
              variant="icon"
            >
              <ExternalLink aria-hidden="true" size={18} />
            </ActionLink>
          </div>
          <BadgeList className="mt-8 gap-3" items={proofPoints} variant="pill" />
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
      <section className={ds.layout.sectionBand}>
        <div className={cx(ds.layout.content, 'grid gap-4 py-8 md:grid-cols-4')}>
          <Metric label="Focus" value="Product front-end" />
          <Metric label="AI tooling" value="LSP bridge" />
          <Metric label="Mobile product" value="Release gates" />
          <Metric label="Product system" value="Editor engine" />
        </div>
      </section>
      <section className={cx(ds.layout.content, 'py-14')}>
        <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className={ds.text.eyebrowAccent}>Implementation Evidence</p>
            <h2 className="mt-2 text-3xl font-semibold">Product front-end surfaces I return to</h2>
          </div>
          <ActionLink href="/en/evidence" variant="subtle">
            View all evidence
          </ActionLink>
        </div>
        <ImplementationEvidenceBoard entries={homeEvidenceEntries} locale="en" />
      </section>
      <section className={ds.layout.sectionBand}>
        <div className={cx(ds.layout.content, 'py-14')}>
          <div className={ds.layout.sectionHeader}>
            <div>
              <p className={ds.text.eyebrowAccent}>Project Evidence</p>
              <h2 className="mt-3 text-3xl font-semibold">Public project evidence</h2>
            </div>
            <p className={cx('max-w-2xl', ds.text.bodySmall)}>
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
      <section className={cx(ds.layout.content, 'py-14')}>
        <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className={ds.text.eyebrowAccent}>Recent Changelog</p>
            <h2 className="mt-2 text-3xl font-semibold">Recent engineering notes</h2>
          </div>
          <ActionLink href="/en/changelog" variant="subtle">
            View full changelog
          </ActionLink>
        </div>
        <Panel className="px-5 py-2">
          {homeChangelogEntries.map((entry) => (
            <ChangelogEntry entry={entry} key={entry.title} locale="en" />
          ))}
        </Panel>
      </section>
    </main>
  );
}

function Metric({ label, value }: Readonly<{ label: string; value: string }>) {
  return (
    <Panel className="bg-[var(--surface-strong)] p-4">
      <p className={ds.text.eyebrowMuted}>{label}</p>
      <p className="mt-2 text-lg font-semibold">{value}</p>
    </Panel>
  );
}
