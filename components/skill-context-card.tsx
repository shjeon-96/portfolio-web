import { MotionReveal } from '@/components/motion-reveal';
import { ActionLink, BadgeList, Panel } from '@/components/ui';
import type { SkillContext } from '@/lib/data';
import { cx, ds } from '@/lib/design-system';

export function SkillContextCard({ skill }: Readonly<{ skill: SkillContext }>) {
  return (
    <MotionReveal>
      <Panel as="article" className="p-5">
        <h2 className="text-xl font-semibold">{skill.group}</h2>
        <BadgeList className="mt-4" items={skill.tools} />
        <p className={cx('mt-4', ds.text.bodySmall)}>{skill.context}</p>
        <div className="mt-5 border-t border-[var(--border)] pt-4">
          <ActionLink href={skill.evidenceHref} variant="compact">
            {skill.evidenceLabel}
          </ActionLink>
        </div>
      </Panel>
    </MotionReveal>
  );
}
