import { Badge, BadgeList } from '@/components/ui';
import { formatChangelogDate, type ChangelogEntry as ChangelogEntryType } from '@/lib/data';
import { cx, ds } from '@/lib/design-system';

export function ChangelogEntry({
  entry,
  headingLevel = 2,
  locale = 'ko',
  showDate = true,
}: Readonly<{
  entry: ChangelogEntryType;
  headingLevel?: 2 | 3 | 4;
  locale?: 'en' | 'ko';
  showDate?: boolean;
}>) {
  return (
    <article className={`grid gap-4 border-b border-[var(--border)] py-6 ${showDate ? 'md:grid-cols-[150px_1fr]' : ''}`}>
      {showDate ? (
        <div>
          <p className="font-mono text-sm font-semibold text-[var(--text-primary)]">{formatChangelogDate(entry.date, locale)}</p>
          <Badge className="mt-2" variant="surface">
            {entry.category}
          </Badge>
        </div>
      ) : null}
      <div>
        {!showDate ? (
          <Badge className="mb-3" variant="strong">
            {entry.category}
          </Badge>
        ) : null}
        <EntryHeading level={headingLevel}>{entry.title}</EntryHeading>
        <p className={cx('mt-2', ds.text.bodySmall)}>{entry.problem}</p>
        <ul className={cx('mt-3 space-y-2', ds.text.bodySmall)}>
          {entry.approach.map((item) => (
            <li className="flex gap-2" key={item}>
              <span className={ds.marker.bullet} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className={cx('mt-3', ds.text.primarySmall)}>{entry.result}</p>
        <BadgeList className="mt-3" items={entry.stack} variant="muted" />
      </div>
    </article>
  );
}

function EntryHeading({ children, level }: Readonly<{ children: string; level: 2 | 3 | 4 }>) {
  const className = 'text-lg font-semibold';

  if (level === 3) {
    return <h3 className={className}>{children}</h3>;
  }

  if (level === 4) {
    return <h4 className={className}>{children}</h4>;
  }

  return <h2 className={className}>{children}</h2>;
}
