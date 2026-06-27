import type { AnchorHTMLAttributes } from 'react';

export const externalLinkProps = {
  rel: 'noopener noreferrer',
  target: '_blank',
} satisfies Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'rel' | 'target'>;
