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
    <article className="h-full rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--accent-blue)_32%,var(--border))] hover:shadow-[var(--shadow-panel)]">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-blue)]">{caseStudy.label}</p>
      <h2 className="mt-3 text-xl font-semibold">{caseStudy.title}</h2>
      <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{caseStudy.summary}</p>
      <dl className="mt-5 grid gap-3 border-y border-[var(--border)] bg-[var(--surface-strong)] px-3 py-4 text-sm">
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
      <Link className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--accent-blue)]" href={`${hrefPrefix}/${caseStudy.slug}`}>
        {cta}
      </Link>
    </article>
  );
}
