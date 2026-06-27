import { cx, ds } from '@/lib/design-system';

export function NumberMarker({
  className,
  index,
  variant = 'number',
}: Readonly<{
  className?: string;
  index: number;
  variant?: 'inverse' | 'number';
}>) {
  return <span className={cx(ds.marker[variant], className)}>{String(index + 1).padStart(2, '0')}</span>;
}
