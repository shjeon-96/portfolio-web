import { GuidePanel } from '@/components/guide-panel';
import { HiringFitPanel } from '@/components/hiring-fit-panel';
import { ImplementationEvidenceBoard } from '@/components/implementation-evidence-board';
import { LiveEvidenceConsole } from '@/components/live-evidence-console';
import { SectionHeading } from '@/components/section-heading';
import { hiringFit, implementationEvidence } from '@/lib/data';

export const metadata = {
  title: 'Case Studies',
  description: 'Representative product surfaces structured by problem, role, approach, result, and verification evidence.',
};

export default function EvidencePage() {
  return (
    <main className="page-shell">
      <SectionHeading
        eyebrow="Case Studies"
        title="Product surfaces and verification I have owned"
        description="This page moves beyond project summaries. It shows how I structure editor state, operational workflow state, output parity, and verification paths through Problem, Role, Approach, Result, and Verification."
      />
      <GuidePanel
        ariaLabel="How to read implementation evidence"
        items={[
          { title: 'Problem and role', body: 'Look for the builder, operations console, output, or release boundary the work had to carry.' },
          { title: 'Approach and result', body: 'Look for React, Next.js, TypeScript, state ownership, API contracts, and runtime verification signals.' },
          { title: 'Verification', body: 'Look for tests, builds, routes, generated output, and public-safe completion checks.' },
        ]}
      />
      <LiveEvidenceConsole locale="en" />
      <HiringFitPanel fit={hiringFit} locale="en" />
      <section className="mt-10">
        <ImplementationEvidenceBoard entries={implementationEvidence} locale="en" />
      </section>
    </main>
  );
}
