import { MotionReveal } from '@/components/motion-reveal';
import { ActionLink, BadgeList, Panel } from '@/components/ui';
import type { ImplementationEvidence } from '@/lib/data';
import { getChangelogFocusHref } from '@/lib/changelog-focus';
import { cx, ds } from '@/lib/design-system';

export function ImplementationEvidenceBoard({
  entries,
  headingLevel = 2,
  locale,
}: Readonly<{
  entries: ImplementationEvidence[];
  headingLevel?: 2 | 3 | 4;
  locale: 'en' | 'ko';
}>) {
  const labels = getLabels(locale);

  return (
    <div className="grid gap-4">
      {entries.map((entry) => {
        const link = getEvidenceLink(entry, locale);

        return (
          <MotionReveal key={entry.title}>
            <Panel as="article" className="overflow-hidden">
              <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
                <EvidenceVisual entry={entry} labels={labels} locale={locale} />
                <div className="p-5">
                  <p className={ds.text.eyebrow}>{entry.label}</p>
                  <EvidenceHeading level={headingLevel}>{entry.title}</EvidenceHeading>
                  <EvidenceField className="mt-3" label={labels.problem} value={entry.summary} />

                  <div className="mt-5 grid gap-4 border-y border-[var(--border)] py-4 md:grid-cols-2">
                    <EvidenceField label={labels.surface} value={entry.surface} />
                    <EvidenceField label={labels.role} value={entry.role} />
                  </div>

                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    <div>
                      <p className={ds.text.eyebrowMuted}>{labels.approach}</p>
                      <BadgeList className="mt-3" items={entry.frontendSignals} variant="strong" />
                    </div>
                    <div>
                      <p className={ds.text.eyebrowMuted}>{labels.verification}</p>
                      <BadgeList className="mt-3" items={entry.verification} variant="muted" />
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-4 border-t border-[var(--border)] pt-4 md:flex-row md:items-center md:justify-between">
                    <div className="max-w-2xl">
                      <p className={ds.text.eyebrowMuted}>{labels.result}</p>
                      <p className={cx('mt-2', ds.text.primarySmall)}>{entry.outcome}</p>
                    </div>
                    <ActionLink external={link.external} href={link.href} variant="compact">
                      {entry.link.label}
                    </ActionLink>
                  </div>
                </div>
              </div>
            </Panel>
          </MotionReveal>
        );
      })}
    </div>
  );
}

function EvidenceHeading({ children, level }: Readonly<{ children: string; level: 2 | 3 | 4 }>) {
  const className = 'mt-3 text-2xl font-semibold';

  if (level === 3) {
    return <h3 className={className}>{children}</h3>;
  }

  if (level === 4) {
    return <h4 className={className}>{children}</h4>;
  }

  return <h2 className={className}>{children}</h2>;
}

function getEvidenceLink(entry: ImplementationEvidence, locale: 'en' | 'ko') {
  if (entry.link.type === 'external') {
    return { external: true, href: entry.link.href };
  }

  return { external: false, href: getChangelogFocusHref(locale, entry.link.focus) };
}

function EvidenceField({
  className,
  label,
  value,
}: Readonly<{
  className?: string;
  label: string;
  value: string;
}>) {
  return (
    <div className={className}>
      <p className={ds.text.eyebrowMuted}>{label}</p>
      <p className={cx('mt-2', ds.text.bodySmall)}>{value}</p>
    </div>
  );
}

function EvidenceVisual({
  entry,
  labels,
  locale,
}: Readonly<{ entry: ImplementationEvidence; labels: ReturnType<typeof getLabels>; locale: 'en' | 'ko' }>) {
  return (
    <div className="border-b border-[var(--border)] bg-[var(--surface-strong)] p-5 lg:border-b-0 lg:border-r">
      <div className="mb-4 flex items-center justify-between">
        <p className={ds.text.eyebrowMuted}>{locale === 'ko' ? '구현 영역' : 'Implementation Surface'}</p>
        <span className="rounded-md bg-[var(--text-primary)] px-2 py-1 font-mono text-xs font-semibold text-white">
          {entry.visualKind}
        </span>
      </div>
      {entry.visualKind === 'editor' ? <EditorVisual /> : null}
      {entry.visualKind === 'ops' ? <OpsVisual /> : null}
      {entry.visualKind === 'mobile' ? <MobileVisual /> : null}
      {entry.visualKind === 'tooling' ? <ToolingVisual locale={locale} /> : null}
      {entry.visualKind === 'web' ? <WebVisual /> : null}
      <div className="mt-4 rounded-md border border-[var(--border)] bg-[var(--surface)] p-4">
        <p className={ds.text.eyebrowMuted}>{labels.artifact}</p>
        <p className={cx('mt-2', ds.text.bodySmall)}>{entry.artifact.description}</p>
        <ActionLink className="mt-4" external={entry.artifact.external} href={entry.artifact.href} variant="compact">
          {entry.artifact.label}
        </ActionLink>
      </div>
    </div>
  );
}

function EditorVisual() {
  return (
    <div className="rounded-md border border-[var(--border)] bg-[var(--surface)]">
      <div className="flex items-center gap-2 border-b border-[var(--border)] px-3 py-2">
        <span className="h-2 w-14 rounded-full bg-[var(--accent-blue)]" />
        <span className="h-2 w-8 rounded-full bg-[var(--border)]" />
        <span className="ml-auto h-2 w-10 rounded-full bg-[var(--accent-green)]" />
      </div>
      <div className="grid min-h-52 grid-cols-[88px_1fr]">
        <div className="space-y-2 border-r border-[var(--border)] p-3">
          <span className="block h-3 rounded-sm bg-[var(--background)]" />
          <span className="block h-3 rounded-sm bg-[var(--background)]" />
          <span className="block h-14 rounded-sm bg-[color-mix(in_srgb,var(--accent-blue)_10%,var(--surface))]" />
          <span className="block h-3 rounded-sm bg-[var(--background)]" />
        </div>
        <div className="grid grid-rows-[1fr_auto] p-3">
          <div className="grid grid-cols-2 gap-3">
            <span className="rounded-md border border-[var(--border)] bg-[var(--surface-strong)]" />
            <span className="rounded-md border border-[var(--border)] bg-[var(--background)]" />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            <span className="h-7 rounded-sm bg-[var(--background)]" />
            <span className="h-7 rounded-sm bg-[var(--background)]" />
            <span className="h-7 rounded-sm bg-[color-mix(in_srgb,var(--accent-green)_14%,var(--surface))]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function OpsVisual() {
  return (
    <div className="rounded-md border border-[var(--border)] bg-[var(--surface)]">
      <div className="grid grid-cols-[120px_1fr] border-b border-[var(--border)]">
        <div className="space-y-2 border-r border-[var(--border)] p-3">
          <span className="block h-3 rounded-sm bg-[var(--text-primary)]" />
          <span className="block h-3 rounded-sm bg-[var(--border)]" />
          <span className="block h-3 rounded-sm bg-[var(--border)]" />
        </div>
        <div className="grid grid-cols-3 gap-2 p-3">
          <span className="h-10 rounded-md bg-[color-mix(in_srgb,var(--accent-green)_14%,var(--surface))]" />
          <span className="h-10 rounded-md bg-[var(--background)]" />
          <span className="h-10 rounded-md bg-[color-mix(in_srgb,var(--accent-blue)_10%,var(--surface))]" />
        </div>
      </div>
      <div className="grid gap-2 p-3">
        {['request', 'approval', 'settlement', 'notification'].map((item, index) => (
          <div className="grid grid-cols-[24px_1fr_56px] items-center gap-3 rounded-md bg-[var(--surface-strong)] px-3 py-2" key={item}>
            <span className="grid size-6 place-items-center rounded-sm bg-[var(--text-primary)] font-mono text-[10px] font-semibold text-white">
              {index + 1}
            </span>
            <span className="h-2 rounded-full bg-[var(--border)]" />
            <span className="h-5 rounded-sm bg-[color-mix(in_srgb,var(--accent-amber)_18%,var(--surface))]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileVisual() {
  return (
    <div className="mx-auto max-w-64 rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-3">
      <div className="mx-auto mb-3 h-1.5 w-14 rounded-full bg-[var(--border)]" />
      <div className="space-y-3 rounded-[16px] bg-[var(--background)] p-3">
        {['config', 'runtime', 'widget', 'store'].map((item, index) => (
          <div className="flex items-center gap-3 rounded-md bg-[var(--surface)] p-3" key={item}>
            <span className="grid size-7 place-items-center rounded-md bg-[var(--text-primary)] font-mono text-xs font-semibold text-white">
              {index + 1}
            </span>
            <span className="h-2 flex-1 rounded-full bg-[var(--border)]" />
            <span className="size-2 rounded-full bg-[var(--accent-green)]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function ToolingVisual({ locale }: Readonly<{ locale: 'en' | 'ko' }>) {
  const lines =
    locale === 'ko'
      ? ['진단: 오류 0개', '정의: 담당 소스 확인', '참조: 경로 12개 확인', '호버: 타입 기준 확인']
      : [
          'diagnostics: 0 errors',
          'definition: source owner found',
          'references: 12 paths scanned',
          'hover: typed contract available',
        ];

  return (
    <div className="rounded-md border border-[var(--border)] bg-[var(--text-primary)] p-4 text-white">
      <div className="mb-4 flex items-center gap-2">
        <span className="size-2 rounded-full bg-[var(--accent-amber)]" />
        <span className="size-2 rounded-full bg-[var(--accent-green)]" />
        <span className="size-2 rounded-full bg-[var(--accent-blue)]" />
      </div>
      <div className="space-y-3 font-mono text-xs">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
        <div className="mt-4 h-2 rounded-full bg-[color-mix(in_srgb,var(--accent-green)_48%,white)]" />
      </div>
    </div>
  );
}

function WebVisual() {
  return (
    <div className="rounded-md border border-[var(--border)] bg-[var(--surface)]">
      <div className="flex items-center gap-2 border-b border-[var(--border)] px-3 py-2">
        <span className="size-2 rounded-full bg-[var(--border)]" />
        <span className="size-2 rounded-full bg-[var(--border)]" />
        <span className="h-2 flex-1 rounded-full bg-[var(--background)]" />
      </div>
      <div className="grid gap-3 p-3 sm:grid-cols-[1fr_0.72fr]">
        <div className="space-y-3">
          <span className="block h-8 rounded-md bg-[color-mix(in_srgb,var(--accent-blue)_10%,var(--surface))]" />
          <span className="block h-20 rounded-md bg-[var(--background)]" />
          <span className="block h-10 rounded-md bg-[var(--surface-strong)]" />
        </div>
        <div className="space-y-2">
          <span className="block h-8 rounded-md bg-[var(--background)]" />
          <span className="block h-8 rounded-md bg-[var(--background)]" />
          <span className="block h-8 rounded-md bg-[color-mix(in_srgb,var(--accent-green)_12%,var(--surface))]" />
        </div>
      </div>
    </div>
  );
}

function getLabels(locale: 'en' | 'ko') {
  if (locale === 'ko') {
      return {
        approach: '접근',
        artifact: '공개 근거',
        problem: '문제',
        result: '결과',
        role: '맡은 역할',
      surface: '담당 영역',
      verification: '검증',
    };
  }

  return {
    approach: 'Approach',
    artifact: 'Public artifact',
    problem: 'Problem',
    result: 'Result',
    role: 'Role',
    surface: 'Product surface',
    verification: 'Verification',
  };
}
