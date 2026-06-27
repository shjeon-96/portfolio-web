'use client';

import { usePathname } from 'next/navigation';

import { cx, ds } from '@/lib/design-system';
import { GITHUB_PROFILE_URL } from '@/lib/site-links';

export function SiteFooter() {
  const pathname = usePathname();
  const isKorean = !pathname.startsWith('/en');

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface-strong)]">
      <div className={cx(ds.layout.content, 'flex flex-col gap-3 py-8 text-sm text-[var(--text-secondary)] md:flex-row md:items-center md:justify-between')}>
        <p className="font-mono uppercase tracking-[0.14em]">
          {isKorean ? 'Seunghun Jeon / 제품 시스템 포트폴리오' : 'Seunghun Jeon / Product Console Portfolio'}
        </p>
        <div className="flex flex-col gap-1 md:items-end">
          <p>{isKorean ? '공개해도 안전한 구현 근거, 변경 기록, AI 개발 흐름.' : 'Public-safe implementation evidence, changelog, and AI workflow.'}</p>
          <a className="font-medium text-[var(--text-primary)] transition hover:text-[var(--accent-blue)]" href={GITHUB_PROFILE_URL} rel="noreferrer" target="_blank">
            github.com/shjeon-96
          </a>
        </div>
      </div>
    </footer>
  );
}
