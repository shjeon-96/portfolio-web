import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { ChangelogEntry } from '@/components/changelog-entry';
import { HomeEvidencePanel } from '@/components/home-evidence-panel';
import { ProjectHighlightCard } from '@/components/project-highlight-card';
import { sortChangelogEntriesByDateDesc } from '@/lib/data';
import { changelogEntriesKo, projectHighlightsKo, proofPointsKo } from '@/lib/data-ko';

export const metadata = {
  title: '제품 프론트엔드 포트폴리오',
  description: '에디터 엔진, 모바일 릴리즈 게이트, AI 개발 흐름을 공개 가능한 제품 엔지니어링 근거로 정리한 포트폴리오.',
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

  return (
    <main>
      <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:py-10">
        <div>
          <p className="mb-4 font-mono text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent-blue)]">
            Seunghun Jeon / 제품 시스템 포트폴리오
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-balance sm:text-5xl">
            AI 도구, 모바일 릴리즈, 에디터 엔진을 다루는 제품 프론트엔드
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            비주얼 빌더, 모바일 제품, AI 개발 흐름에서 제품 상태와 런타임 동작,
            릴리즈 검증, 생성 산출물이 같은 기준으로 이어지도록 구조화합니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="flex min-h-11 items-center rounded-md bg-[var(--text-primary)] px-4 py-2 text-sm font-semibold text-white" href="/changelog">
              체인지로그 읽기
            </Link>
            <Link className="flex min-h-11 items-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold" href="/ai-workflow">
              AI 개발 흐름 보기
            </Link>
            <a
              aria-label="GitHub 프로필"
              className="grid size-11 place-items-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)]"
              href="https://github.com/shjeon-96"
              rel="noreferrer"
              target="_blank"
              title="GitHub"
            >
              <ExternalLink aria-hidden="true" size={18} />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {proofPointsKo.map((point) => (
              <span
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text-secondary)]"
                key={point}
              >
                {point}
              </span>
            ))}
          </div>
        </div>

        <HomeEvidencePanel
          kicker="작업 요약"
          title="최근 작업의 중심축"
          summary="스크린샷보다 상태 모델, 데이터 흐름, 확인 가능한 동작, 릴리즈 검증, 생성 산출물을 중심으로 정리했습니다."
          items={[
            {
              label: '작업 범위',
              title: '복잡한 제품 UI와 런타임 경계',
              description: '에디터 엔진, 모바일 릴리즈, AI 개발 도구처럼 상태와 산출물이 분리되기 쉬운 영역을 다룹니다.',
            },
            {
              label: '최근 작업',
              title: '월별 체인지로그와 프로젝트 기록',
              description: '대표 작업은 공개 가능한 프로젝트 기록으로 보완하고 변경 이력은 커밋 기반 월별 기록으로 추적합니다.',
            },
            {
              label: '작업 방식',
              title: '원인 모듈을 찾고 좁게 고칩니다',
              description: '임시 우회보다 실제 소유 코드와 계약을 확인하고, 공개 가능한 범위에서 검증 근거를 남깁니다.',
            },
          ]}
        />
      </section>
      <section className="border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-8 md:grid-cols-4">
          <Metric label="중심 분야" value="제품 프론트엔드" />
          <Metric label="AI 개발 도구" value="LSP 브리지" />
          <Metric label="모바일 제품" value="릴리즈 게이트" />
          <Metric label="제품 시스템" value="에디터 엔진" />
        </div>
      </section>
      <section className="border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-blue)]">프로젝트 기록</p>
              <h2 className="mt-3 text-3xl font-semibold">보조로 참고할 프로젝트 기록</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">
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
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-blue)]">최근 엔지니어링 기록</p>
            <h2 className="mt-2 text-3xl font-semibold">최근 엔지니어링 노트</h2>
          </div>
          <Link className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--accent-blue)]" href="/changelog">
            전체 체인지로그 보기
          </Link>
        </div>
        <div className="surface-panel px-5 py-2">
          {homeChangelogEntries.map((entry) => (
            <ChangelogEntry entry={entry} key={entry.title} />
          ))}
        </div>
      </section>
    </main>
  );
}

function Metric({ label, value }: Readonly<{ label: string; value: string }>) {
  return (
    <div className="surface-panel bg-[var(--surface-strong)] p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-secondary)]">{label}</p>
      <p className="mt-2 text-lg font-semibold">{value}</p>
    </div>
  );
}
