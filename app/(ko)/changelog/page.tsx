import { ChangelogEntry } from '@/components/changelog-entry';
import { SectionHeading } from '@/components/section-heading';
import { formatChangelogDate, groupChangelogEntriesByDate } from '@/lib/data';
import { changelogEntriesKo } from '@/lib/data-ko';

export const metadata = {
  title: '엔지니어링 체인지로그',
  description: '월별로 정리한 공개 가능한 엔지니어링 체인지로그입니다.',
};

export default function KoreanChangelogPage() {
  const groupedEntries = groupChangelogEntriesByDate(changelogEntriesKo);

  return (
    <main className="page-shell">
      <SectionHeading
        eyebrow="변경 기록"
        title="월별 제품 엔지니어링 기록"
        description="프로젝트별 변경을 공개 가능한 월별 기록으로 정리합니다. 각 항목은 문제 배경, 실제 변경, 확인한 내용만 남깁니다."
      />
      <section className="surface-panel mt-10 px-5 py-1">
        {groupedEntries.map((group) => (
          <div className="grid gap-4 border-b border-[var(--border)] py-7 last:border-b-0 md:grid-cols-[150px_1fr]" key={group.date}>
            <div>
              <p className="text-lg font-semibold text-[var(--text-primary)]">{formatChangelogDate(group.date, 'ko')}</p>
              <p className="mt-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-secondary)]">
                변경 {group.entries.length}개
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
