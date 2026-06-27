import type { ReactNode } from 'react';

import { cx, ds, type BadgeVariant } from '@/lib/design-system';

export function Badge({
  children,
  className,
  variant = 'surface',
}: Readonly<{
  children: ReactNode;
  className?: string;
  variant?: BadgeVariant;
}>) {
  return <span className={cx(ds.badge[variant], className)}>{children}</span>;
}

export function BadgeList({
  className,
  itemClassName,
  items,
  variant = 'neutral',
}: Readonly<{
  className?: string;
  itemClassName?: string;
  items: string[];
  variant?: BadgeVariant;
}>) {
  return (
    <div className={cx('flex flex-wrap gap-2', className)}>
      {items.map((item) => (
        <Badge className={itemClassName} key={item} variant={variant}>
          {item}
        </Badge>
      ))}
    </div>
  );
}
