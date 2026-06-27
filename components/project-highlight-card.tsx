import { BadgeList } from '@/components/ui';
import type { ProjectHighlight } from '@/lib/data';
import { ds } from '@/lib/design-system';

export function ProjectHighlightCard({ project }: Readonly<{ project: ProjectHighlight }>) {
  const content = (
    <article className="h-full border-t border-[var(--border)] py-5 transition hover:border-[color-mix(in_srgb,var(--accent-green)_28%,var(--border))]">
      <div className="flex items-start justify-between gap-3">
        <p className={ds.text.eyebrow}>{project.label}</p>
        <span className="text-xs font-semibold text-[var(--text-muted)]">Project</span>
      </div>
      <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
      <p className={`mt-3 ${ds.text.bodySmall}`}>{project.summary}</p>
      <p className="mt-4 text-sm font-semibold text-[var(--text-primary)]">{project.status}</p>
      <BadgeList className="mt-4" items={project.stack} />
    </article>
  );

  if (!project.href) {
    return content;
  }

  return (
    <a aria-label={`${project.title} project link`} href={project.href} rel="noreferrer" target="_blank">
      {content}
    </a>
  );
}
