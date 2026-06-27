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
    <main className="page-shell page-narrow">
      <p className="eyebrow">{caseStudy.label}</p>
      <h1 className="mt-3 text-4xl font-semibold leading-tight text-balance md:text-5xl">{caseStudy.title}</h1>
      <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">{caseStudy.summary}</p>
      <div className="mt-8 flex flex-wrap gap-2">
        {caseStudy.stack.map((item) => (
          <span className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm text-[var(--text-secondary)]" key={item}>
            {item}
          </span>
        ))}
      </div>
      {caseStudy.links.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-3">
          {caseStudy.links.map((link) => (
            <a
              className="inline-flex min-h-11 items-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--accent-blue)]"
              href={link.href}
              key={link.href}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              target={link.href.startsWith('http') ? '_blank' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}

      <section className="mt-10 grid gap-4 md:grid-cols-3" aria-label="케이스 스터디 요약">
        <SummaryPoint label="바뀐 점" value={caseStudy.result} />
        <SummaryPoint label="맡은 경계" value={caseStudy.role} />
        <SummaryPoint label="검증 기준" value={caseStudy.verification[0]} />
      </section>
      <CaseStudyDiagram caseStudy={caseStudy} locale="ko" />
      <section className="surface-panel mt-12 divide-y divide-[var(--border)]">
        <DetailBlock title="문제" tone="blue" body={caseStudy.problem} />
        <DetailBlock title="역할" tone="amber" body={caseStudy.role} />
        <DetailList title="접근" tone="blue" items={caseStudy.approach} />
        <DetailBlock title="결과" tone="green" body={caseStudy.result} />
        <DetailList title="드러나는 작업" tone="blue" items={caseStudy.publicProof} />
        <DetailList title="핵심 Trade-off" tone="amber" items={caseStudy.tradeOffs} />
        <DetailList title="검증" tone="green" items={caseStudy.verification} />
        <EvidenceList title="확인한 명령과 기록" items={caseStudy.verificationEvidence} />
      </section>
    </main>
  );
}

function SummaryPoint({ label, value }: Readonly<{ label: string; value: string }>) {
  return (
    <article className="surface-panel p-5">
      <p className="eyebrow">{label}</p>
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
    <article className="grid gap-3 p-6 md:grid-cols-[160px_1fr]">
      <p className={`font-mono text-sm font-semibold uppercase tracking-[0.14em] ${toneClass(tone)}`}>{title}</p>
      <p className="leading-7 text-[var(--text-secondary)]">{body}</p>
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
    <article className="grid gap-3 p-6 md:grid-cols-[160px_1fr]">
      <p className={`font-mono text-sm font-semibold uppercase tracking-[0.14em] ${toneClass(tone)}`}>{title}</p>
      <ul className="space-y-3 leading-7 text-[var(--text-secondary)]">
        {items.map((item) => (
          <li className="flex gap-3" key={item}>
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text-muted)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function EvidenceList({ title, items }: Readonly<{ title: string; items: string[] }>) {
  return (
    <article className="grid gap-3 p-6 md:grid-cols-[160px_1fr]">
      <p className="font-mono text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent-green)]">{title}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <code className="rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--text-primary)]" key={item}>
            {item}
          </code>
        ))}
      </div>
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
