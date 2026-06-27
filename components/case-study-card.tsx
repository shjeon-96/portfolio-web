import Link from 'next/link';
import type { CaseStudy } from '@/lib/data';

export function CaseStudyCard({
  caseStudy,
  hrefPrefix = '/case-studies',
  cta = 'Read case study',
}: Readonly<{
  caseStudy: CaseStudy;
  hrefPrefix?: string;
  cta?: string;
}>) {
  return (
    <article className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-blue)]">{caseStudy.label}</p>
      <h2 className="mt-3 text-xl font-semibold">{caseStudy.title}</h2>
      <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{caseStudy.summary}</p>
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
