import { NumberMarker, Panel } from '@/components/ui';
import { cx, ds } from '@/lib/design-system';

type EvidenceItem = {
  label: string;
  title: string;
  description: string;
};

export function HomeEvidencePanel({
  kicker,
  title,
  summary,
  items,
}: Readonly<{
  kicker: string;
  title: string;
  summary: string;
  items: EvidenceItem[];
}>) {
  return (
    <Panel as="aside" className="p-4">
      <div className="border-b border-[var(--border)] pb-3">
        <p className={ds.text.eyebrowAccent}>{kicker}</p>
        <h2 className="mt-2 text-xl font-semibold text-[var(--text-primary)]">{title}</h2>
        <p className={cx('mt-2', ds.text.bodyCompact)}>{summary}</p>
      </div>
      <div className="divide-y divide-[var(--border)]">
        {items.map((item, index) => (
          <section className="grid gap-3 py-3 sm:grid-cols-[32px_1fr]" key={item.label}>
            <NumberMarker index={index} />
            <div>
              <p className={ds.text.eyebrowMuted}>{item.label}</p>
              <h3 className="mt-1 text-base font-semibold text-[var(--text-primary)]">{item.title}</h3>
              <p className={cx('mt-1.5', ds.text.bodyCompact)}>{item.description}</p>
            </div>
          </section>
        ))}
      </div>
    </Panel>
  );
}
