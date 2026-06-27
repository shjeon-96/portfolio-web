import type { SkillContext } from '@/lib/data';

export function SkillContextCard({ skill }: Readonly<{ skill: SkillContext }>) {
  return (
    <article className="surface-panel p-5">
      <h2 className="text-xl font-semibold">{skill.group}</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {skill.tools.map((tool) => (
          <span className="rounded-md border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--text-secondary)]" key={tool}>
            {tool}
          </span>
        ))}
      </div>
      <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">{skill.context}</p>
    </article>
  );
}
