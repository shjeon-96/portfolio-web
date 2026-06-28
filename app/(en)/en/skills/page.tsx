import { GuidePanel } from '@/components/guide-panel';
import { SectionHeading } from '@/components/section-heading';
import { SkillContextCard } from '@/components/skill-context-card';
import { skills } from '@/lib/data';
import { createPageMetadata } from '@/lib/page-metadata';

export const metadata = createPageMetadata({
  locale: 'en',
  routeId: 'skills',
  title: 'Skills',
  description: 'Technology stack presented through the product contexts where each skill is used.',
});

export default function SkillsPage() {
  return (
    <main className="page-shell">
      <SectionHeading
        eyebrow="Skills"
        title="Technology stack with product context"
        description="This page avoids a logo wall. Each technology group is tied to the product systems, workflows, or verification loops where it has been used."
      />
      <GuidePanel
        ariaLabel="How to read this skills page"
        items={[
          { title: 'Product context', body: 'Read each skill through the product problem it helped solve, not the tool name alone.' },
          { title: 'State and contracts', body: 'Look for complex UI, data flow, and output contracts that needed stable ownership.' },
          { title: 'Verification path', body: 'The stack is tied to tests, release gates, and deployment checks where possible.' },
        ]}
      />
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {skills.map((skill) => (
          <SkillContextCard key={skill.group} skill={skill} />
        ))}
      </section>
    </main>
  );
}
