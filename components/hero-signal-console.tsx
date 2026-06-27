'use client';

import { AnimatePresence, motion, type Transition, useReducedMotion } from 'framer-motion';
import { CheckCircle2, MousePointer2, Rocket, Workflow } from 'lucide-react';
import { useMemo, useState } from 'react';

import { Badge, Panel } from '@/components/ui';
import { cx, ds } from '@/lib/design-system';

type Locale = 'en' | 'ko';
type ModeKey = 'builder' | 'ops' | 'release';

type ModeCopy = {
  checks: string[];
  contract: string;
  description: string;
  label: string;
  title: string;
  tokens: string[];
};

const modeCopy: Record<Locale, Record<ModeKey, ModeCopy>> = {
  ko: {
    builder: {
      checks: ['Variant 담당 범위 확인', '미리보기/Export 규칙 공유', '생성 HTML 회귀 검증'],
      contract: 'Editor state -> Preview -> Export/Deploy',
      description: '편집 상태, 런타임 해석, 생성 산출물이 같은 제품 규칙을 읽는지 확인합니다.',
      label: '빌더',
      title: '에디터 상태와 산출물 정합성',
      tokens: ['AST 모델', 'Variant', 'Data binding', 'Export'],
    },
    ops: {
      checks: ['승인 상태와 API 계약 정렬', '권한별 빈/실패 상태 확인', '마이그레이션 경계 검토'],
      contract: 'Workflow state -> API contract -> Operator action',
      description: '신청, 승인, 정산, 알림처럼 반복 운영되는 흐름을 제품 상태로 다룹니다.',
      label: '운영',
      title: 'B2B 콘솔과 업무 상태',
      tokens: ['Approval', 'Settlement', 'Permission', 'Migration'],
    },
    release: {
      checks: ['런타임 환경 확인', '스토어/배포 기준 연결', '스모크 근거 수집'],
      contract: 'Runtime config -> Release gate -> Verified output',
      description: '화면 구현이 릴리즈 설정, 배포 경로, 제출 준비와 분리되지 않게 묶습니다.',
      label: '릴리즈',
      title: '릴리즈 경계와 검증 루프',
      tokens: ['Runtime', 'Smoke', 'EAS', 'Vercel'],
    },
  },
  en: {
    builder: {
      checks: ['Variant ownership reviewed', 'Preview/export rule shared', 'Generated HTML regression checked'],
      contract: 'Editor state -> Preview -> Export/deploy',
      description: 'Edited state, runtime interpretation, and generated artifacts read the same product rule.',
      label: 'Builder',
      title: 'Editor state and output parity',
      tokens: ['AST model', 'Variant', 'Data binding', 'Export'],
    },
    ops: {
      checks: ['Approval state aligned to API contract', 'Permission states reviewed', 'Migration boundary checked'],
      contract: 'Workflow state -> API contract -> Operator action',
      description: 'Requests, approvals, settlements, and notifications are treated as product state.',
      label: 'Ops',
      title: 'B2B console workflow state',
      tokens: ['Approval', 'Settlement', 'Permission', 'Migration'],
    },
    release: {
      checks: ['Runtime environment checked', 'Store/deploy criteria connected', 'Smoke evidence captured'],
      contract: 'Runtime config -> Release gate -> Verified output',
      description: 'Screen delivery stays connected to release configuration, deployment paths, and submission readiness.',
      label: 'Release',
      title: 'Release boundary and verification loop',
      tokens: ['Runtime', 'Smoke', 'EAS', 'Vercel'],
    },
  },
};

const modeIcons = {
  builder: MousePointer2,
  ops: Workflow,
  release: Rocket,
} satisfies Record<ModeKey, typeof MousePointer2>;

const modeOrder: ModeKey[] = ['builder', 'ops', 'release'];

export function HeroSignalConsole({ locale }: Readonly<{ locale: Locale }>) {
  const [mode, setMode] = useState<ModeKey>('builder');
  const reduceMotion = useReducedMotion();
  const copy = modeCopy[locale][mode];
  const labels = getLabels(locale);
  const transition = useMemo<Transition>(
    () => (reduceMotion ? { duration: 0 } : { duration: 0.28, ease: 'easeOut' }),
    [reduceMotion],
  );
  const loopTransition = useMemo<Transition>(
    () => (reduceMotion ? { duration: 0 } : { duration: 2.8, ease: 'linear', repeat: Infinity }),
    [reduceMotion],
  );
  const pulseTransition = useMemo<Transition>(
    () => (reduceMotion ? { duration: 0 } : { duration: 1.8, ease: 'easeInOut', repeat: Infinity }),
    [reduceMotion],
  );

  return (
    <Panel as="aside" className="relative overflow-hidden">
      {!reduceMotion ? (
        <motion.span
          aria-hidden="true"
          animate={{ x: ['-100%', '100%'] }}
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-blue)] to-transparent opacity-70"
          transition={loopTransition}
        />
      ) : null}
      <div className="border-b border-[var(--border)] bg-[var(--surface-strong)] p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className={ds.text.eyebrowAccent}>{labels.kicker}</p>
            <h2 className="mt-2 text-xl font-semibold text-[var(--text-primary)]">{labels.title}</h2>
            <p className={cx('mt-2', ds.text.bodyCompact)}>{labels.summary}</p>
          </div>
          <Badge className="shrink-0 gap-1.5" variant="strong">
            <motion.span
              aria-hidden="true"
              animate={reduceMotion ? undefined : { opacity: [0.45, 1, 0.45], scale: [1, 1.45, 1] }}
              className="size-1.5 rounded-full bg-[var(--accent-green)]"
              transition={pulseTransition}
            />
            {labels.live}
          </Badge>
        </div>
        <div aria-label={labels.modeLabel} className="mt-4 grid gap-2 sm:grid-cols-3" role="group">
          {modeOrder.map((item) => {
            const Icon = modeIcons[item];
            const active = mode === item;

            return (
              <motion.button
                aria-pressed={active}
                className={cx(
                  'relative flex min-h-11 items-center justify-center gap-2 overflow-hidden rounded-md border px-3 text-sm font-semibold transition',
                  active
                    ? 'border-[var(--text-primary)] text-white'
                    : 'border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] hover:bg-[var(--background)]',
                )}
                key={item}
                onClick={() => setMode(item)}
                title={modeCopy[locale][item].title}
                type="button"
                whileHover={reduceMotion ? undefined : { y: -1 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              >
                {active ? (
                  <motion.span
                    className="absolute inset-0 bg-[var(--text-primary)]"
                    layoutId={`hero-console-active-${locale}`}
                    transition={transition}
                  />
                ) : null}
                <Icon aria-hidden="true" className="relative" size={16} />
                <span className="relative">{modeCopy[locale][item].label}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="p-4">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.96, y: reduceMotion ? 0 : -8 }}
            initial={{ opacity: 0.96, y: reduceMotion ? 0 : 8 }}
            key={mode}
            transition={transition}
          >
            <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="min-h-60 border-r-0 border-[var(--border)] lg:border-r lg:pr-4">
                <p className={ds.text.eyebrowMuted}>{labels.activeSurface}</p>
                <h3 className="mt-2 text-xl font-semibold text-[var(--text-primary)]">{copy.title}</h3>
                <p className={cx('mt-2', ds.text.bodyCompact)}>{copy.description}</p>

                <SignalFlow
                  contract={copy.contract}
                  label={labels.flow}
                  reduceMotion={Boolean(reduceMotion)}
                  transition={loopTransition}
                />

                <div className="mt-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className={ds.text.eyebrowMuted}>{labels.progress}</p>
                    <p className="font-mono text-sm font-semibold text-[var(--text-primary)]">
                      {labels.checkCount(copy.checks.length)}
                    </p>
                  </div>
                  <div className="relative mt-2 h-2 overflow-hidden rounded-full bg-[var(--background)]">
                    <motion.div
                      animate={{ width: '100%' }}
                      className="relative h-full overflow-hidden rounded-full bg-[var(--accent-green)]"
                      initial={false}
                      transition={transition}
                    >
                      {!reduceMotion ? (
                        <motion.span
                          aria-hidden="true"
                          animate={{ x: ['-120%', '260%'] }}
                          className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/45 to-transparent"
                          transition={loopTransition}
                        />
                      ) : null}
                    </motion.div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  {copy.tokens.map((token, index) => (
                    <motion.span
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-md border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2 text-xs font-semibold text-[var(--text-secondary)]"
                      initial={{ opacity: 0.96, y: reduceMotion ? 0 : 6 }}
                      key={token}
                      transition={{ ...transition, delay: reduceMotion ? 0 : index * 0.035 }}
                    >
                      {token}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="min-h-60">
                <div className="rounded-md border border-[var(--border)] bg-[var(--background)]">
                  <div className="flex items-center gap-2 border-b border-[var(--border)] px-3 py-2">
                    <motion.span
                      aria-hidden="true"
                      animate={reduceMotion ? undefined : { opacity: [0.45, 1, 0.45] }}
                      className="size-2 rounded-full bg-[var(--accent-green)]"
                      transition={pulseTransition}
                    />
                    <span className="h-2 w-20 rounded-full bg-[var(--border)]" />
                    <span className="ml-auto font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                      {labels.output}
                    </span>
                  </div>
                  <div className="p-3">
                    <div className="grid gap-2">
                      {copy.checks.map((check, index) => (
                        <motion.div
                          animate={{ opacity: 1, x: 0 }}
                          className="grid grid-cols-[22px_1fr] items-start gap-2 rounded-md bg-[var(--surface)] px-3 py-2"
                          initial={{ opacity: 0.96, x: reduceMotion ? 0 : 8 }}
                          key={check}
                          transition={{ ...transition, delay: reduceMotion ? 0 : index * 0.045 }}
                          whileHover={reduceMotion ? undefined : { x: 2 }}
                        >
                          <motion.span
                            animate={reduceMotion ? undefined : { scale: [1, 1.18, 1] }}
                            className="mt-0.5"
                            transition={getPulseTransition(index, Boolean(reduceMotion))}
                          >
                            <CheckCircle2 aria-hidden="true" className="text-[var(--accent-green)]" size={16} />
                          </motion.span>
                          <span className="text-sm leading-5 text-[var(--text-secondary)]">{check}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-3 border-t border-[var(--border)] pt-3">
                      <p className={ds.text.eyebrowMuted}>{labels.contract}</p>
                      <motion.p
                        animate={{ opacity: 1 }}
                        className="mt-2 font-mono text-xs leading-5 text-[var(--text-primary)]"
                        initial={{ opacity: 0.96 }}
                        transition={transition}
                      >
                        {copy.contract}
                      </motion.p>
                    </div>
                    <ActivityMeter checkCount={copy.checks.length} reduceMotion={Boolean(reduceMotion)} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Panel>
  );
}

function SignalFlow({
  contract,
  label,
  reduceMotion,
  transition,
}: Readonly<{
  contract: string;
  label: string;
  reduceMotion: boolean;
  transition: Transition;
}>) {
  const stages = contract.split(' -> ').slice(0, 3);

  return (
    <div className="mt-5">
      <p className={ds.text.eyebrowMuted}>{label}</p>
      <div className="relative mt-3 grid grid-cols-3 gap-2">
        <div className="absolute left-[14%] right-[14%] top-4 h-px overflow-hidden bg-[var(--border)]">
          {!reduceMotion ? (
            <motion.span
              aria-hidden="true"
              animate={{ x: ['-110%', '310%'] }}
              className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[var(--accent-blue)] to-transparent"
              transition={transition}
            />
          ) : null}
        </div>
        {stages.map((stage, index) => (
          <div className="relative grid gap-2 text-center" key={stage}>
            <motion.span
              animate={reduceMotion ? undefined : { boxShadow: ['0 0 0 0 rgb(31 102 229 / 0.0)', '0 0 0 6px rgb(31 102 229 / 0.10)', '0 0 0 0 rgb(31 102 229 / 0.0)'] }}
              className="mx-auto grid size-8 place-items-center rounded-md border border-[var(--border)] bg-[var(--surface)] font-mono text-xs font-semibold text-[var(--text-primary)]"
              transition={getPulseTransition(index, reduceMotion)}
            >
              {index + 1}
            </motion.span>
            <span className="min-w-0 truncate text-[11px] font-semibold text-[var(--text-secondary)]">{stage}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ActivityMeter({
  checkCount,
  reduceMotion,
}: Readonly<{
  checkCount: number;
  reduceMotion: boolean;
}>) {
  const totalBars = Math.max(checkCount, 1);

  return (
    <div className="mt-3 grid gap-1" style={{ gridTemplateColumns: `repeat(${totalBars}, minmax(0, 1fr))` }} aria-hidden="true">
      {Array.from({ length: totalBars }).map((_, index) => (
        <motion.span
          animate={reduceMotion ? undefined : { opacity: [0.45, 1, 0.45], scaleY: [0.62, 1, 0.62] }}
          className="h-5 origin-bottom rounded-sm bg-[var(--accent-blue)]"
          key={index}
          transition={getPulseTransition(index, reduceMotion)}
        />
      ))}
    </div>
  );
}

function getPulseTransition(index: number, reduceMotion: boolean): Transition {
  return reduceMotion
    ? { duration: 0 }
    : {
        delay: index * 0.14,
        duration: 1.8,
        ease: 'easeInOut',
        repeat: Infinity,
      };
}

function getLabels(locale: Locale) {
  if (locale === 'ko') {
    return {
      activeSurface: '선택된 제품 표면',
      checkCount: (count: number) => `검증 항목 ${count}개`,
      contract: '단일 기준',
      flow: '상태 흐름',
      kicker: '상태 콘솔',
      live: 'Live',
      modeLabel: '제품 표면 선택',
      output: 'output',
      progress: '검증 상태',
      summary: '모드를 바꾸면 제품 상태, 검증 항목, 산출물 기준이 함께 바뀝니다.',
      title: '정적인 소개 대신 동작하는 제품 상태',
    };
  }

  return {
    activeSurface: 'Active product surface',
    checkCount: (count: number) => `${count} verification checks`,
    contract: 'Single contract',
    flow: 'State flow',
    kicker: 'State Console',
    live: 'Live',
    modeLabel: 'Select product surface',
    output: 'output',
    progress: 'Verification state',
    summary: 'Switch modes to see product state, checks, and output contracts move together.',
    title: 'A live product-state surface',
  };
}
