import { ChevronDown } from 'lucide-react';

import { ChangelogEntry } from '@/components/changelog-entry';
import { MotionReveal } from '@/components/motion-reveal';
import { Panel } from '@/components/ui';
import { formatChangelogDate, type ChangelogEntry as ChangelogEntryType } from '@/lib/data';
import { cx, ds } from '@/lib/design-system';

type ChangelogGroup = {
  date: string;
  entries: ChangelogEntryType[];
};

export function ChangelogArchiveList({
  defaultOpen,
  description,
  groups,
  locale,
  title,
}: Readonly<{
  defaultOpen: boolean;
  description: string;
  groups: ChangelogGroup[];
  locale: 'en' | 'ko';
  title: string;
}>) {
  if (groups.length === 0) {
    return null;
  }

  const labels = getLabels(locale);
  const entryCount = groups.reduce((total, group) => total + group.entries.length, 0);

  return (
    <Panel as="section" className="mt-8 overflow-hidden">
      <details className="group" open={defaultOpen}>
        <summary className="flex cursor-pointer list-none flex-col justify-between gap-4 px-5 py-5 marker:hidden md:flex-row md:items-center">
          <div>
            <p className={ds.text.eyebrowMuted}>{labels.eyebrow}</p>
            <h2 className="mt-2 text-2xl font-semibold">{title}</h2>
            <p className={cx('mt-2 max-w-3xl', ds.text.bodySmall)}>{description}</p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <span className="rounded-md border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2 text-sm font-semibold text-[var(--text-primary)]">
              {labels.count(entryCount)}
            </span>
            <span className="grid size-10 place-items-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] transition group-open:rotate-180">
              <ChevronDown aria-hidden="true" size={18} />
            </span>
          </div>
        </summary>
        <div className="border-t border-[var(--border)] px-5 py-1">
          {groups.map((group) => (
            <MotionReveal key={group.date}>
              <div className="grid gap-4 border-b border-[var(--border)] py-7 last:border-b-0 md:grid-cols-[150px_1fr]">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">{formatChangelogDate(group.date, locale)}</h3>
                  <p className={cx('mt-2', ds.text.eyebrowMuted)}>{labels.groupCount(group.entries.length)}</p>
                </div>
                <div className="[&>article:last-child]:border-b-0">
                  {group.entries.map((entry) => (
                    <ChangelogEntry entry={entry} headingLevel={4} key={entry.title} locale={locale} showDate={false} />
                  ))}
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </details>
    </Panel>
  );
}

function getLabels(locale: 'en' | 'ko') {
  if (locale === 'ko') {
    return {
      count: (count: number) => `기록 ${count}개`,
      eyebrow: '전체 기록',
      groupCount: (count: number) => `변경 ${count}개`,
    };
  }

  return {
    count: (count: number) => `${count} records`,
    eyebrow: 'Full Archive',
    groupCount: (count: number) => `${count} changes`,
  };
}
