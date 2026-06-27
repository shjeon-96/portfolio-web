import { BadgeList, Panel } from '@/components/ui';
import type { HiringFit, HiringSignal } from '@/lib/data';
import { cx, ds } from '@/lib/design-system';

export function HiringFitPanel({
  fit,
  locale,
}: Readonly<{
  fit: HiringFit;
  locale: 'en' | 'ko';
}>) {
  const labels = getLabels(locale);

  return (
    <Panel as="section" className="mt-10 overflow-hidden">
      <div className="border-b border-[var(--border)] bg-[var(--surface-strong)] px-5 py-5 md:flex md:items-end md:justify-between md:gap-8">
        <div>
          <p className={ds.text.eyebrow}>{labels.eyebrow}</p>
          <h2 className="mt-2 text-2xl font-semibold">{labels.title}</h2>
        </div>
        <p className={cx('mt-3 max-w-2xl md:mt-0', ds.text.bodySmall)}>{fit.summary}</p>
      </div>
      <div className="grid divide-y divide-[var(--border)] lg:grid-cols-[1fr_0.72fr] lg:divide-x lg:divide-y-0">
        <SignalColumn label={labels.strongFit} signals={fit.strongFits} tone="strong" />
        <SignalColumn label={labels.cautionFit} signals={fit.cautionFits} tone="caution" />
      </div>
    </Panel>
  );
}

function SignalColumn({
  label,
  signals,
  tone,
}: Readonly<{
  label: string;
  signals: HiringSignal[];
  tone: 'caution' | 'strong';
}>) {
  return (
    <div className="p-5">
      <p className={tone === 'strong' ? ds.text.eyebrow : ds.text.eyebrowAmber}>{label}</p>
      <div className="mt-4 divide-y divide-[var(--border)]">
        {signals.map((signal) => (
          <article className="py-4 first:pt-0 last:pb-0" key={signal.title}>
            <h3 className="text-lg font-semibold">{signal.title}</h3>
            <p className={cx('mt-2', ds.text.bodySmall)}>{signal.fit}</p>
            <BadgeList className="mt-3" items={signal.evidence} variant={tone === 'strong' ? 'strong' : 'muted'} />
            <p className={cx('mt-3 border-l-2 border-[var(--border)] pl-3', ds.text.primarySmall)}>{signal.interviewProbe}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function getLabels(locale: 'en' | 'ko') {
  if (locale === 'ko') {
    return {
      cautionFit: '주의해서 볼 역할',
      eyebrow: '채용 판단',
      strongFit: '강하게 맞는 역할',
      title: '어떤 프론트엔드 역할에 맞는가',
    };
  }

  return {
    cautionFit: 'Evaluate Carefully',
    eyebrow: 'Hiring Signal',
    strongFit: 'Strong Fit',
    title: 'Where this front-end profile fits',
  };
}
