import { ChangelogEntry } from '@/components/changelog-entry';
import { ChangelogFocusPanel } from '@/components/changelog-focus-panel';
import { FeaturedChangelogList } from '@/components/featured-changelog-list';
import { SectionHeading } from '@/components/section-heading';
import { Panel } from '@/components/ui';
import { getChangelogFocusState, getVisibleChangelogEntries } from '@/lib/changelog-focus';
import { changelogEntries, formatChangelogDate, getFeaturedChangelogEntries, groupChangelogEntriesByDate } from '@/lib/data';
import { cx, ds } from '@/lib/design-system';

export const metadata = {
  title: 'Engineering Changelog',
  description: 'Public-safe engineering changelog written as problem, approach, and result.',
};

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
      {groupedEntries.length > 0 ? (
        <Panel as="section" className="mt-8 px-5 py-1">
          {groupedEntries.map((group) => (
            <div className="grid gap-4 border-b border-[var(--border)] py-7 last:border-b-0 md:grid-cols-[150px_1fr]" key={group.date}>
              <div>
                <p className="text-lg font-semibold text-[var(--text-primary)]">{formatChangelogDate(group.date, 'en')}</p>
                <p className={cx('mt-2', ds.text.eyebrowMuted)}>
                  {group.entries.length} changes
                </p>
              </div>
              <div className="[&>article:last-child]:border-b-0">
                {group.entries.map((entry) => (
                  <ChangelogEntry entry={entry} key={entry.title} locale="en" showDate={false} />
                ))}
              </div>
            </div>
          ))}
        </Panel>
      ) : null}
    </main>
  );
}
