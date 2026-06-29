import { describe, expect, it } from 'vitest';

import { implementationEvidenceKo, skillsKo } from '@/lib/data-ko';

describe('Korean localized data', () => {
  it('localizes internal evidence links to Korean public routes', () => {
    const internalHrefs = implementationEvidenceKo
      .map((entry) => entry.artifact.href)
      .filter((href) => href.startsWith('/'));

    expect(internalHrefs.length).toBeGreaterThan(0);
    expect(internalHrefs.every((href) => !href.startsWith('/en'))).toBe(true);
  });

  it('localizes skill evidence links to Korean public routes', () => {
    const internalHrefs = skillsKo
      .map((skill) => skill.evidenceHref)
      .filter((href) => href.startsWith('/'));

    expect(internalHrefs.length).toBeGreaterThan(0);
    expect(internalHrefs.every((href) => !href.startsWith('/en'))).toBe(true);
  });
});
