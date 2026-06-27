import { Panel } from '@/components/ui';
import { cx, ds } from '@/lib/design-system';

type GuideItem = {
  title: string;
  body: string;
};

export function GuidePanel({
  ariaLabel,
  items,
}: Readonly<{
  ariaLabel: string;
  items: GuideItem[];
}>) {
  return (
    <Panel as="section" className="mt-10 grid gap-4 p-5 md:grid-cols-3" aria-label={ariaLabel}>
      {items.map((item) => (
        <article key={item.title}>
          <h2 className="font-semibold">{item.title}</h2>
          <p className={cx('mt-2', ds.text.bodySmall)}>{item.body}</p>
        </article>
      ))}
    </Panel>
  );
}
