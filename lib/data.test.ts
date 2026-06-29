import { describe, expect, it } from 'vitest';

import {
  formatChangelogDate,
  getFeaturedChangelogEntries,
  groupChangelogEntriesByDate,
  sortChangelogEntriesByDateDesc,
  type ChangelogEntry,
} from '@/lib/data';

const entries = [
  createEntry('Older featured', '2026-05-12', true),
  createEntry('Newest', '2026-06-27', false),
  createEntry('Newest featured', '2026-06-01', true),
];

describe('changelog entry helpers', () => {
  it('sorts entries by date without mutating the caller-owned array', () => {
    const input = [...entries];

    expect(sortChangelogEntriesByDateDesc(input).map((entry) => entry.title)).toEqual([
      'Newest',
      'Newest featured',
      'Older featured',
    ]);
    expect(input.map((entry) => entry.title)).toEqual(['Older featured', 'Newest', 'Newest featured']);
  });

  it('selects featured entries after date ordering', () => {
    expect(getFeaturedChangelogEntries(entries, 1).map((entry) => entry.title)).toEqual(['Newest featured']);
  });

  it('groups entries by month without mutating grouped records in place', () => {
    const groupedEntries = groupChangelogEntriesByDate(entries);

    expect(groupedEntries).toEqual([
      {
        date: '2026-06',
        entries: [entries[1], entries[2]],
      },
      {
        date: '2026-05',
        entries: [entries[0]],
      },
    ]);
    expect(groupedEntries[0].entries).not.toBe(entries);
  });

  it('formats changelog months by locale', () => {
    expect(formatChangelogDate('2026-06-27', 'ko')).toBe('2026.06');
    expect(formatChangelogDate('2026-06-27', 'en')).toBe('Jun 2026');
  });
});

function createEntry(title: string, date: string, featured: boolean): ChangelogEntry {
  return {
    approach: ['Kept the public-safe summary focused'],
    category: 'portfolio-system',
    date,
    featured,
    problem: 'A changelog helper needed deterministic behavior.',
    result: 'The helper returns predictable entries.',
    stack: ['TypeScript'],
    title,
  };
}
