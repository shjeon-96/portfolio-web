import Link from 'next/link';
import { CaseStudyCard } from '@/components/case-study-card';
import { ChangelogEntry } from '@/components/changelog-entry';
import { caseStudiesKo, changelogEntriesKo, proofPointsKo } from '@/lib/data-ko';

export const metadata = {
  title: '한국어',
  description: 'React, Next.js, 제품 엔지니어링, 엔지니어링 체인지로그, AI 워크플로우 포트폴리오 한국어 버전.',
};

export default function KoreanHomePage() {
  return (
    <main>
      <section className="mx-auto grid min-h-[calc(100vh-73px)] w-full max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent-blue)]">
            Product Console Portfolio
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-balance">
            React/Next.js B2B Product Front-End Developer
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            복잡한 제품 인터페이스에서 에디터 상태, 런타임 동작, 배포 가능한 산출물이 같은 기준으로
            이어지도록 구조화합니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="rounded-md bg-[var(--text-primary)] px-4 py-2 text-sm font-semibold text-white" href="/ko/case-studies">
              케이스 스터디 보기
            </Link>
            <Link className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold" href="/ko/editor-prototype">
              프로토타입 써보기
            </Link>
            <Link className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold" href="/ko/changelog">
              체인지로그 읽기
            </Link>
            <a
              className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold"
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
            title="AST Editor Engine"
            description="비주얼 편집, 컴포넌트 Variant, 제품 상태 소유 경계를 구조화합니다. 라이트 프로토타입도 확인할 수 있습니다."
          />
          <ConsolePanel
            eyebrow="Recent Changelog"
            title="Export/Deploy Parity"
            description="런타임, 미리보기, 산출물 정합성을 공개 가능한 엔지니어링 기록으로 정리합니다."
          />
          <ConsolePanel
            eyebrow="AI Workflow"
            title="Issue -> Owner -> Patch -> Verify"
            description="AI 에이전트로 원인 후보를 좁히고 실제 코드 경로와 회귀 검증으로 판단합니다."
          />
        </aside>
      </section>
      <section className="border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-8 md:grid-cols-4">
          <Metric label="Positioning" value="B2B product FE" />
          <Metric label="Core system" value="Editor engine" />
          <Metric label="Evidence" value="Case studies" />
          <Metric label="Workflow" value="AI assisted" />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-blue)]">Case Studies</p>
            <h2 className="mt-3 text-3xl font-semibold">화면이 아니라 제품 시스템을 다룹니다</h2>
          </div>
          <Link className="text-sm font-semibold text-[var(--accent-blue)]" href="/ko/case-studies">
            전체 케이스 스터디 보기
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {caseStudiesKo.slice(0, 2).map((caseStudy) => (
            <CaseStudyCard caseStudy={caseStudy} cta="케이스 스터디 읽기" hrefPrefix="/ko/case-studies" key={caseStudy.slug} />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-2 shadow-sm">
          {changelogEntriesKo.slice(0, 3).map((entry) => (
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
