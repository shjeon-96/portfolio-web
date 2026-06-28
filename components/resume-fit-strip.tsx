import { BadgeList, Panel } from '@/components/ui';
import type { HiringFit } from '@/lib/data';
import { cx, ds } from '@/lib/design-system';

export function ResumeFitStrip({
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
      <div className="grid divide-y divide-[var(--border)] lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {fit.strongFits.slice(0, 3).map((signal) => (
          <article className="p-5" key={signal.title}>
            <h3 className="text-lg font-semibold">{signal.title}</h3>
            <p className={cx('mt-2', ds.text.bodySmall)}>{signal.fit}</p>
            <BadgeList className="mt-4" items={signal.evidence} variant="strong" />
          </article>
        ))}
      </div>
    </Panel>
  );
}

function getLabels(locale: 'en' | 'ko') {
  if (locale === 'ko') {
    return {
      eyebrow: '지원 판단 신호',
      title: '면접에서 바로 검증할 수 있는 강한 영역',
    };
  }

  return {
    eyebrow: 'Hiring Signals',
    title: 'Strong areas to validate in an interview',
  };
}
