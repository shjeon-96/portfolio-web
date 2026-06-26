import { notFound } from 'next/navigation';
import { CaseStudyDiagram } from '@/components/case-study-diagram';
import { caseStudiesKo, getCaseStudyKo } from '@/lib/data-ko';

export function generateStaticParams() {
  return caseStudiesKo.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = getCaseStudyKo(slug);

  if (!caseStudy) {
    return {
      title: '케이스 스터디',
    };
  }

  return {
    title: caseStudy.title,
    description: caseStudy.summary,
  };
}

export default async function KoreanCaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = getCaseStudyKo(slug);

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

      <section className="mt-12 grid gap-4">
        <DetailBlock title="문제" tone="blue" body={caseStudy.problem} />
        <DetailBlock title="역할" tone="amber" body={caseStudy.role} />
        <DetailList title="접근" tone="blue" items={caseStudy.approach} />
        <DetailBlock title="결과" tone="green" body={caseStudy.result} />
        <DetailList title="검증" tone="green" items={caseStudy.verification} />
      </section>
      <CaseStudyDiagram caseStudy={caseStudy} locale="ko" />
    </main>
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
