import { AiWorkflowMap } from '@/components/ai-workflow-map';
import { SectionHeading } from '@/components/section-heading';
import { aiWorkflowSteps } from '@/lib/data';

export const metadata = {
  title: 'AI Workflow',
  description: 'A public-safe workflow distilled from Codex sessions: request intake, repo scan, evidence capture, verification, and release records.',
};

const sessionGroups = [
  {
    title: 'Issue execution',
    description: 'Sessions that start from a PRD or GitHub issue and narrow the implementation scope against the repo.',
    items: ['PRD review', 'GitHub issue', 'repo scan', 'commit/push'],
    result: 'The requirement, code change, and verification result land as a traceable commit or issue state.',
  },
  {
    title: 'Screen audit',
    description: 'Sessions that inspect portfolio and product surfaces through screenshots, DOM checks, and route output.',
    items: ['Playwright', 'screenshots', 'DOM checks', 'public safety'],
    result: 'Layout, link, public-safety, and responsive issues are fixed with visible evidence.',
  },
  {
    title: 'Release debug',
    description: 'Sessions that separate build or runtime failures from external console and store-boundary work.',
    items: ['build logs', 'runtime logs', 'store boundary', 'external console'],
    result: 'Repo-owned work and manual console work are split into clear completion criteria.',
  },
];

export default function AiWorkflowPage() {
  return (
    <main className="page-shell">
      <SectionHeading
        eyebrow="AI Workflow"
        title="An AI workflow for closing requests with verified changes"
        description="This page rewrites repeated Codex session patterns into a public-safe workflow: PRD or issue intake, repo context scan, screen or log evidence, narrow patch, verification, then commit, deployment, or notes."
      />

      <AiWorkflowMap
        introEyebrow="Operating model"
        introTitle="The workflow shows up in how sessions close"
        introDescription="The important signal is not that AI was used, but which evidence confirmed the request and what traceable finish the session left behind."
        signals={[
          { label: 'Input', value: 'PRD/issue/log' },
          { label: 'Codex loop', value: 'scan/patch/verify' },
          { label: 'Output', value: 'commit/deploy/note' },
        ]}
        steps={aiWorkflowSteps}
        sessionEyebrow="Observed sessions"
        sessionTitle="Grouped by repeated session types"
        sessionDescription="Portfolio, mobile release, and screen-audit sessions are rewritten here as public-safe workflow patterns instead of raw transcripts."
        sessionGroups={sessionGroups}
        outputLabel="Output"
        sessionResultLabel="Result"
      />

      <section className="surface-panel mt-10 p-6">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent-amber)]">Boundaries</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Boundary title="No blind patches" body="Agent suggestions are checked against the actual owner path before implementation." />
          <Boundary title="No hidden alternate behavior" body="The preferred fix is the canonical contract, not a permissive alternate branch." />
          <Boundary title="Verification first" body="Generated output, tests, and user-visible behavior decide whether the change is done." />
        </div>
      </section>
    </main>
  );
}

function Boundary({ title, body }: Readonly<{ title: string; body: string }>) {
  return (
    <div className="rounded-lg bg-[var(--surface-strong)] p-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{body}</p>
    </div>
  );
}
