'use client';

import { motion, type Transition, type Variants, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useMemo } from 'react';

import { cx, ds } from '@/lib/design-system';

type HeroIntroShellProps = {
  actions: ReactNode;
  badges: ReactNode;
  console: ReactNode;
  description: ReactNode;
  eyebrow: ReactNode;
  title: ReactNode;
};

export function HeroIntroShell({
  actions,
  badges,
  console,
  description,
  eyebrow,
  title,
}: Readonly<HeroIntroShellProps>) {
  const reduceMotion = useReducedMotion();
  const itemTransition = useMemo<Transition>(
    () => (reduceMotion ? { duration: 0 } : { duration: 0.48, ease: 'easeOut' }),
    [reduceMotion],
  );
  const containerVariants = useMemo<Variants>(
    () => ({
      hidden: {},
      show: {
        transition: {
          delayChildren: reduceMotion ? 0 : 0.08,
          staggerChildren: reduceMotion ? 0 : 0.08,
        },
      },
    }),
    [reduceMotion],
  );
  const itemVariants = useMemo<Variants>(
    () => ({
      hidden: {
        opacity: reduceMotion ? 1 : 0.96,
        y: reduceMotion ? 0 : 10,
      },
      show: {
        opacity: 1,
        transition: itemTransition,
        y: 0,
      },
    }),
    [itemTransition, reduceMotion],
  );

  return (
    <section
      className={cx(
        ds.layout.content,
        'relative grid w-full gap-10 overflow-hidden py-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:py-10',
      )}
    >
      {!reduceMotion ? <HeroDataRails /> : null}
      <motion.div
        animate="show"
        className="relative z-10"
        initial="hidden"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>{eyebrow}</motion.div>
        <motion.div variants={itemVariants}>{title}</motion.div>
        <motion.div variants={itemVariants}>{description}</motion.div>
        <motion.div variants={itemVariants}>{actions}</motion.div>
        <motion.div variants={itemVariants}>{badges}</motion.div>
      </motion.div>

      <motion.div
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
        }}
        className="relative z-10"
        initial={{
          opacity: reduceMotion ? 1 : 0.96,
          scale: reduceMotion ? 1 : 0.985,
          x: reduceMotion ? 0 : 12,
          y: reduceMotion ? 0 : 8,
        }}
        transition={reduceMotion ? { duration: 0 } : { delay: 0.24, duration: 0.52, ease: 'easeOut' }}
      >
        {console}
      </motion.div>
    </section>
  );
}

function HeroDataRails() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-5 top-6 hidden h-36 lg:block">
      {[0, 1, 2].map((index) => (
        <motion.span
          animate={{
            opacity: [0, 0.55, 0],
            x: ['-42%', '142%'],
          }}
          className="absolute left-0 h-px w-2/5 bg-gradient-to-r from-transparent via-[var(--accent-blue)] to-transparent"
          key={index}
          style={{ top: `${index * 42}px` }}
          transition={{
            delay: index * 0.34,
            duration: 3.8,
            ease: 'linear',
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}
