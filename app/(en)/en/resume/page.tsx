import { ResumeFitStrip } from '@/components/resume-fit-strip';
import { SectionHeading } from '@/components/section-heading';
import { ActionLink, BadgeList, Panel } from '@/components/ui';
import { hiringFit, projectHighlights, skills } from '@/lib/data';
import { cx, ds } from '@/lib/design-system';
import { createPageMetadata } from '@/lib/page-metadata';
import { getRoutePath } from '@/lib/routes';
import { GITHUB_PROFILE_URL, PORTFOLIO_REPOSITORY_URL } from '@/lib/site-links';

export const metadata = createPageMetadata({
  locale: 'en',
  routeId: 'resume',
  title: 'Public Resume',
  description: 'Public resume for Seunghun Jeon, focused on product front-end work, public-safe evidence, and verification-heavy delivery.',
});

export default function ResumePage() {
  const featuredProjects = projectHighlights.filter((project) => project.featured).slice(0, 4);
  const evidenceHref = getRoutePath('evidence', 'en');

  return (
    <main className="page-shell page-narrow">
      <SectionHeading
        eyebrow="Public Resume"
        title="Product Front-End Engineer"
        description="I focus on keeping complex product state, operational workflows, deployable output, and verification criteria aligned to one product contract."
      />

      <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
        <Panel as="article" className="p-6">
          <p className={ds.text.eyebrow}>Summary</p>
          <div className={cx('mt-4 space-y-4', ds.text.bodySmall)}>
            <p>
              I have worked across no-code web builders, B2B operation consoles, and mobile release boundaries where state models and user-facing output must stay aligned.
            </p>
            <p>
              I treat delivery as more than screen implementation: API contracts, permission states, tests, route checks, and public-safety review are part of the completion bar.
            </p>
          </div>
          <div className="mt-6 border-t border-[var(--border)] pt-5">
            <p className={ds.text.eyebrowMuted}>Core Signals</p>
            <BadgeList className="mt-3" items={['Product front-end', 'State model', 'B2B console', 'Release verification', 'AI workflow']} variant="strong" />
          </div>
        </Panel>

        <Panel as="aside" className="p-6">
          <p className={ds.text.eyebrow}>Links</p>
          <div className="mt-4 grid gap-3">
            <ActionLink external href={GITHUB_PROFILE_URL} variant="primary">
              GitHub
            </ActionLink>
            <ActionLink external href={PORTFOLIO_REPOSITORY_URL}>
              Portfolio repository
            </ActionLink>
            <ActionLink href={evidenceHref}>
              Review case studies
            </ActionLink>
          </div>
        </Panel>
      </section>

      <ResumeFitStrip fit={hiringFit} locale="en" />

      <section className="mt-10">
        <div className={ds.layout.sectionHeader}>
          <div>
            <p className={ds.text.eyebrowAccent}>Representative Evidence</p>
            <h2 className="mt-2 text-2xl font-semibold">Public project signals</h2>
          </div>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <Panel as="article" className="p-5" key={project.title}>
              <p className={ds.text.eyebrowMuted}>{project.label}</p>
              <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
              <p className={cx('mt-2', ds.text.bodySmall)}>{project.summary}</p>
              <BadgeList className="mt-4" items={project.stack} />
            </Panel>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <p className={ds.text.eyebrowAccent}>Skill Context</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {skills.map((skill) => (
            <Panel as="article" className="p-5" key={skill.group}>
              <h3 className="text-lg font-semibold">{skill.group}</h3>
              <BadgeList className="mt-3" items={skill.tools} variant="muted" />
              <p className={cx('mt-3', ds.text.bodySmall)}>{skill.context}</p>
            </Panel>
          ))}
        </div>
      </section>
    </main>
  );
}
