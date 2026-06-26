import type { ChangelogEntry as ChangelogEntryType } from '@/lib/data';

export function ChangelogEntry({
  entry,
  labels = { approach: 'Approach', result: 'Result' },
}: Readonly<{
  entry: ChangelogEntryType;
  labels?: {
    approach: string;
    result: string;
  };
}>) {
  return (
    <article className="grid gap-4 border-b border-[var(--border)] py-7 md:grid-cols-[160px_1fr]">
      <div>
        <p className="font-semibold text-[var(--text-primary)]">{entry.period}</p>
        <p className="mt-2 inline-flex rounded-md border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-xs text-[var(--text-secondary)]">
          {entry.category}
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">{entry.title}</h2>
        <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{entry.problem}</p>
        <div className="mt-4 grid gap-3 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-amber)]">{labels.approach}</p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--text-secondary)]">
              {entry.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-green)]">{labels.result}</p>
            <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{entry.result}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {entry.stack.map((item) => (
            <span className="rounded-md bg-[var(--background)] px-2.5 py-1 text-xs text-[var(--text-secondary)]" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
