import Link from 'next/link';
import { CaseStudyCard } from '@/components/case-study-card';
import { ChangelogEntry } from '@/components/changelog-entry';
import { ProjectHighlightCard } from '@/components/project-highlight-card';
import { caseStudiesKo, changelogEntriesKo, projectHighlightsKo, proofPointsKo } from '@/lib/data-ko';

export const metadata = {
  title: '제품 프론트엔드 포트폴리오',
  description: 'React, Next.js, 제품 엔지니어링, 엔지니어링 체인지로그, AI 워크플로우 포트폴리오.',
};

export default function KoreanHomePage() {
  const homeChangelogEntries = [
    'Agent LSP Bridge 릴리즈 계약',
    '모바일 릴리즈 게이트 시스템',
    'SwiftUI 제품 모듈 아키텍처',
  ]
    .map((title) => changelogEntriesKo.find((entry) => entry.title === title))
    .filter((entry): entry is (typeof changelogEntriesKo)[number] => Boolean(entry));

  return (
    <main>
      <section className="mx-auto grid min-h-[calc(100vh-73px)] w-full max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent-blue)]">
            Product Console Portfolio
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-balance sm:text-5xl">
            AI 도구, 모바일 릴리즈, 에디터 엔진을 다루는 제품 프론트엔드
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            비주얼 빌더, 모바일 제품, AI 개발 워크플로우에서 제품 상태와 런타임 동작,
            릴리즈 검증, 생성 산출물이 같은 기준으로 이어지도록 구조화합니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="flex min-h-11 items-center rounded-md bg-[var(--text-primary)] px-4 py-2 text-sm font-semibold text-white" href="/case-studies">
              케이스 스터디 보기
            </Link>
            <Link className="flex min-h-11 items-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold" href="/editor-prototype">
              프로토타입 써보기
            </Link>
            <Link className="flex min-h-11 items-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold" href="/changelog">
              체인지로그 읽기
            </Link>
            <a
              className="flex min-h-11 items-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold"
              href="https://github.com/shjeon-96"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
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

        <aside className="grid gap-4">
          <ConsolePanel
            eyebrow="Current Focus"
            title="Agent Semantic Tooling"
            description="코딩 에이전트가 언어 서버의 semantic feedback을 읽기 전용 도구로 활용할 수 있게 만듭니다."
          />
          <ConsolePanel
            eyebrow="Recent Changelog"
            title="Mobile Release Gates"
            description="Expo, native policy, shared packages, store-facing build 검증을 하나의 릴리즈 경로로 묶습니다."
          />
          <ConsolePanel
            eyebrow="Editor Systems"
            title="State -> Runtime -> Output"
            description="에디터 상태, 런타임 동작, 생성 산출물이 하나의 제품 모델 위에서 움직이게 합니다."
          />
        </aside>
      </section>
      <section className="border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-8 md:grid-cols-4">
          <Metric label="중심 분야" value="Product FE" />
          <Metric label="AI 개발 도구" value="LSP bridge" />
          <Metric label="모바일 제품" value="Release gates" />
          <Metric label="제품 시스템" value="Editor engine" />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-blue)]">Selected Work</p>
            <h2 className="mt-3 text-3xl font-semibold">최근에 깊게 다룬 제품 시스템</h2>
          </div>
          <Link className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--accent-blue)]" href="/case-studies">
            전체 케이스 스터디 보기
          </Link>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {caseStudiesKo.slice(0, 3).map((caseStudy) => (
            <CaseStudyCard
              caseStudy={caseStudy}
              cta="케이스 스터디 읽기"
              hrefPrefix="/case-studies"
              key={caseStudy.slug}
              labels={{ proof: '작업 맥락', verification: '확인한 것' }}
            />
          ))}
        </div>
      </section>
      <section className="border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-blue)]">Project Ledger</p>
              <h2 className="mt-3 text-3xl font-semibold">웹 밖에서도 이어온 제품과 도구들</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">
              회사 프로젝트 한 축만 보여주지 않고, 오픈소스 에이전트 도구, 모바일 앱, 네이티브 앱, 개발자 도구,
              게임 런타임까지 직접 다뤄온 범위를 정리했습니다.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projectHighlightsKo.map((project) => (
              <ProjectHighlightCard project={project} key={project.title} />
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-2 shadow-sm">
          {homeChangelogEntries.map((entry) => (
            <ChangelogEntry entry={entry} key={entry.title} labels={{ approach: '접근', result: '결과' }} />
          ))}
        </div>
      </section>
    </main>
  );
}

function ConsolePanel({
  eyebrow,
  title,
  description,
}: Readonly<{
  eyebrow: string;
  title: string;
  description: string;
}>) {
  return (
    <section className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--text-secondary)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-xl font-semibold">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
    </section>
  );
}

function Metric({ label, value }: Readonly<{ label: string; value: string }>) {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-secondary)]">{label}</p>
      <p className="mt-2 text-lg font-semibold">{value}</p>
    </div>
  );
}
