import { BadgeList, NumberMarker, Panel } from '@/components/ui';
import { cx, ds } from '@/lib/design-system';

type WorkflowStep = {
  title: string;
  description: string;
  tools: string[];
  artifact: string;
};

type SessionGroup = {
  title: string;
  description: string;
  items: string[];
  result: string;
};

type Signal = {
  label: string;
  value: string;
};

export function AiWorkflowMap({
  introEyebrow,
  introTitle,
  introDescription,
  signals,
  steps,
  sessionEyebrow,
  sessionTitle,
  sessionDescription,
  sessionGroups,
  outputLabel,
  sessionResultLabel,
}: Readonly<{
  introEyebrow: string;
  introTitle: string;
  introDescription: string;
  signals: Signal[];
  steps: WorkflowStep[];
  sessionEyebrow: string;
  sessionTitle: string;
  sessionDescription: string;
  sessionGroups: SessionGroup[];
  outputLabel: string;
  sessionResultLabel: string;
}>) {
  return (
    <>
      <Panel as="section" className="mt-10 overflow-hidden">
        <div className="grid border-b border-[var(--border)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-[var(--surface-strong)] p-6">
            <p className={ds.text.eyebrow}>{introEyebrow}</p>
            <h2 className="text-keep mt-4 text-2xl font-semibold">{introTitle}</h2>
            <p className={cx('mt-3', ds.text.bodySmall)}>{introDescription}</p>
          </div>
          <div className="grid divide-y divide-[var(--border)] md:grid-cols-3 md:divide-x md:divide-y-0">
            {signals.map((signal) => (
              <WorkflowSignal signal={signal} key={signal.label} />
            ))}
          </div>
        </div>

        <ol className="grid md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <WorkflowStage index={index} outputLabel={outputLabel} step={step} key={step.title} />
          ))}
        </ol>
      </Panel>

      <section className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className={ds.text.eyebrow}>{sessionEyebrow}</p>
          <h2 className="text-keep mt-3 text-3xl font-semibold">{sessionTitle}</h2>
          <p className={cx('mt-4', ds.text.bodySmall)}>{sessionDescription}</p>
        </div>
        <Panel className="divide-y divide-[var(--border)]">
          {sessionGroups.map((group) => (
            <WorkflowSessionGroup group={group} resultLabel={sessionResultLabel} key={group.title} />
          ))}
        </Panel>
      </section>
    </>
  );
}

function WorkflowSignal({ signal }: Readonly<{ signal: Signal }>) {
  return (
    <div className="p-5">
      <p className={ds.text.eyebrowMuted}>{signal.label}</p>
      <p className="mt-2 text-lg font-semibold">{signal.value}</p>
    </div>
  );
}

function WorkflowStage({
  index,
  outputLabel,
  step,
}: Readonly<{
  index: number;
  outputLabel: string;
  step: WorkflowStep;
}>) {
  return (
    <li className="relative border-t border-[var(--border)] p-5 md:border-r md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0">
      <div className="flex items-center gap-3 lg:block">
        <NumberMarker index={index} variant="inverse" />
        <h2 className="text-lg font-semibold lg:mt-5">{step.title}</h2>
      </div>
      <p className={cx('mt-3', ds.text.bodySmall)}>{step.description}</p>
      <div className="mt-5 border-t border-[var(--border)] pt-4">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-green)]">{outputLabel}</p>
        <p className={cx('mt-2', ds.text.primarySmall)}>{step.artifact}</p>
      </div>
      <BadgeList className="mt-4 gap-1.5" items={step.tools} itemClassName="rounded-sm" variant="muted" />
    </li>
  );
}

function WorkflowSessionGroup({ group, resultLabel }: Readonly<{ group: SessionGroup; resultLabel: string }>) {
  return (
    <div className="grid gap-4 p-5 md:grid-cols-[140px_1fr]">
      <div>
        <h3 className="font-semibold">{group.title}</h3>
        <p className={cx('mt-2', ds.text.bodySmall)}>{group.description}</p>
      </div>
      <div>
        <BadgeList itemClassName="px-3 py-1.5 text-sm" items={group.items} variant="strong" />
        <div className="mt-4 border-t border-[var(--border)] pt-3">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-green)]">{resultLabel}</p>
          <p className={cx('mt-2', ds.text.primarySmall)}>{group.result}</p>
        </div>
      </div>
    </div>
  );
}
