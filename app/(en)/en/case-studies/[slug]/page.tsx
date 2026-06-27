import { notFound } from 'next/navigation';
import { CaseStudyDiagram } from '@/components/case-study-diagram';
import { caseStudies, getCaseStudy } from '@/lib/data';

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return {
      title: 'Case Study',
    };
  }

  return {
    title: caseStudy.title,
    description: caseStudy.summary,
  };
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-blue)]">{caseStudy.label}</p>
      <h1 className="mt-3 text-4xl font-semibold leading-tight text-balance md:text-5xl">{caseStudy.title}</h1>
      <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">{caseStudy.summary}</p>
      <div className="mt-8 flex flex-wrap gap-2">
        {caseStudy.stack.map((item) => (
          <span className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm text-[var(--text-secondary)]" key={item}>
            {item}
          </span>
        ))}
      </div>

      <section className="mt-10 grid gap-4 md:grid-cols-3" aria-label="Case study summary">
        <SummaryPoint label="Changed" value={caseStudy.result} />
        <SummaryPoint label="Boundary" value={caseStudy.role} />
        <SummaryPoint label="Verified by" value={caseStudy.verification[0]} />
      </section>
      <CaseStudyDiagram caseStudy={caseStudy} />
      <section className="mt-12 grid gap-4">
        <DetailBlock title="Problem" tone="blue" body={caseStudy.problem} />
        <DetailBlock title="Role" tone="amber" body={caseStudy.role} />
        <DetailList title="Approach" tone="blue" items={caseStudy.approach} />
        <DetailBlock title="Result" tone="green" body={caseStudy.result} />
        <DetailList title="Verification" tone="green" items={caseStudy.verification} />
      </section>
    </main>
  );
}

function SummaryPoint({ label, value }: Readonly<{ label: string; value: string }>) {
  return (
    <article className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-blue)]">{label}</p>
      <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{value}</p>
    </article>
  );
}

function DetailBlock({
  title,
  body,
  tone,
}: Readonly<{
  title: string;
  body: string;
  tone: 'blue' | 'green' | 'amber';
}>) {
  return (
    <article className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
      <p className={`text-sm font-semibold uppercase tracking-[0.14em] ${toneClass(tone)}`}>{title}</p>
      <p className="mt-3 leading-7 text-[var(--text-secondary)]">{body}</p>
    </article>
  );
}

function DetailList({
  title,
  items,
  tone,
}: Readonly<{
  title: string;
  items: string[];
  tone: 'blue' | 'green' | 'amber';
}>) {
  return (
    <article className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
      <p className={`text-sm font-semibold uppercase tracking-[0.14em] ${toneClass(tone)}`}>{title}</p>
      <ul className="mt-3 space-y-3 leading-7 text-[var(--text-secondary)]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function toneClass(tone: 'blue' | 'green' | 'amber') {
  if (tone === 'green') {
    return 'text-[var(--accent-green)]';
  }
  if (tone === 'amber') {
    return 'text-[var(--accent-amber)]';
  }
  return 'text-[var(--accent-blue)]';
}
