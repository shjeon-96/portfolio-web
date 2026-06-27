import { ChangelogEntry } from '@/components/changelog-entry';
import { SectionHeading } from '@/components/section-heading';
import { changelogEntries, formatChangelogDate, groupChangelogEntriesByDate } from '@/lib/data';

export const metadata = {
  title: 'Engineering Changelog',
  description: 'Public-safe engineering changelog written as problem, approach, and result.',
};

export default function ChangelogPage() {
  const groupedEntries = groupChangelogEntriesByDate(changelogEntries);

  return (
    <main className="page-shell">
      <SectionHeading
        eyebrow="Engineering Changelog"
        title="Date-based product engineering notes"
        description="Project changes are rewritten into public-safe notes. Each entry keeps the context, the change, and the observed result."
      />
      <section className="surface-panel mt-10 px-5 py-1">
        {groupedEntries.map((group) => (
          <div className="grid gap-4 border-b border-[var(--border)] py-7 last:border-b-0 md:grid-cols-[150px_1fr]" key={group.date}>
            <div>
              <p className="text-lg font-semibold text-[var(--text-primary)]">{formatChangelogDate(group.date, 'en')}</p>
              <p className="mt-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-secondary)]">
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
      </section>
    </main>
  );
}
