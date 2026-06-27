import { ChangelogEntry } from '@/components/changelog-entry';
import { SectionHeading } from '@/components/section-heading';
import { changelogEntriesKo } from '@/lib/data-ko';

export const metadata = {
  title: '엔지니어링 체인지로그',
  description: '문제, 접근, 결과 중심으로 재작성한 공개 가능한 엔지니어링 체인지로그입니다.',
};

export default function KoreanChangelogPage() {
  const priorityEntries = changelogEntriesKo.filter((entry) =>
    ['Export 런타임 정합성 규칙 정리', 'Variant 상태 소유 경계 정리', 'AI 에이전트 기반 원인 분석 루프'].includes(entry.title),
  );

  return (
    <main className="mx-auto max-w-7xl px-5 py-16">
      <SectionHeading
        eyebrow="Engineering Changelog"
        title="제품 엔지니어링 판단을 기록합니다"
        description="커밋 활동량을 보여주는 대신, 어떤 문제가 있었고 어떤 기준으로 고쳤으며 무엇을 검증하기 쉬워졌는지 정리합니다."
      />
      <section className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent-blue)]">Generated workflow</p>
        <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
          첫 체인지로그 묶음은 2026-04-01 이후 로컬 non-merge 커밋 2,084개를 추출해 여섯 개의 공개 가능한
          주제로 분류한 뒤 작성했습니다. 원문 커밋 제목, 해시, 비공개 참조, 내부 이슈 식별자는 로컬에만 둡니다.
        </p>
      </section>
      <section className="mt-8">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent-blue)]">Hiring signal</p>
            <h2 className="mt-2 text-2xl font-semibold">먼저 볼 엔지니어링 판단</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-[var(--text-secondary)]">
            에디터 소유 경계, 산출물 정합성, AI 기반 원인 분석을 가장 잘 보여주는 기록입니다.
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
