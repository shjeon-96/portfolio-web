import type { ChangelogEntry, ChangelogFocusKey } from '@/lib/data';

type Locale = 'en' | 'ko';
type ChangelogCategory = ChangelogEntry['category'];

type ChangelogFocusRule = {
  categories: ChangelogCategory[];
  description: Record<Locale, string>;
  label: Record<Locale, string>;
  tags: Record<Locale, string[]>;
};

export type ChangelogFocusState =
  | {
      kind: 'all';
    }
  | {
      kind: 'active';
      key: ChangelogFocusKey;
      rule: ChangelogFocusRule;
    }
  | {
      kind: 'invalid';
      value: string;
    };

export const changelogFocusRules: Record<ChangelogFocusKey, ChangelogFocusRule> = {
  editor: {
    categories: ['editor-engine', 'export-deploy', 'testing-ci', 'performance'],
    description: {
      en: 'Filtered to entries that support the editor-state, output-parity, regression, and performance story.',
      ko: '에디터 상태, 결과물 일관성, 회귀 검증, 성능 근거를 뒷받침하는 항목만 모았습니다.',
    },
    label: {
      en: 'Editor Evidence',
      ko: '에디터 근거',
    },
    tags: {
      en: ['editor engine', 'export/deploy', 'regression', 'performance'],
      ko: ['에디터 엔진', '내보내기/배포', '회귀 검증', '성능'],
    },
  },
  'mobile-release': {
    categories: ['mobile-release', 'native-product', 'app-review-tooling'],
    description: {
      en: 'Filtered to mobile product entries where UI delivery, native configuration, store review, and release evidence move together.',
      ko: 'UI 구현, 네이티브 설정, 스토어 검토, 릴리즈 근거가 함께 움직이는 모바일 제품 항목만 모았습니다.',
    },
    label: {
      en: 'Mobile Release Evidence',
      ko: '모바일 릴리즈 근거',
    },
    tags: {
      en: ['mobile release', 'native product', 'store review'],
      ko: ['모바일 릴리즈', '네이티브 제품', '스토어 검토'],
    },
  },
};

export function getChangelogFocusHref(locale: Locale, focus: ChangelogFocusKey) {
  const pathname = locale === 'ko' ? '/changelog' : '/en/changelog';

  return `${pathname}?focus=${focus}`;
}

export function getChangelogIndexHref(locale: Locale) {
  return locale === 'ko' ? '/changelog' : '/en/changelog';
}

export function getChangelogFocusState(focus: string | string[] | undefined): ChangelogFocusState {
  if (focus === undefined) {
    return { kind: 'all' };
  }

  if (Array.isArray(focus)) {
    return { kind: 'invalid', value: focus.join(', ') };
  }

  if (isChangelogFocusKey(focus)) {
    return { kind: 'active', key: focus, rule: changelogFocusRules[focus] };
  }

  return { kind: 'invalid', value: focus };
}

export function getVisibleChangelogEntries(entries: ChangelogEntry[], focusState: ChangelogFocusState) {
  if (focusState.kind === 'all') {
    return entries;
  }

  if (focusState.kind === 'invalid') {
    return [];
  }

  return entries.filter((entry) => focusState.rule.categories.includes(entry.category));
}

function isChangelogFocusKey(value: string): value is ChangelogFocusKey {
  return value in changelogFocusRules;
}
