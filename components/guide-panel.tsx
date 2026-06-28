import { MotionReveal } from '@/components/motion-reveal';
import { Panel } from '@/components/ui';
import { cx, ds } from '@/lib/design-system';

type GuideItem = {
  title: string;
  body: string;
};

export function GuidePanel({
  ariaLabel,
  headingLevel = 2,
  items,
}: Readonly<{
  ariaLabel: string;
  headingLevel?: 2 | 3 | 4;
  items: GuideItem[];
}>) {
  return (
    <MotionReveal delay={0.08}>
      <Panel as="section" className="mt-10 grid gap-4 p-5 md:grid-cols-3" aria-label={ariaLabel}>
        {items.map((item, index) => (
          <MotionReveal delay={index * 0.04} key={item.title}>
            <article>
              <GuideHeading level={headingLevel}>{item.title}</GuideHeading>
              <p className={cx('mt-2', ds.text.bodySmall)}>{item.body}</p>
            </article>
          </MotionReveal>
        ))}
      </Panel>
    </MotionReveal>
  );
}

function GuideHeading({ children, level }: Readonly<{ children: string; level: 2 | 3 | 4 }>) {
  const className = 'font-semibold';

  if (level === 3) {
    return <h3 className={className}>{children}</h3>;
  }

  if (level === 4) {
    return <h4 className={className}>{children}</h4>;
  }

  return <h2 className={className}>{children}</h2>;
}
