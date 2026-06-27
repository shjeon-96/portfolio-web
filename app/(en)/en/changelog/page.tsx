import { ChangelogEntry } from '@/components/changelog-entry';
import { SectionHeading } from '@/components/section-heading';
import { changelogEntries } from '@/lib/data';

export const metadata = {
  title: 'Engineering Changelog',
  description: 'Public-safe engineering changelog written as problem, approach, and result.',
};

export default function ChangelogPage() {
  const priorityEntries = changelogEntries.filter((entry) =>
    ['Export runtime parity rules', 'Variant state ownership', 'Agent-assisted root-cause workflow'].includes(entry.title),
  );

  return (
    <main className="mx-auto max-w-7xl px-5 py-16">
      <SectionHeading
        eyebrow="Engineering Changelog"
        title="A public-safe ledger of product engineering decisions"
        description="Commit activity is rewritten into notable changes: what problem appeared, how the system was adjusted, and what became easier to verify."
      />
      <section className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent-blue)]">Generated workflow</p>
        <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
          The first changelog set is based on a local extraction of 2,084 non-merge commits since 2026-04-01,
          grouped into six public-safe themes. Raw commit subjects, hashes, private references, and internal issue
          identifiers stay local-only.
        </p>
      </section>
      <section className="mt-8">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent-blue)]">Hiring signal</p>
            <h2 className="mt-2 text-2xl font-semibold">Start with these decisions</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-[var(--text-secondary)]">
            These entries best represent editor ownership, output parity, and agent-assisted root-cause work.
          </p>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {priorityEntries.map((entry) => (
            <article className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm" key={entry.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-secondary)]">{entry.category}</p>
              <h3 className="mt-3 text-lg font-semibold">{entry.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{entry.result}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mt-10 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-2 shadow-sm">
        {changelogEntries.map((entry) => (
          <ChangelogEntry entry={entry} key={entry.title} />
        ))}
      </section>
    </main>
  );
}
