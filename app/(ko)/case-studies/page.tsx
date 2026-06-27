import { CaseStudyCard } from '@/components/case-study-card';
import { SectionHeading } from '@/components/section-heading';
import { caseStudiesKo } from '@/lib/data-ko';

export const metadata = {
  title: '케이스 스터디',
  description: '복잡한 프론트엔드 제품 시스템에 대한 공개 가능한 제품 엔지니어링 케이스 스터디입니다.',
};

export default function KoreanCaseStudiesPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16">
      <SectionHeading
        eyebrow="Case Studies"
        title="문제, 접근, 결과, 검증으로 설명합니다"
        description="비공개 구현 세부사항은 익명화하고, 제품 제약과 기술 판단, 검증 루프가 보이도록 정리했습니다."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {caseStudiesKo.map((caseStudy) => (
          <CaseStudyCard caseStudy={caseStudy} cta="케이스 스터디 읽기" hrefPrefix="/case-studies" key={caseStudy.slug} />
        ))}
      </div>
    </main>
  );
}
