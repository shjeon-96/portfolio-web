import { ActionLink, BadgeList, Panel } from '@/components/ui';
import type { ImplementationEvidence } from '@/lib/data';
import { getChangelogFocusHref } from '@/lib/changelog-focus';
import { cx, ds } from '@/lib/design-system';

export function ImplementationEvidenceBoard({
  entries,
  locale,
}: Readonly<{
  entries: ImplementationEvidence[];
  locale: 'en' | 'ko';
}>) {
  const labels = getLabels(locale);

  return (
    <div className="grid gap-4">
      {entries.map((entry) => {
        const link = getEvidenceLink(entry, locale);

        return (
          <Panel as="article" className="overflow-hidden" key={entry.title}>
            <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
              <EvidenceVisual entry={entry} locale={locale} />
              <div className="p-5">
                <p className={ds.text.eyebrow}>{entry.label}</p>
                <h2 className="mt-3 text-2xl font-semibold">{entry.title}</h2>
                <p className={cx('mt-3', ds.text.bodySmall)}>{entry.summary}</p>

                <div className="mt-5 grid gap-4 border-y border-[var(--border)] py-4 md:grid-cols-2">
                  <EvidenceField label={labels.surface} value={entry.surface} />
                  <EvidenceField label={labels.role} value={entry.role} />
                </div>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <p className={ds.text.eyebrowMuted}>{labels.signals}</p>
                    <BadgeList className="mt-3" items={entry.frontendSignals} variant="strong" />
                  </div>
                  <div>
                    <p className={ds.text.eyebrowMuted}>{labels.verification}</p>
                    <BadgeList className="mt-3" items={entry.verification} variant="muted" />
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-4 border-t border-[var(--border)] pt-4 md:flex-row md:items-center md:justify-between">
                  <p className={cx('max-w-2xl', ds.text.primarySmall)}>{entry.outcome}</p>
                  <ActionLink external={link.external} href={link.href} variant="compact">
                    {entry.link.label}
                  </ActionLink>
                </div>
              </div>
            </div>
          </Panel>
        );
      })}
    </div>
  );
}

function getEvidenceLink(entry: ImplementationEvidence, locale: 'en' | 'ko') {
  if (entry.link.type === 'external') {
    return { external: true, href: entry.link.href };
  }

  return { external: false, href: getChangelogFocusHref(locale, entry.link.focus) };
}

function EvidenceField({ label, value }: Readonly<{ label: string; value: string }>) {
  return (
    <div>
      <p className={ds.text.eyebrowMuted}>{label}</p>
      <p className={cx('mt-2', ds.text.bodySmall)}>{value}</p>
    </div>
  );
}

function EvidenceVisual({ entry, locale }: Readonly<{ entry: ImplementationEvidence; locale: 'en' | 'ko' }>) {
  return (
    <div className="border-b border-[var(--border)] bg-[var(--surface-strong)] p-5 lg:border-b-0 lg:border-r">
      <div className="mb-4 flex items-center justify-between">
        <p className={ds.text.eyebrowMuted}>{locale === 'ko' ? '구현 영역' : 'Implementation Surface'}</p>
        <span className="rounded-md bg-[var(--text-primary)] px-2 py-1 font-mono text-xs font-semibold text-white">
          {entry.visualKind}
        </span>
      </div>
      {entry.visualKind === 'editor' ? <EditorVisual /> : null}
      {entry.visualKind === 'mobile' ? <MobileVisual /> : null}
      {entry.visualKind === 'tooling' ? <ToolingVisual locale={locale} /> : null}
      {entry.visualKind === 'web' ? <WebVisual /> : null}
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
      role: '맡은 역할',
      signals: '프론트엔드 신호',
      surface: '담당 영역',
      verification: '검증 근거',
    };
  }

  return {
    role: 'Role',
    signals: 'Front-end signals',
    surface: 'Product surface',
    verification: 'Verification',
  };
}
