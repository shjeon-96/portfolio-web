import { ExternalLink } from 'lucide-react';
import { ChangelogEntry } from '@/components/changelog-entry';
import { HomeEvidencePanel } from '@/components/home-evidence-panel';
import { ImplementationEvidenceBoard } from '@/components/implementation-evidence-board';
import { ProjectHighlightCard } from '@/components/project-highlight-card';
import { ActionLink, BadgeList, Panel } from '@/components/ui';
import { sortChangelogEntriesByDateDesc } from '@/lib/data';
import { changelogEntriesKo, implementationEvidenceKo, projectHighlightsKo, proofPointsKo } from '@/lib/data-ko';
import { cx, ds } from '@/lib/design-system';
import { GITHUB_PROFILE_URL } from '@/lib/site-links';

export const metadata = {
  title: '제품 프론트엔드 포트폴리오',
  description: '에디터 엔진, 모바일 릴리즈 게이트, AI 개발 흐름을 공개해도 안전한 제품 엔지니어링 근거로 정리한 포트폴리오.',
};

export default function KoreanHomePage() {
  const featuredProjects = projectHighlightsKo.filter((project) =>
    [
      'codex-lsp-bridge',
      'Gyeol Mobile',
      'PureFlow',
      'Web Toolkit',
      '세무·정산 운영 플랫폼',
    ].includes(project.title),
  );
  const homeChangelogEntries = sortChangelogEntriesByDateDesc(changelogEntriesKo).slice(0, 3);
  const homeEvidenceEntries = implementationEvidenceKo.slice(0, 2);

  return (
    <main>
      <section className={cx(ds.layout.content, 'grid w-full gap-10 py-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:py-10')}>
        <div>
          <p className={cx('mb-4', ds.text.eyebrowAccent)}>
            Seunghun Jeon / 제품 시스템 포트폴리오
          </p>
          <h1 className={cx('max-w-3xl', ds.text.headingLg, 'sm:text-5xl')}>
            AI 도구, 모바일 릴리즈, 에디터 엔진을 다루는 제품 프론트엔드
          </h1>
          <p className={cx('mt-6 max-w-2xl', ds.text.bodyLarge)}>
            비주얼 빌더, 모바일 제품, AI 개발 흐름에서 제품 상태, 런타임 동작,
            릴리즈 검증, 생성 결과가 같은 기준으로 이어지도록 구조화합니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionLink href="/evidence" variant="primary">
              구현 근거 보기
            </ActionLink>
            <ActionLink href="/changelog">
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
          <BadgeList className="mt-8 gap-3" items={proofPointsKo} variant="pill" />
        </div>

        <HomeEvidencePanel
          kicker="작업 요약"
          title="최근 작업의 중심축"
          summary="스크린샷보다 상태 모델, 데이터 흐름, 확인 가능한 동작, 릴리즈 검증, 생성 결과를 중심으로 정리했습니다."
          items={[
            {
              label: '작업 범위',
              title: '복잡한 제품 UI와 런타임 기준',
              description: '에디터 엔진, 모바일 릴리즈, AI 개발 도구처럼 상태와 결과물이 분리되기 쉬운 영역을 다룹니다.',
            },
            {
              label: '최근 작업',
              title: '월별 체인지로그와 프로젝트 기록',
              description: '대표 작업은 공개 가능한 프로젝트 기록으로 보완하고 변경 이력은 커밋 기반 월별 기록으로 추적합니다.',
            },
            {
              label: '작업 방식',
              title: '원인 모듈을 찾고 좁게 고칩니다',
              description: '임시 우회보다 실제 담당 코드와 기준을 확인하고, 공개 가능한 범위에서 검증 근거를 남깁니다.',
            },
          ]}
        />
      </section>
      <section className={ds.layout.sectionBand}>
        <div className={cx(ds.layout.content, 'grid gap-4 py-8 md:grid-cols-4')}>
          <Metric label="중심 분야" value="제품 프론트엔드" />
          <Metric label="AI 개발 도구" value="LSP 브리지" />
          <Metric label="모바일 제품" value="릴리즈 게이트" />
          <Metric label="제품 시스템" value="에디터 엔진" />
        </div>
      </section>
      <section className={cx(ds.layout.content, 'py-14')}>
        <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className={ds.text.eyebrowAccent}>구현 근거</p>
            <h2 className="mt-2 text-3xl font-semibold">프론트엔드 역량을 판단할 대표 영역</h2>
          </div>
          <ActionLink href="/evidence" variant="subtle">
            전체 구현 근거 보기
          </ActionLink>
        </div>
        <ImplementationEvidenceBoard entries={homeEvidenceEntries} locale="ko" />
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
              <ProjectHighlightCard project={project} key={project.title} />
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
          <ActionLink href="/changelog" variant="subtle">
            전체 체인지로그 보기
          </ActionLink>
        </div>
        <Panel className="px-5 py-2">
          {homeChangelogEntries.map((entry) => (
            <ChangelogEntry entry={entry} key={entry.title} />
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
