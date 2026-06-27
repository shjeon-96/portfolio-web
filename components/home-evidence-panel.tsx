type EvidenceItem = {
  label: string;
  title: string;
  description: string;
};

export function HomeEvidencePanel({
  kicker,
  title,
  summary,
  items,
}: Readonly<{
  kicker: string;
  title: string;
  summary: string;
  items: EvidenceItem[];
}>) {
  return (
    <aside className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
      <div className="border-b border-[var(--border)] pb-4">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-blue)]">{kicker}</p>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">{title}</h2>
        <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{summary}</p>
      </div>
      <div className="divide-y divide-[var(--border)]">
        {items.map((item, index) => (
          <section className="grid gap-3 py-4 sm:grid-cols-[32px_1fr]" key={item.label}>
            <span className="flex size-8 items-center justify-center rounded-md bg-[var(--surface-strong)] font-mono text-xs font-semibold text-[var(--text-muted)]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">{item.label}</p>
              <h3 className="mt-1 text-base font-semibold text-[var(--text-primary)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{item.description}</p>
            </div>
          </section>
        ))}
      </div>
    </aside>
  );
}
