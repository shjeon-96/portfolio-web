import Link from 'next/link';
import type { MouseEventHandler, ReactNode } from 'react';

import { cx, ds, type ActionVariant } from '@/lib/design-system';
import { externalLinkProps } from '@/lib/external-link';

export function ActionLink({
  ariaLabel,
  children,
  className,
  external = false,
  href,
  onClick,
  title,
  variant = 'secondary',
}: Readonly<{
  ariaLabel?: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  title?: string;
  variant?: ActionVariant;
}>) {
  const actionClassName = cx(ds.action[variant], className);

  if (external) {
    return (
      <a {...externalLinkProps} aria-label={ariaLabel} className={actionClassName} href={href} onClick={onClick} title={title}>
        {children}
      </a>
    );
  }

  return (
    <Link aria-label={ariaLabel} className={actionClassName} href={href} onClick={onClick} title={title}>
      {children}
    </Link>
  );
}
