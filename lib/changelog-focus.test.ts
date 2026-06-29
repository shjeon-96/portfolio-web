import { describe, expect, it } from 'vitest';

import {
  getChangelogFocusHref,
  getChangelogFocusState,
  getVisibleChangelogEntries,
} from '@/lib/changelog-focus';
import type { ChangelogEntry } from '@/lib/data';

const entries = [
  createEntry('Editor work', 'editor-engine'),
  createEntry('Ops work', 'ops-platform'),
  createEntry('Mobile work', 'mobile-release'),
];

describe('changelog focus state', () => {
  it('returns all entries when no focus query is present', () => {
    const focusState = getChangelogFocusState(undefined);

    expect(focusState).toEqual({ kind: 'all' });
    expect(getVisibleChangelogEntries(entries, focusState)).toBe(entries);
  });

  it('filters entries through the canonical focus rule', () => {
    const focusState = getChangelogFocusState('editor');

    expect(focusState.kind).toBe('active');
    expect(getVisibleChangelogEntries(entries, focusState).map((entry) => entry.title)).toEqual(['Editor work']);
  });

  it('rejects unknown or repeated focus values', () => {
    const unknownFocusState = getChangelogFocusState('unknown');
    const repeatedFocusState = getChangelogFocusState(['editor', 'ops']);

    expect(unknownFocusState).toEqual({ kind: 'invalid', value: 'unknown' });
    expect(repeatedFocusState).toEqual({ kind: 'invalid', value: 'editor, ops' });
    expect(getVisibleChangelogEntries(entries, unknownFocusState)).toEqual([]);
  });

  it('builds localized focus links from the public route registry', () => {
    expect(getChangelogFocusHref('ko', 'ops')).toBe('/changelog?focus=ops');
    expect(getChangelogFocusHref('en', 'ops')).toBe('/en/changelog?focus=ops');
  });
});

function createEntry(title: string, category: ChangelogEntry['category']): ChangelogEntry {
  return {
    approach: ['Scoped the owner path'],
    category,
    date: '2026-06-27',
    problem: 'A public-safe changelog entry needed filtering.',
    result: 'The visible list follows the selected focus.',
    stack: ['TypeScript'],
    title,
  };
}
