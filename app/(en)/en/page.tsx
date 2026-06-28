import { ExternalLink } from 'lucide-react';
import { ChangelogEntry } from '@/components/changelog-entry';
import { HeroIntroShell } from '@/components/hero-intro-shell';
import { HeroSignalConsole } from '@/components/hero-signal-console';
import { ImplementationEvidenceBoard } from '@/components/implementation-evidence-board';
import { ProjectHighlightCard } from '@/components/project-highlight-card';
import { ActionLink, BadgeList, Panel } from '@/components/ui';
import { changelogEntries, getFeaturedChangelogEntries, implementationEvidence, projectHighlights, proofPoints } from '@/lib/data';
import { cx, ds } from '@/lib/design-system';
import { createPageMetadata } from '@/lib/page-metadata';
import { getRoutePath } from '@/lib/routes';
import { GITHUB_PROFILE_URL } from '@/lib/site-links';

export const metadata = createPageMetadata({
  locale: 'en',
  routeId: 'home',
  title: 'Product Front-End Portfolio',
  description:
    'Product front-end portfolio focused on no-code builders, B2B operation consoles, state models, and export/deploy output parity.',
});

export default function Home() {
  const featuredProjects = projectHighlights.filter((project) => project.featured);
  const homeChangelogEntries = getFeaturedChangelogEntries(changelogEntries);
  const homeEvidenceEntries = implementationEvidence.slice(0, 2);
  const changelogHref = getRoutePath('changelog', 'en');
  const evidenceHref = getRoutePath('evidence', 'en');

  return (
    <main>
      <HeroIntroShell
        actions={
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionLink href={evidenceHref} variant="primary">
              Review evidence
            </ActionLink>
            <ActionLink href={changelogHref}>
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
        }
        badges={<BadgeList className="mt-8 gap-3" items={proofPoints} variant="pill" />}
        console={<HeroSignalConsole locale="en" />}
        description={
          <p className={cx('mt-6 max-w-2xl', ds.text.bodyLarge)}>
            I work on visual builders, B2B operation consoles, and release-bound product surfaces where editor state,
            API contracts, preview behavior, export/deploy artifacts, and verification need one contract.
          </p>
        }
        eyebrow={
          <p className={cx('mb-4', ds.text.eyebrowAccent)}>
            Seunghun Jeon / Product Console Portfolio
          </p>
        }
        title={
          <h1 className={cx('max-w-3xl', ds.text.headingLg, 'sm:text-5xl')}>
            Product front-end for complex state and deployable output
          </h1>
        }
      />
      <section className={ds.layout.sectionBand}>
        <div className={cx(ds.layout.content, 'grid gap-4 py-8 md:grid-cols-4')}>
          <Metric label="Core product" value="Editor/builder" />
          <Metric label="Operations" value="B2B console" />
          <Metric label="Output" value="Export/deploy" />
          <Metric label="Work loop" value="Verified patches" />
        </div>
      </section>
      <section className={cx(ds.layout.content, 'py-14')}>
        <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className={ds.text.eyebrowAccent}>Implementation Evidence</p>
            <h2 className="mt-2 text-3xl font-semibold">Product front-end surfaces I return to</h2>
          </div>
          <ActionLink href={evidenceHref} variant="subtle">
            View all evidence
          </ActionLink>
        </div>
        <ImplementationEvidenceBoard entries={homeEvidenceEntries} headingLevel={3} locale="en" />
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
              <ProjectHighlightCard locale="en" project={project} key={project.title} />
            ))}
          </div>
        </div>
      </section>
      <section className={cx(ds.layout.content, 'py-14')}>
        <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className={ds.text.eyebrowAccent}>Selected Engineering Evidence</p>
            <h2 className="mt-2 text-3xl font-semibold">Records that best explain how I work</h2>
          </div>
          <ActionLink href={changelogHref} variant="subtle">
            View changelog archive
          </ActionLink>
        </div>
        <Panel className="px-5 py-2">
          {homeChangelogEntries.map((entry) => (
            <ChangelogEntry entry={entry} headingLevel={3} key={entry.title} locale="en" />
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
