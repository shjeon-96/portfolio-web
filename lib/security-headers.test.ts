import { describe, expect, it } from 'vitest';

import securityHeaders from '@/lib/security-headers.json';

describe('security headers', () => {
  it('keeps required browser security policies in the canonical registry', () => {
    const headers = new Map(securityHeaders.map((header) => [header.key, header.value]));

    expect(headers.get('Content-Security-Policy')).toContain("default-src 'self'");
    expect(headers.get('Content-Security-Policy')).toContain("frame-ancestors 'none'");
    expect(headers.get('Permissions-Policy')).toContain('camera=()');
    expect(headers.get('Referrer-Policy')).toBe('strict-origin-when-cross-origin');
    expect(headers.get('Strict-Transport-Security')).toBe('max-age=63072000; includeSubDomains; preload');
    expect(headers.get('X-Content-Type-Options')).toBe('nosniff');
    expect(headers.get('X-Frame-Options')).toBe('DENY');
  });

  it('does not define duplicate header names', () => {
    const normalizedNames = securityHeaders.map((header) => header.key.toLowerCase());

    expect(new Set(normalizedNames).size).toBe(normalizedNames.length);
  });
});
