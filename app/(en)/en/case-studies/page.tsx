import { CaseStudyCard } from '@/components/case-study-card';
import { SectionHeading } from '@/components/section-heading';
import { caseStudies } from '@/lib/data';

export const metadata = {
  title: 'Case Studies',
  description: 'Public-safe product engineering case studies for complex front-end systems.',
};

export default function CaseStudiesPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16">
      <SectionHeading
        eyebrow="Case Studies"
        title="Problem, approach, result, and verification"
        description="These studies anonymize private implementation details while keeping the engineering decisions, product constraints, and verification loops visible."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard caseStudy={caseStudy} hrefPrefix="/en/case-studies" key={caseStudy.slug} />
        ))}
      </div>
    </main>
  );
}
