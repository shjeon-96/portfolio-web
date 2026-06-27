import { ChangelogEntry } from '@/components/changelog-entry';
import { FeaturedChangelogList } from '@/components/featured-changelog-list';
import { SectionHeading } from '@/components/section-heading';
import { Panel } from '@/components/ui';
import { changelogEntries, formatChangelogDate, getFeaturedChangelogEntries, groupChangelogEntriesByDate } from '@/lib/data';
import { cx, ds } from '@/lib/design-system';

export const metadata = {
  title: 'Engineering Changelog',
  description: 'Public-safe engineering changelog written as problem, approach, and result.',
};

export default function ChangelogPage() {
  const featuredEntries = getFeaturedChangelogEntries(changelogEntries);
  const groupedEntries = groupChangelogEntriesByDate(changelogEntries);

  return (
    <main className="page-shell">
      <SectionHeading
        eyebrow="Engineering Changelog"
        title="Monthly product engineering notes"
        description="Project changes are rewritten into public-safe monthly notes. Each entry keeps the context, the change, and the observed result."
      />
      <FeaturedChangelogList
        description="Release gates, output parity, and AI-assisted root-cause work are the clearest current signals in this portfolio."
        entries={featuredEntries}
        locale="en"
        title="Three changes to review first"
      />
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
                <ChangelogEntry entry={entry} key={entry.title} showDate={false} />
              ))}
            </div>
          </div>
        ))}
      </Panel>
    </main>
  );
}
