import { ExternalLink } from 'lucide-react';
import { ChangelogEntry } from '@/components/changelog-entry';
import { HeroIntroShell } from '@/components/hero-intro-shell';
import { HeroSignalConsole } from '@/components/hero-signal-console';
import { ImplementationEvidenceBoard } from '@/components/implementation-evidence-board';
import { ProjectHighlightCard } from '@/components/project-highlight-card';
import { ActionLink, BadgeList, Panel } from '@/components/ui';
import { sortChangelogEntriesByDateDesc } from '@/lib/data';
import { changelogEntriesKo, implementationEvidenceKo, projectHighlightsKo, proofPointsKo } from '@/lib/data-ko';
import { cx, ds } from '@/lib/design-system';
import { createPageMetadata } from '@/lib/page-metadata';
import { getRoutePath } from '@/lib/routes';
import { GITHUB_PROFILE_URL } from '@/lib/site-links';

export const metadata = createPageMetadata({
  locale: 'ko',
  routeId: 'home',
  title: '제품 프론트엔드 포트폴리오',
  description: '노코드 빌더, B2B 운영 콘솔, 릴리즈 경계에서 상태 모델과 배포 산출물 정합성을 다룬 제품 프론트엔드 포트폴리오.',
});

export default function KoreanHomePage() {
  const featuredProjects = projectHighlightsKo.filter((project) => project.featured);
  const homeChangelogEntries = sortChangelogEntriesByDateDesc(changelogEntriesKo).slice(0, 3);
  const homeEvidenceEntries = implementationEvidenceKo.slice(0, 2);
  const changelogHref = getRoutePath('changelog', 'ko');
  const evidenceHref = getRoutePath('evidence', 'ko');

  return (
    <main>
      <HeroIntroShell
        actions={
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionLink href={evidenceHref} variant="primary">
              구현 근거 보기
            </ActionLink>
            <ActionLink href={changelogHref}>
              체인지로그 읽기
            </ActionLink>
            <ActionLink
              ariaLabel="GitHub 프로필"
              external
              href={GITHUB_PROFILE_URL}
              title="GitHub"
              variant="icon"
            >
              <ExternalLink aria-hidden="true" size={18} />
            </ActionLink>
          </div>
        }
        badges={<BadgeList className="mt-8 gap-3" items={proofPointsKo} variant="pill" />}
        console={<HeroSignalConsole locale="ko" />}
        description={
          <p className={cx('mt-6 max-w-2xl', ds.text.bodyLarge)}>
            노코드 웹 빌더, B2B 운영 콘솔, 모바일 릴리즈에서 편집 상태, API 계약,
            미리보기, Export/Deploy 산출물, 검증 흐름이 같은 기준을 따르도록 정리합니다.
          </p>
        }
        eyebrow={
          <p className={cx('mb-4', ds.text.eyebrowAccent)}>
            Seunghun Jeon / 제품 시스템 포트폴리오
          </p>
        }
        title={
          <h1 className={cx('max-w-3xl', ds.text.headingLg, 'sm:text-5xl')}>
            복잡한 제품 상태와 배포 산출물을 맞추는 프론트엔드 개발자
          </h1>
        }
      />
      <section className={ds.layout.sectionBand}>
        <div className={cx(ds.layout.content, 'grid gap-4 py-8 md:grid-cols-4')}>
          <Metric label="핵심 제품" value="에디터/빌더" />
          <Metric label="운영 화면" value="B2B 콘솔" />
          <Metric label="산출물" value="Export/Deploy" />
          <Metric label="작업 방식" value="검증 루프" />
        </div>
      </section>
      <section className={cx(ds.layout.content, 'py-14')}>
        <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className={ds.text.eyebrowAccent}>구현 근거</p>
            <h2 className="mt-2 text-3xl font-semibold">내가 반복해서 다뤄온 제품 프론트엔드 영역</h2>
          </div>
          <ActionLink href={evidenceHref} variant="subtle">
            전체 구현 근거 보기
          </ActionLink>
        </div>
        <ImplementationEvidenceBoard entries={homeEvidenceEntries} headingLevel={3} locale="ko" />
      </section>
      <section className={ds.layout.sectionBand}>
        <div className={cx(ds.layout.content, 'py-14')}>
          <div className={ds.layout.sectionHeader}>
            <div>
              <p className={ds.text.eyebrowAccent}>프로젝트 기록</p>
              <h2 className="mt-3 text-3xl font-semibold">공개 가능한 프로젝트 기록</h2>
            </div>
            <p className={cx('max-w-2xl', ds.text.bodySmall)}>
              긴 서사 페이지 대신 공개 저장소, 제품 범위, 월별 변경 기록이 서로 보완되도록 정리합니다.
            </p>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-2 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectHighlightCard locale="ko" project={project} key={project.title} />
            ))}
          </div>
        </div>
      </section>
      <section className={cx(ds.layout.content, 'py-14')}>
        <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className={ds.text.eyebrowAccent}>최근 엔지니어링 기록</p>
            <h2 className="mt-2 text-3xl font-semibold">최근 엔지니어링 노트</h2>
          </div>
          <ActionLink href={changelogHref} variant="subtle">
            전체 체인지로그 보기
          </ActionLink>
        </div>
        <Panel className="px-5 py-2">
          {homeChangelogEntries.map((entry) => (
            <ChangelogEntry entry={entry} headingLevel={3} key={entry.title} />
          ))}
        </Panel>
      </section>
    </main>
  );
}

function Metric({ label, value }: Readonly<{ label: string; value: string }>) {
  return (
    <Panel className="bg-[var(--surface-strong)] p-4">
      <p className={ds.text.eyebrowMuted}>{label}</p>
      <p className="mt-2 text-lg font-semibold">{value}</p>
    </Panel>
  );
}
