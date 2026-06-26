import { SectionHeading } from '@/components/section-heading';
import { SkillContextCard } from '@/components/skill-context-card';
import { skills } from '@/lib/data';

export const metadata = {
  title: 'Skills',
  description: 'Technology stack presented through the product contexts where each skill is used.',
};

export default function SkillsPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16">
      <SectionHeading
        eyebrow="Skills"
        title="Technology stack with product context"
        description="This page avoids a logo wall. Each technology group is tied to the product systems, workflows, or verification loops where it has been used."
      />
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {skills.map((skill) => (
          <SkillContextCard key={skill.group} skill={skill} />
        ))}
      </section>
    </main>
  );
}
