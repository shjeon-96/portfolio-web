type ConsoleSignal = {
  label: string;
  value: string;
  tone: 'blue' | 'green' | 'amber';
};

const toneClassName: Record<ConsoleSignal['tone'], string> = {
  blue: 'border-[color-mix(in_srgb,var(--accent-blue)_34%,var(--border))] text-[var(--accent-blue)]',
  green: 'border-[color-mix(in_srgb,var(--accent-green)_34%,var(--border))] text-[var(--accent-green)]',
  amber: 'border-[color-mix(in_srgb,var(--accent-amber)_36%,var(--border))] text-[var(--accent-amber)]',
};

export function HomeConsoleVisual({
  kicker,
  title,
  subtitle,
  signals,
  processItems,
  footnote,
}: Readonly<{
  kicker: string;
  title: string;
  subtitle: string;
  signals: ConsoleSignal[];
  processItems: string[];
  footnote: string;
}>) {
  return (
    <aside className="hero-console">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">{kicker}</p>
          <h2 className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">{title}</h2>
        </div>
        <div className="grid size-12 place-items-center rounded-md border border-[var(--border)] bg-[var(--surface-strong)] font-mono text-xs font-semibold text-[var(--accent-blue)]">
          LIVE
        </div>
      </div>
      <div className="grid gap-3 p-5">
        <p className="text-sm leading-6 text-[var(--text-secondary)]">{subtitle}</p>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {signals.map((signal) => (
            <div className={`rounded-md border bg-[var(--surface-strong)] p-3 ${toneClassName[signal.tone]}`} key={signal.label}>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">{signal.label}</p>
              <p className="mt-2 text-sm font-semibold text-[var(--text-primary)]">{signal.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-2 grid gap-2 rounded-lg border border-[var(--border)] bg-[var(--background)] p-4">
          {processItems.map((item, index) => (
            <div className="grid grid-cols-[24px_1fr_auto] items-center gap-3 text-sm" key={item}>
              <span className="grid size-6 place-items-center rounded bg-[var(--surface)] font-mono text-[11px] text-[var(--text-muted)]">
                {index + 1}
              </span>
              <span className="font-medium text-[var(--text-primary)]">{item}</span>
              <span className="h-px w-14 bg-[var(--border)]" />
            </div>
          ))}
        </div>
        <p className="text-xs leading-5 text-[var(--text-muted)]">{footnote}</p>
      </div>
    </aside>
  );
}
