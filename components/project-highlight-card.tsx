import { MotionReveal } from '@/components/motion-reveal';
import { BadgeList } from '@/components/ui';
import type { ProjectHighlight } from '@/lib/data';
import { ds } from '@/lib/design-system';
import { externalLinkProps } from '@/lib/external-link';

export function ProjectHighlightCard({
  locale = 'ko',
  project,
}: Readonly<{
  locale?: 'en' | 'ko';
  project: ProjectHighlight;
}>) {
  const projectLabel = locale === 'ko' ? '프로젝트' : 'Project';
  const linkLabel = locale === 'ko' ? `${project.title} 프로젝트 열기` : `Open ${project.title} project`;
  const content = (
    <MotionReveal>
      <article className="h-full border-t border-[var(--border)] py-5 transition hover:border-[color-mix(in_srgb,var(--accent-green)_28%,var(--border))]">
        <div className="flex items-start justify-between gap-3">
          <p className={ds.text.eyebrow}>{project.label}</p>
          <span className="text-xs font-semibold text-[var(--text-muted)]">{projectLabel}</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
        <p className={`mt-3 ${ds.text.bodySmall}`}>{project.summary}</p>
        <p className="mt-4 text-sm font-semibold text-[var(--text-primary)]">{project.status}</p>
        <BadgeList className="mt-4" items={project.stack} />
      </article>
    </MotionReveal>
  );

  if (!project.href) {
    return content;
  }

  return (
    <a {...externalLinkProps} aria-label={linkLabel} className="block h-full" href={project.href}>
      {content}
    </a>
  );
}
