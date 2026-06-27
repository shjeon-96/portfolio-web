import { MotionReveal } from '@/components/motion-reveal';
import { cx, ds } from '@/lib/design-system';

export function SectionHeading({
  eyebrow,
  title,
  description,
}: Readonly<{
  eyebrow: string;
  title: string;
  description: string;
}>) {
  return (
    <MotionReveal className="max-w-3xl">
      <p className={ds.text.eyebrow}>{eyebrow}</p>
      <h1 className={ds.text.headingLg}>{title}</h1>
      <p className={cx('mt-5', ds.text.bodyLarge)}>{description}</p>
    </MotionReveal>
  );
}
