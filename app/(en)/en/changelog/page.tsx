import { ChangelogArchiveList } from '@/components/changelog-archive-list';
import { ChangelogFocusPanel } from '@/components/changelog-focus-panel';
import { FeaturedChangelogList } from '@/components/featured-changelog-list';
import { SectionHeading } from '@/components/section-heading';
import { getChangelogFocusState, getVisibleChangelogEntries } from '@/lib/changelog-focus';
import { changelogEntries, getFeaturedChangelogEntries, groupChangelogEntriesByDate } from '@/lib/data';
import { createPageMetadata } from '@/lib/page-metadata';

export const metadata = createPageMetadata({
  locale: 'en',
  routeId: 'changelog',
  title: 'Engineering Changelog',
  description: 'Public-safe engineering changelog written as problem, approach, and result.',
});

type ChangelogPageProps = {
  searchParams: Promise<{
    focus?: string | string[] | undefined;
  }>;
};

export default async function ChangelogPage({ searchParams }: Readonly<ChangelogPageProps>) {
  const focusState = getChangelogFocusState((await searchParams).focus);
  const visibleEntries = getVisibleChangelogEntries(changelogEntries, focusState);
  const featuredEntries = getFeaturedChangelogEntries(visibleEntries);
  const groupedEntries = groupChangelogEntriesByDate(visibleEntries);
  const featuredTitle = focusState.kind === 'active' ? `${focusState.rule.label.en} to review first` : 'Three changes to review first';
  const featuredDescription =
    focusState.kind === 'active'
      ? focusState.rule.description.en
      : 'Release gates, output parity, and AI-assisted root-cause work are the clearest current signals in this portfolio.';
  const archiveTitle = focusState.kind === 'active' ? `${focusState.rule.label.en} archive` : 'Full monthly archive';
  const archiveDescription =
    focusState.kind === 'active'
      ? 'Monthly records matching the selected evidence filter.'
      : 'The default view leads with representative evidence; the full monthly record stays available as an archive.';

  return (
    <main className="page-shell">
      <SectionHeading
        eyebrow="Engineering Changelog"
        title="Monthly product engineering notes"
        description="Project changes are rewritten into public-safe monthly notes. Each entry keeps the context, the change, and the observed result."
      />
      <ChangelogFocusPanel focusState={focusState} locale="en" resultCount={visibleEntries.length} />
      {focusState.kind !== 'invalid' && featuredEntries.length > 0 ? (
        <FeaturedChangelogList
          description={featuredDescription}
          entries={featuredEntries}
          locale="en"
          title={featuredTitle}
        />
      ) : null}
      <ChangelogArchiveList
        defaultOpen={focusState.kind === 'active'}
        description={archiveDescription}
        groups={groupedEntries}
        locale="en"
        title={archiveTitle}
      />
    </main>
  );
}
