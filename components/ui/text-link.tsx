import Link from 'next/link';
import type { ReactNode } from 'react';

import { cx } from '@/lib/design-system';

const textLinkClassName = 'font-medium text-[var(--text-primary)] transition hover:text-[var(--accent-blue)]';

export function TextLink({
  children,
  className,
  external = false,
  href,
}: Readonly<{
  children: ReactNode;
  className?: string;
  external?: boolean;
  href: string;
}>) {
  const linkClassName = cx(textLinkClassName, className);

  if (external) {
    return (
      <a className={linkClassName} href={href} rel="noreferrer" target="_blank">
        {children}
      </a>
    );
  }

  return (
    <Link className={linkClassName} href={href}>
      {children}
    </Link>
  );
}
