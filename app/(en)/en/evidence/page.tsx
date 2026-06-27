import { GuidePanel } from '@/components/guide-panel';
import { HiringFitPanel } from '@/components/hiring-fit-panel';
import { ImplementationEvidenceBoard } from '@/components/implementation-evidence-board';
import { SectionHeading } from '@/components/section-heading';
import { hiringFit, implementationEvidence } from '@/lib/data';

export const metadata = {
  title: 'Implementation Evidence',
  description: 'Representative product surfaces, front-end ownership, skill signals, and verification evidence.',
};

export default function EvidencePage() {
  return (
    <main className="page-shell">
      <SectionHeading
        eyebrow="Implementation Evidence"
        title="Evidence a hiring team can use to evaluate front-end depth"
        description="This page moves beyond project summaries. It shows the product surface, front-end role, technical signal, and verification evidence behind representative work."
      />
      <GuidePanel
        ariaLabel="How to read implementation evidence"
        items={[
          { title: 'Product surface', body: 'Look for the concrete UI, state model, output, or release boundary the work had to carry.' },
          { title: 'Front-end signal', body: 'Look for React, Next.js, TypeScript, state ownership, and runtime verification signals.' },
          { title: 'Verification evidence', body: 'Look for tests, builds, routes, generated output, and public-safe completion checks.' },
        ]}
      />
      <HiringFitPanel fit={hiringFit} locale="en" />
      <section className="mt-10">
        <ImplementationEvidenceBoard entries={implementationEvidence} locale="en" />
      </section>
    </main>
  );
}
