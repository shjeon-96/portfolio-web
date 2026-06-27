import { ActionLink, BadgeList, Panel } from '@/components/ui';
import { getChangelogIndexHref, type ChangelogFocusState } from '@/lib/changelog-focus';
import { cx, ds } from '@/lib/design-system';

type Locale = 'en' | 'ko';

const labels = {
  en: {
    all: 'View all changelog entries',
    count: (count: number) => `${count} matching entries`,
    invalidBody: 'This changelog filter is not defined. Use one of the evidence links or return to the full changelog.',
    invalidTitle: 'Unknown evidence filter',
    prefix: 'Filtered Changelog',
  },
  ko: {
    all: '전체 체인지로그 보기',
    count: (count: number) => `관련 항목 ${count}개`,
    invalidBody: '정의되지 않은 체인지로그 필터입니다. 구현 근거 링크를 다시 선택하거나 전체 체인지로그로 돌아가세요.',
    invalidTitle: '알 수 없는 근거 필터',
    prefix: '필터된 체인지로그',
  },
};

export function ChangelogFocusPanel({
  focusState,
  locale,
  resultCount,
}: Readonly<{
  focusState: ChangelogFocusState;
  locale: Locale;
  resultCount: number;
}>) {
  if (focusState.kind === 'all') {
    return null;
  }

  const label = labels[locale];

  if (focusState.kind === 'invalid') {
    return (
      <Panel as="section" className="mt-8 border-[var(--accent-amber)] bg-[color-mix(in_srgb,var(--accent-amber)_8%,var(--surface))] p-5">
        <p className={ds.text.eyebrowAmber}>{label.prefix}</p>
        <h2 className="mt-2 text-xl font-semibold">{label.invalidTitle}</h2>
        <p className={cx('mt-2', ds.text.bodySmall)}>
          <span className="font-mono text-[var(--text-primary)]">focus={focusState.value}</span>
          {' '}
          {label.invalidBody}
        </p>
        <ActionLink className="mt-4" href={getChangelogIndexHref(locale)} variant="compact">
          {label.all}
        </ActionLink>
      </Panel>
    );
  }

  return (
    <Panel as="section" className="mt-8 p-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className={ds.text.eyebrowAccent}>{label.prefix}</p>
          <h2 className="mt-2 text-xl font-semibold">{focusState.rule.label[locale]}</h2>
          <p className={cx('mt-2 max-w-3xl', ds.text.bodySmall)}>{focusState.rule.description[locale]}</p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <span className="rounded-md border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2 text-sm font-semibold text-[var(--text-primary)]">
            {label.count(resultCount)}
          </span>
          <ActionLink href={getChangelogIndexHref(locale)} variant="compact">
            {label.all}
          </ActionLink>
        </div>
      </div>
      <BadgeList className="mt-4" items={focusState.rule.tags[locale]} variant="strong" />
    </Panel>
  );
}
