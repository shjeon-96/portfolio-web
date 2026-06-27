import { ChangelogEntry } from '@/components/changelog-entry';
import { ChangelogFocusPanel } from '@/components/changelog-focus-panel';
import { FeaturedChangelogList } from '@/components/featured-changelog-list';
import { MotionReveal } from '@/components/motion-reveal';
import { SectionHeading } from '@/components/section-heading';
import { Panel } from '@/components/ui';
import { getChangelogFocusState, getVisibleChangelogEntries } from '@/lib/changelog-focus';
import { formatChangelogDate, getFeaturedChangelogEntries, groupChangelogEntriesByDate } from '@/lib/data';
import { changelogEntriesKo } from '@/lib/data-ko';
import { cx, ds } from '@/lib/design-system';

export const metadata = {
  title: '엔지니어링 체인지로그',
  description: '월별로 정리한 공개 가능한 엔지니어링 체인지로그입니다.',
};

type KoreanChangelogPageProps = {
  searchParams: Promise<{
    focus?: string | string[] | undefined;
  }>;
};

export default async function KoreanChangelogPage({ searchParams }: Readonly<KoreanChangelogPageProps>) {
  const focusState = getChangelogFocusState((await searchParams).focus);
  const visibleEntries = getVisibleChangelogEntries(changelogEntriesKo, focusState);
  const featuredEntries = getFeaturedChangelogEntries(visibleEntries);
  const groupedEntries = groupChangelogEntriesByDate(visibleEntries);
  const featuredTitle = focusState.kind === 'active' ? `${focusState.rule.label.ko} 핵심 변경` : '작업 방식을 잘 보여주는 핵심 변경 3개';
  const featuredDescription =
    focusState.kind === 'active'
      ? focusState.rule.description.ko
      : '릴리즈 게이트, 결과물 일관성, AI 원인 분석처럼 현재 포트폴리오의 방향을 가장 잘 보여주는 변경입니다.';

  return (
    <main className="page-shell">
      <SectionHeading
        eyebrow="변경 기록"
        title="월별 제품 엔지니어링 기록"
        description="프로젝트별 변경을 공개 가능한 월별 기록으로 정리합니다. 각 항목은 문제 배경, 실제 변경, 확인한 내용만 남깁니다."
      />
      <ChangelogFocusPanel focusState={focusState} locale="ko" resultCount={visibleEntries.length} />
      {focusState.kind !== 'invalid' && featuredEntries.length > 0 ? (
        <FeaturedChangelogList
          description={featuredDescription}
          entries={featuredEntries}
          locale="ko"
          title={featuredTitle}
        />
      ) : null}
      {groupedEntries.length > 0 ? (
        <Panel as="section" className="mt-8 px-5 py-1">
          {groupedEntries.map((group) => (
            <MotionReveal key={group.date}>
              <div className="grid gap-4 border-b border-[var(--border)] py-7 last:border-b-0 md:grid-cols-[150px_1fr]">
                <div>
                  <p className="text-lg font-semibold text-[var(--text-primary)]">{formatChangelogDate(group.date, 'ko')}</p>
                  <p className={cx('mt-2', ds.text.eyebrowMuted)}>
                    변경 {group.entries.length}개
                  </p>
                </div>
                <div className="[&>article:last-child]:border-b-0">
                  {group.entries.map((entry) => (
                    <ChangelogEntry entry={entry} key={entry.title} showDate={false} />
                  ))}
                </div>
              </div>
            </MotionReveal>
          ))}
        </Panel>
      ) : null}
    </main>
  );
}
