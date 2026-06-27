import { Badge, BadgeList, Panel } from '@/components/ui';
import { formatChangelogDate, type ChangelogEntry } from '@/lib/data';
import { cx, ds } from '@/lib/design-system';

export function FeaturedChangelogList({
  description,
  entries,
  locale,
  title,
}: Readonly<{
  description: string;
  entries: ChangelogEntry[];
  locale: 'en' | 'ko';
  title: string;
}>) {
  return (
    <Panel as="section" className="mt-10 overflow-hidden">
      <div className="border-b border-[var(--border)] px-5 py-5 md:flex md:items-end md:justify-between md:gap-8">
        <div>
          <p className={ds.text.eyebrow}>{locale === 'ko' ? '먼저 볼 기록' : 'Start here'}</p>
          <h2 className="mt-2 text-2xl font-semibold">{title}</h2>
        </div>
        <p className={cx('mt-3 max-w-2xl md:mt-0', ds.text.bodySmall)}>{description}</p>
      </div>
      <div className="divide-y divide-[var(--border)]">
        {entries.map((entry) => (
          <article className="grid gap-4 px-5 py-5 md:grid-cols-[170px_1fr]" key={entry.title}>
            <div>
              <p className="font-mono text-sm font-semibold text-[var(--text-primary)]">{formatChangelogDate(entry.date, locale)}</p>
              <Badge className="mt-2" variant="strong">
                {entry.category}
              </Badge>
            </div>
            <div>
              <h3 className="text-lg font-semibold">{entry.title}</h3>
              <p className={cx('mt-2', ds.text.bodySmall)}>{entry.problem}</p>
              <p className={cx('mt-3', ds.text.primarySmall)}>
                <span className="font-semibold">{locale === 'ko' ? '결과' : 'Result'}: </span>
                {entry.result}
              </p>
              <BadgeList className="mt-3" items={entry.stack} variant="muted" />
            </div>
          </article>
        ))}
      </div>
    </Panel>
  );
}
