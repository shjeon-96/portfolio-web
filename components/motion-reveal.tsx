'use client';

import { motion, type Transition, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useMemo } from 'react';

import { cx } from '@/lib/design-system';

export function MotionReveal({
  children,
  className,
  delay = 0,
}: Readonly<{
  children: ReactNode;
  className?: string;
  delay?: number;
}>) {
  const reduceMotion = useReducedMotion();
  const transition = useMemo<Transition>(
    () => ({
      delay: reduceMotion ? 0 : delay,
      duration: reduceMotion ? 0 : 0.34,
      ease: 'easeOut',
    }),
    [delay, reduceMotion],
  );

  return (
    <motion.div
      initial={false}
      transition={transition}
      viewport={{ amount: 0.18, once: true }}
      whileInView={reduceMotion ? undefined : { opacity: [0.96, 1], y: [8, 0] }}
      className={cx(className)}
    >
      {children}
    </motion.div>
  );
}
