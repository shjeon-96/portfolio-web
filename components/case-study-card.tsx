import Link from 'next/link';
import type { CaseStudy } from '@/lib/data';

export function CaseStudyCard({
  caseStudy,
  hrefPrefix = '/case-studies',
  cta = 'Read case study',
  labels = {
    proof: 'Work',
    verification: 'Check',
  },
}: Readonly<{
  caseStudy: CaseStudy;
  hrefPrefix?: string;
  cta?: string;
  labels?: {
    proof: string;
    verification: string;
  };
}>) {
  return (
    <article className="surface-panel h-full p-5 transition hover:border-[color-mix(in_srgb,var(--accent-blue)_32%,var(--border))]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="eyebrow">{caseStudy.label}</p>
          <h2 className="mt-3 text-xl font-semibold">{caseStudy.title}</h2>
        </div>
        <Link className="hidden text-sm font-semibold text-[var(--accent-blue)] sm:inline-flex" href={`${hrefPrefix}/${caseStudy.slug}`}>
          {cta}
        </Link>
      </div>
      <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{caseStudy.summary}</p>
      <dl className="mt-5 grid gap-4 border-y border-[var(--border)] py-4 text-sm md:grid-cols-2">
        <div>
          <dt className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-secondary)]">{labels.proof}</dt>
          <dd className="mt-1 text-[var(--text-primary)]">{caseStudy.publicProof[0]}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-secondary)]">{labels.verification}</dt>
          <dd className="mt-1 text-[var(--text-primary)]">{caseStudy.verificationEvidence[0]}</dd>
        </div>
      </dl>
      <div className="mt-5 flex flex-wrap gap-2">
        {caseStudy.stack.slice(0, 4).map((item) => (
          <span className="rounded-md border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--text-secondary)]" key={item}>
            {item}
          </span>
        ))}
      </div>
      <Link className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--accent-blue)] sm:hidden" href={`${hrefPrefix}/${caseStudy.slug}`}>
        {cta}
      </Link>
    </article>
  );
}
