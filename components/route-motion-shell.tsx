'use client';

import type { ReactNode } from 'react';

type RouteMotionShellProps = {
  children: ReactNode;
};

export function RouteMotionShell({ children }: Readonly<RouteMotionShellProps>) {
  return (
    <div className="relative min-h-[calc(100vh-9rem)] overflow-hidden scroll-mt-24" id="main-content" tabIndex={-1}>
      {children}
    </div>
  );
}
