import { SectionHeading } from '@/components/section-heading';
import { ActionLink, Panel, TextLink } from '@/components/ui';
import { cx, ds } from '@/lib/design-system';
import { GITHUB_PROFILE_URL, PORTFOLIO_REPOSITORY_URL } from '@/lib/site-links';

export const metadata = {
  title: 'About',
  description: 'About Seunghun Jeon, product front-end working principles, focus areas, and public engineering evidence.',
};

export default function AboutPage() {
  return (
    <main className="page-shell page-narrow">
      <SectionHeading
        eyebrow="About"
        title="I align product state, release boundaries, and front-end delivery."
        description="I structure products where editor engines, operational tools, mobile platforms, and AI-assisted engineering workflows can easily drift across multiple sources of truth."
      />
      <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
        <Panel as="article" className="p-6">
          <p className={ds.text.eyebrow}>Profile</p>
          <div className="mt-4 space-y-5 text-copy">
            <p>
              I am a front-end developer focused on complex product interfaces. Recently, I have worked on an AST-based
              visual editor engine, component variants, canvas interactions, data binding, and export/deploy pipelines
              where edited state and generated output need to stay aligned.
            </p>
            <p>
              Before that, I built admin dashboards, AI-assisted review operations, payment and settlement workflows,
              realtime operational surfaces, and back-office migrations. I do not treat complex product UI as screen
              delivery alone; I work through state models, verification loops, and release boundaries together.
            </p>
          </div>
          <div className="mt-6 border-t border-[var(--border)] pt-5">
            <h2 className="font-semibold">Working principles</h2>
            <ul className={cx('mt-3 grid gap-3 md:grid-cols-3', ds.text.bodySmall)}>
              <li>Find the owning module and product boundary first.</li>
              <li>Move duplicated decisions into shared rules and checks.</li>
              <li>Keep public evidence useful without exposing private operations.</li>
            </ul>
          </div>
        </Panel>
        <Panel as="aside" className="p-6">
          <p className={ds.text.eyebrow}>Current focus</p>
          <ul className={cx('mt-4 space-y-3', ds.text.bodySmall)}>
            <li>B2B SaaS and product engineering</li>
            <li>Visual builders and operational tools</li>
            <li>Mobile release and native product boundaries</li>
            <li>Teams using AI agents as part of real engineering work</li>
          </ul>
          <div className="mt-6 border-t border-[var(--border)] pt-5">
            <h2 className="font-semibold">Evidence to review</h2>
            <ul className={cx('mt-3 space-y-3', ds.text.bodySmall)}>
              <li>
                <TextLink href="/en/evidence">
                  Representative implementation and verification evidence
                </TextLink>
              </li>
              <li>
                <TextLink external href="https://github.com/shjeon-96/codex-lsp-bridge">
                  Public repositories and reusable developer tooling
                </TextLink>
              </li>
              <li>
                <TextLink href="/en/changelog">
                  Monthly engineering changelog entries
                </TextLink>
              </li>
            </ul>
          </div>
          <div className="mt-6 border-t border-[var(--border)] pt-5">
            <h2 className="font-semibold">Links</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <ActionLink external href={GITHUB_PROFILE_URL} variant="primary">
                GitHub
              </ActionLink>
              <ActionLink external href={PORTFOLIO_REPOSITORY_URL}>
                Portfolio repository
              </ActionLink>
            </div>
          </div>
        </Panel>
      </section>
    </main>
  );
}
