const proofPoints = [
  'AST editor engine',
  'Export/deploy parity',
  'Operational dashboards',
  'AI agent workflow',
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <section className="mx-auto grid min-h-screen w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent-blue)]">
            Product Console Portfolio
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-balance">
            React/Next.js B2B Product Front-End Developer
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            I build complex product interfaces where editor state, runtime behavior,
            and deployable artifacts must stay in sync.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {proofPoints.map((point) => (
              <span
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text-secondary)]"
                key={point}
              >
                {point}
              </span>
            ))}
          </div>
        </div>

        <aside className="grid gap-4">
          <ConsolePanel
            eyebrow="Current Focus"
            title="AST Editor Engine"
            description="Structured visual editing, component variants, and product state ownership."
          />
          <ConsolePanel
            eyebrow="Recent Changelog"
            title="Export/Deploy Parity"
            description="Public-safe engineering ledger for runtime, preview, and artifact consistency."
          />
          <ConsolePanel
            eyebrow="AI Workflow"
            title="Issue -> Owner -> Patch -> Verify"
            description="Agent-assisted diagnosis with code-path evidence and regression checks."
          />
        </aside>
      </section>
    </main>
  );
}

function ConsolePanel({
  eyebrow,
  title,
  description,
}: Readonly<{
  eyebrow: string;
  title: string;
  description: string;
}>) {
  return (
    <section className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--text-secondary)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-xl font-semibold">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
    </section>
  );
}

