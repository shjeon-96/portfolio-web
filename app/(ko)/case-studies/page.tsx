import { CaseStudyCard } from '@/components/case-study-card';
import { SectionHeading } from '@/components/section-heading';
import { caseStudiesKo } from '@/lib/data-ko';

export const metadata = {
  title: '케이스 스터디',
  description: '복잡한 프론트엔드 제품 시스템에 대한 공개 가능한 제품 엔지니어링 케이스 스터디입니다.',
};

export default function KoreanCaseStudiesPage() {
  return (
    <main className="page-shell">
      <SectionHeading
        eyebrow="Case Studies"
        title="제품 복잡도를 어떻게 정리했는지 보여줍니다"
        description="각 사례는 프로젝트 소개가 아니라, 복잡도가 생긴 지점을 어떻게 정의하고 소유 경계와 검증 루프로 정리했는지 보여주는 기록입니다."
      />
      <section className="surface-panel mt-10 grid gap-4 p-5 md:grid-cols-3" aria-label="케이스 스터디 읽는 기준">
        <GuidePoint title="경계 정의" body="어떤 상태, 모듈, 산출물이 서로 충돌하거나 drift될 수 있었는지 봅니다." />
        <GuidePoint title="흐름 안정화" body="제품 흐름을 어떤 단위로 쪼개고 하나의 기준으로 묶었는지 봅니다." />
        <GuidePoint title="검증 가능성" body="변경 후 무엇으로 확인했고, 같은 문제가 돌아오지 않게 어떤 근거를 남겼는지 봅니다." />
      </section>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {caseStudiesKo.map((caseStudy) => (
          <CaseStudyCard
            caseStudy={caseStudy}
            cta="케이스 스터디 읽기"
            hrefPrefix="/case-studies"
            key={caseStudy.slug}
            labels={{ proof: '보여주는 역량', verification: '검증 근거' }}
          />
        ))}
      </div>
    </main>
  );
}

function GuidePoint({ title, body }: Readonly<{ title: string; body: string }>) {
  return (
    <article>
      <h2 className="font-semibold">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{body}</p>
    </article>
  );
}
