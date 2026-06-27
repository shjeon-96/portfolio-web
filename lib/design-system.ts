export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export const ds = {
  action: {
    primary:
      'inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--text-primary)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[color-mix(in_srgb,var(--text-primary)_86%,var(--accent-blue))]',
    secondary:
      'inline-flex min-h-11 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[var(--surface-strong)]',
    compact:
      'inline-flex min-h-10 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[var(--surface-strong)]',
    subtle:
      'inline-flex min-h-11 items-center text-sm font-semibold text-[var(--accent-blue)] transition hover:text-[color-mix(in_srgb,var(--accent-blue)_78%,var(--text-primary))]',
    icon:
      'grid size-11 place-items-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] transition hover:bg-[var(--surface-strong)]',
  },
  badge: {
    neutral: 'inline-flex items-center rounded-md border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--text-secondary)]',
    surface:
      'inline-flex items-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-xs text-[var(--text-secondary)]',
    strong:
      'inline-flex items-center rounded-md border border-[var(--border)] bg-[var(--surface-strong)] px-2.5 py-1 text-xs text-[var(--text-secondary)]',
    muted: 'inline-flex items-center rounded-md bg-[var(--background)] px-2 py-1 text-xs text-[var(--text-secondary)]',
    pill:
      'inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text-secondary)]',
  },
  layout: {
    content: 'mx-auto max-w-7xl px-5',
    pageShell: 'page-shell',
    pageNarrow: 'page-narrow',
    sectionBand: 'border-y border-[var(--border)] bg-[var(--surface)]',
    sectionHeader: 'flex flex-col justify-between gap-4 md:flex-row md:items-end',
  },
  marker: {
    bullet: 'mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text-muted)]',
    inverse:
      'grid size-9 shrink-0 place-items-center rounded-md bg-[var(--text-primary)] font-mono text-sm font-semibold text-white',
    number:
      'flex size-8 items-center justify-center rounded-md bg-[var(--surface-strong)] font-mono text-xs font-semibold text-[var(--text-muted)]',
  },
  surface: {
    panel: 'surface-panel',
    panelStrong: 'surface-panel bg-[var(--surface-strong)]',
    rowDivider: 'border-t border-[var(--border)]',
  },
  text: {
    bodyCompact: 'text-sm leading-5 text-[var(--text-secondary)]',
    bodyLarge: 'text-lg leading-8 text-[var(--text-secondary)]',
    bodySmall: 'text-sm leading-6 text-[var(--text-secondary)]',
    eyebrow: 'eyebrow',
    eyebrowAccent: 'text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-blue)]',
    eyebrowAmber: 'font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent-amber)]',
    eyebrowMuted: 'font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]',
    headingLg: 'text-keep mt-3 text-4xl font-semibold leading-tight text-balance md:text-5xl',
    headingMd: 'text-keep text-3xl font-semibold',
    headingSm: 'text-lg font-semibold',
    primarySmall: 'text-sm leading-6 text-[var(--text-primary)]',
  },
};

export type ActionVariant = keyof typeof ds.action;
export type BadgeVariant = keyof typeof ds.badge;
