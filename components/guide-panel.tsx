import { MotionReveal } from '@/components/motion-reveal';
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
    <MotionReveal delay={0.08}>
      <Panel as="section" className="mt-10 grid gap-4 p-5 md:grid-cols-3" aria-label={ariaLabel}>
        {items.map((item, index) => (
          <MotionReveal delay={index * 0.04} key={item.title}>
            <article>
              <h2 className="font-semibold">{item.title}</h2>
              <p className={cx('mt-2', ds.text.bodySmall)}>{item.body}</p>
            </article>
          </MotionReveal>
        ))}
      </Panel>
    </MotionReveal>
  );
}
