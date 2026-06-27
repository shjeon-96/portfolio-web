import type { ProjectHighlight } from '@/lib/data';

export function ProjectHighlightCard({ project }: Readonly<{ project: ProjectHighlight }>) {
  const content = (
    <article className="h-full rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] p-5 shadow-sm transition hover:border-[color-mix(in_srgb,var(--accent-green)_28%,var(--border))] hover:shadow-[var(--shadow-panel)]">
      <div className="flex items-start justify-between gap-3">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-blue)]">{project.label}</p>
        <span className="text-xs font-semibold text-[var(--text-muted)]">Project</span>
      </div>
      <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{project.summary}</p>
      <p className="mt-4 border-l-2 border-[var(--accent-amber)] pl-3 text-sm font-semibold text-[var(--text-primary)]">{project.status}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span className="rounded-md border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--text-secondary)]" key={item}>
            {item}
          </span>
        ))}
      </div>
    </article>
  );

  if (!project.href) {
    return content;
  }

  return (
    <a href={project.href} rel="noreferrer" target="_blank">
      {content}
    </a>
  );
}
