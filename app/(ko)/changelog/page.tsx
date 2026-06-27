import { ChangelogEntry } from '@/components/changelog-entry';
import { SectionHeading } from '@/components/section-heading';
import { changelogEntriesKo } from '@/lib/data-ko';

export const metadata = {
  title: '엔지니어링 체인지로그',
  description: '문제, 접근, 결과 중심으로 재작성한 공개 가능한 엔지니어링 체인지로그입니다.',
};

export default function KoreanChangelogPage() {
  const priorityEntries = [
    'Agent LSP Bridge 릴리즈 계약',
    '모바일 릴리즈 게이트 시스템',
    'SwiftUI 제품 모듈 아키텍처',
    'Privacy-first 개발자 도구 제품 방향',
    'App Store Review 보조 도구화',
    'AI PRD 생성 제품 surface',
  ]
    .map((title) => changelogEntriesKo.find((entry) => entry.title === title))
    .filter((entry): entry is (typeof changelogEntriesKo)[number] => Boolean(entry));

  return (
    <main className="mx-auto max-w-7xl px-5 py-16">
      <SectionHeading
        eyebrow="Engineering Changelog"
        title="제품 엔지니어링 판단을 기록합니다"
        description="커밋 활동량을 보여주는 대신, 어떤 문제가 있었고 어떤 기준으로 고쳤으며 무엇을 검증하기 쉬워졌는지 정리합니다."
      />
      <section className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent-blue)]">Source handling</p>
        <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
          로컬 프로젝트와 GitHub 저장소 메타데이터를 공개 가능한 엔지니어링 기록으로 다시 정리합니다.
          공개 저장소는 직접 연결하고, private 제품은 아키텍처, 워크플로우, 검증 경계만 익명화해서 남깁니다.
        </p>
      </section>
      <section className="mt-8">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent-blue)]">Recent systems</p>
            <h2 className="mt-2 text-2xl font-semibold">한 코드베이스 밖으로 확장된 작업들</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-[var(--text-secondary)]">
            오픈소스 도구, 모바일 릴리즈, 네이티브 앱 아키텍처, 개발자 도구, AI 제품 surface를 함께 보여주는 기록입니다.
          </p>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {priorityEntries.map((entry) => (
            <article className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm" key={entry.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-secondary)]">{entry.category}</p>
              <h3 className="mt-3 text-lg font-semibold">{entry.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{entry.result}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mt-10 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-2 shadow-sm">
        {changelogEntriesKo.map((entry) => (
          <ChangelogEntry entry={entry} key={entry.title} labels={{ approach: '접근', result: '결과' }} />
        ))}
      </section>
    </main>
  );
}
