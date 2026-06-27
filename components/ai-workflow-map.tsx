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
      <section className="surface-panel mt-10 overflow-hidden">
        <div className="grid border-b border-[var(--border)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-[var(--surface-strong)] p-6">
            <p className="eyebrow">{introEyebrow}</p>
            <h2 className="text-keep mt-4 text-2xl font-semibold">{introTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{introDescription}</p>
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
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">{sessionEyebrow}</p>
          <h2 className="text-keep mt-3 text-3xl font-semibold">{sessionTitle}</h2>
          <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">{sessionDescription}</p>
        </div>
        <div className="surface-panel divide-y divide-[var(--border)]">
          {sessionGroups.map((group) => (
            <WorkflowSessionGroup group={group} resultLabel={sessionResultLabel} key={group.title} />
          ))}
        </div>
      </section>
    </>
  );
}

function WorkflowSignal({ signal }: Readonly<{ signal: Signal }>) {
  return (
    <div className="p-5">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">{signal.label}</p>
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
        <span className="grid size-9 shrink-0 place-items-center rounded-md bg-[var(--text-primary)] font-mono text-sm font-semibold text-white">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h2 className="text-lg font-semibold lg:mt-5">{step.title}</h2>
      </div>
      <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{step.description}</p>
      <div className="mt-5 border-t border-[var(--border)] pt-4">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-green)]">{outputLabel}</p>
        <p className="mt-2 text-sm leading-6 text-[var(--text-primary)]">{step.artifact}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {step.tools.map((tool) => (
          <span className="rounded-sm bg-[var(--background)] px-2 py-1 text-xs text-[var(--text-secondary)]" key={tool}>
            {tool}
          </span>
        ))}
      </div>
    </li>
  );
}

function WorkflowSessionGroup({ group, resultLabel }: Readonly<{ group: SessionGroup; resultLabel: string }>) {
  return (
    <div className="grid gap-4 p-5 md:grid-cols-[140px_1fr]">
      <div>
        <h3 className="font-semibold">{group.title}</h3>
        <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{group.description}</p>
      </div>
      <div>
        <div className="flex flex-wrap gap-2">
          {group.items.map((item) => (
            <span className="rounded-md border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1.5 text-sm text-[var(--text-secondary)]" key={item}>
              {item}
            </span>
          ))}
        </div>
        <div className="mt-4 border-t border-[var(--border)] pt-3">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-green)]">{resultLabel}</p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-primary)]">{group.result}</p>
        </div>
      </div>
    </div>
  );
}
