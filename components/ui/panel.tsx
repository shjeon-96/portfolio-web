import type { HTMLAttributes } from 'react';

import { cx, ds } from '@/lib/design-system';

type PanelElement = 'article' | 'aside' | 'div' | 'section';

export function Panel({
  as = 'div',
  className,
  ...props
}: Readonly<
  HTMLAttributes<HTMLElement> & {
    as?: PanelElement;
  }
>) {
  const Component = as;

  return <Component className={cx(ds.surface.panel, className)} {...props} />;
}
