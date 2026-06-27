import type { ChangelogEntry as ChangelogEntryType } from '@/lib/data';

export function ChangelogEntry({
  entry,
  showDate = true,
}: Readonly<{
  entry: ChangelogEntryType;
  showDate?: boolean;
}>) {
  return (
    <article className={`grid gap-4 border-b border-[var(--border)] py-6 ${showDate ? 'md:grid-cols-[150px_1fr]' : ''}`}>
      {showDate ? (
        <div>
          <p className="font-mono text-sm font-semibold text-[var(--text-primary)]">{entry.date}</p>
          <p className="mt-2 inline-flex rounded-md border border-[var(--border)] bg-[var(--surface)] px-2 py-1 text-xs text-[var(--text-secondary)]">
            {entry.category}
          </p>
        </div>
      ) : null}
      <div>
        {!showDate ? (
          <p className="mb-3 inline-flex rounded-md border border-[var(--border)] bg-[var(--surface-strong)] px-2 py-1 text-xs text-[var(--text-secondary)]">
            {entry.category}
          </p>
        ) : null}
        <h2 className="text-lg font-semibold">{entry.title}</h2>
        <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{entry.problem}</p>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--text-secondary)]">
          {entry.approach.map((item) => (
            <li className="flex gap-2" key={item}>
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text-muted)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm leading-6 text-[var(--text-primary)]">{entry.result}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {entry.stack.map((item) => (
            <span className="rounded-md bg-[var(--background)] px-2 py-1 text-xs text-[var(--text-secondary)]" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
