import { CaseStudyCard } from '@/components/case-study-card';
import { SectionHeading } from '@/components/section-heading';
import { caseStudies } from '@/lib/data';

export const metadata = {
  title: 'Case Studies',
  description: 'Public-safe product engineering case studies for complex front-end systems.',
};

export default function CaseStudiesPage() {
  return (
    <main className="page-shell">
      <SectionHeading
        eyebrow="Case Studies"
        title="How product complexity was made easier to reason about"
        description="These are not project summaries. Each case shows where complexity appeared, how ownership was clarified, and what made the work verifiable."
      />
      <section className="surface-panel mt-10 grid gap-4 p-5 md:grid-cols-3" aria-label="How to read these case studies">
        <GuidePoint title="Boundary" body="What state, module, or output could drift or conflict across the product surface." />
        <GuidePoint title="Stabilization" body="How the workflow was split, owned, or tied back to one product rule." />
        <GuidePoint title="Verification" body="What evidence made the change reviewable after the implementation." />
      </section>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard
            caseStudy={caseStudy}
            hrefPrefix="/en/case-studies"
            key={caseStudy.slug}
            labels={{ proof: 'Shows', verification: 'Evidence' }}
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
