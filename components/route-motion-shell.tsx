'use client';

import { AnimatePresence, motion, type Transition, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { useMemo } from 'react';

type RouteMotionShellProps = {
  children: ReactNode;
};

export function RouteMotionShell({ children }: Readonly<RouteMotionShellProps>) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const transition = useMemo<Transition>(
    () => (reduceMotion ? { duration: 0 } : { duration: 0.28, ease: 'easeOut' }),
    [reduceMotion],
  );

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        className="relative min-h-[calc(100vh-9rem)] overflow-hidden"
        exit={reduceMotion ? undefined : { opacity: 0.96, y: -6 }}
        initial={false}
        key={pathname}
        transition={transition}
      >
        {!reduceMotion ? <RouteScanLine /> : null}
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function RouteScanLine() {
  return (
    <motion.span
      aria-hidden="true"
      animate={{ x: ['-110%', '110%'] }}
      className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-[var(--accent-green)] to-transparent opacity-60"
      transition={{
        duration: 1.15,
        ease: 'easeOut',
      }}
    />
  );
}
