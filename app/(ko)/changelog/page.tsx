import { ChangelogArchiveList } from '@/components/changelog-archive-list';
import { ChangelogFocusPanel } from '@/components/changelog-focus-panel';
import { FeaturedChangelogList } from '@/components/featured-changelog-list';
import { SectionHeading } from '@/components/section-heading';
import { getChangelogFocusState, getVisibleChangelogEntries } from '@/lib/changelog-focus';
import { getFeaturedChangelogEntries, groupChangelogEntriesByDate } from '@/lib/data';
import { changelogEntriesKo } from '@/lib/data-ko';
import { createPageMetadata } from '@/lib/page-metadata';

export const metadata = createPageMetadata({
  locale: 'ko',
  routeId: 'changelog',
  title: '엔지니어링 체인지로그',
  description: '월별로 정리한 공개 가능한 엔지니어링 체인지로그입니다.',
});

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
  const archiveTitle = focusState.kind === 'active' ? `${focusState.rule.label.ko} 전체 기록` : '월별 전체 기록';
  const archiveDescription =
    focusState.kind === 'active'
      ? '선택한 근거 필터에 맞는 월별 기록입니다.'
      : '기본 화면에서는 대표 근거를 먼저 보여주고, 전체 월별 기록은 보관 영역으로 분리합니다.';

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
      <ChangelogArchiveList
        defaultOpen={focusState.kind === 'active'}
        description={archiveDescription}
        groups={groupedEntries}
        locale="ko"
        title={archiveTitle}
      />
    </main>
  );
}
