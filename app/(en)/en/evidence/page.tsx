import { GuidePanel } from '@/components/guide-panel';
import { HiringFitPanel } from '@/components/hiring-fit-panel';
import { ImplementationEvidenceBoard } from '@/components/implementation-evidence-board';
import { LiveEvidenceConsole } from '@/components/live-evidence-console';
import { SectionHeading } from '@/components/section-heading';
import { hiringFit, implementationEvidence } from '@/lib/data';
import { createPageMetadata } from '@/lib/page-metadata';

export const metadata = createPageMetadata({
  locale: 'en',
  routeId: 'evidence',
  title: 'Case Studies',
  description: 'Representative product surfaces structured by problem, role, approach, result, and verification evidence.',
});

export default function EvidencePage() {
  return (
    <main className="page-shell">
      <SectionHeading
        eyebrow="Case Studies"
        title="Product surfaces, ownership, and verification evidence"
        description="These case studies translate private and public work into concrete product problems: what surface I owned, which front-end rules had to stay aligned, and how the result was verified."
      />
      <GuidePanel
        ariaLabel="How to read implementation evidence"
        items={[
          { title: 'Product surface', body: 'Start with the builder, operations console, release path, or tooling boundary the work had to carry.' },
          { title: 'Ownership signal', body: 'Look for state ownership, API contracts, migration boundaries, generated output, and runtime configuration.' },
          { title: 'Verification path', body: 'Check how completion was proven through tests, builds, routes, generated artifacts, smoke evidence, or public repository checks.' },
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
