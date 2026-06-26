import { ChangelogEntry } from '@/components/changelog-entry';
import { SectionHeading } from '@/components/section-heading';
import { changelogEntriesKo } from '@/lib/data-ko';

export const metadata = {
  title: '엔지니어링 체인지로그',
  description: '문제, 접근, 결과 중심으로 재작성한 공개 가능한 엔지니어링 체인지로그입니다.',
};

export default function KoreanChangelogPage() {
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
      <section className="mt-10 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-2 shadow-sm">
        {changelogEntriesKo.map((entry) => (
          <ChangelogEntry entry={entry} key={entry.title} labels={{ approach: '접근', result: '결과' }} />
        ))}
      </section>
    </main>
  );
}
