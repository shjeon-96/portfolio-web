'use client';

import { AnimatePresence, motion, type Transition, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useMemo, useState } from 'react';

import { cx, ds } from '@/lib/design-system';
import { getLocalizedRoutePath, getNavigationItems, getRoutePath } from '@/lib/routes';

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const isKorean = !pathname.startsWith('/en');
  const englishHref = getLocalizedPath(pathname, 'en');
  const koreanHref = getLocalizedPath(pathname, 'ko');
  const navigation = getNavigationItems(isKorean ? 'ko' : 'en');
  const primaryShortcut = isKorean
    ? { href: getRoutePath('evidence', 'ko'), label: '사례' }
    : { href: getRoutePath('evidence', 'en'), label: 'Cases' };
  const menuLabel = isMenuOpen
    ? isKorean
      ? '내비게이션 메뉴 닫기'
      : 'Close navigation menu'
    : isKorean
      ? '내비게이션 메뉴 열기'
      : 'Open navigation menu';
  const navIndicatorTransition = useMemo<Transition>(
    () => (reduceMotion ? { duration: 0 } : { duration: 0.24, ease: 'easeOut' }),
    [reduceMotion],
  );
  const navLinkClassName =
    'relative flex min-h-11 min-w-11 items-center justify-center overflow-hidden whitespace-nowrap rounded-md px-3 py-2 transition hover:bg-[var(--surface-strong)] hover:text-[var(--text-primary)]';
  const mobileMenuLinkClassName = 'flex min-h-11 items-center rounded-md px-3 font-medium transition hover:bg-[var(--background)] hover:text-[var(--text-primary)]';
  const isActive = (href: string) => {
    if (href === '/' || href === '/en') {
      return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_82%,var(--background))] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4">
        <Link
          className="flex min-h-11 min-w-11 items-center gap-3 font-semibold text-[var(--text-primary)]"
          href={getRoutePath('home', isKorean ? 'ko' : 'en')}
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="flex size-8 items-center justify-center rounded-md border border-[var(--text-primary)] bg-[var(--text-primary)] font-mono text-sm text-white shadow-sm">
            SJ
          </span>
          <span className="inline sm:hidden">Seunghun</span>
          <span className="hidden sm:inline">Seunghun Jeon</span>
        </Link>
        <nav className="hidden items-center gap-1 text-sm text-[var(--text-secondary)] md:flex">
          {navigation.map((item) => (
            <Link
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={cx(navLinkClassName, isActive(item.href) && 'text-[var(--text-primary)]')}
              href={item.href}
              key={item.href}
            >
              {isActive(item.href) ? (
                <motion.span
                  className="absolute inset-0 bg-[var(--surface-strong)]"
                  layoutId={`site-nav-active-${isKorean ? 'ko' : 'en'}`}
                  transition={navIndicatorTransition}
                />
              ) : null}
              <span className="relative">{item.label}</span>
            </Link>
          ))}
          <span className="mx-1 h-4 w-px shrink-0 bg-[var(--border)]" />
          <Link
            className={navLinkClassName}
            href={englishHref}
          >
            EN
          </Link>
          <Link
            className={navLinkClassName}
            href={koreanHref}
          >
            KO
          </Link>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <Link
            aria-current={isActive(primaryShortcut.href) ? 'page' : undefined}
            className={cx(ds.action.compact, isActive(primaryShortcut.href) && 'bg-[var(--text-primary)] text-white hover:bg-[var(--text-primary)] hover:text-white')}
            href={primaryShortcut.href}
            onClick={() => setIsMenuOpen(false)}
          >
            {primaryShortcut.label}
          </Link>
          <button
            aria-controls="mobile-site-navigation"
            aria-expanded={isMenuOpen}
            aria-label={menuLabel}
            className={ds.action.icon}
            onClick={() => setIsMenuOpen((current) => !current)}
            type="button"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isMenuOpen ? (
          <motion.nav
            animate={{ height: 'auto', opacity: 1 }}
            className="overflow-hidden border-t border-[var(--border)] bg-[var(--surface)] px-5 py-3 shadow-sm md:hidden"
            exit={{ height: reduceMotion ? 'auto' : 0, opacity: reduceMotion ? 1 : 0 }}
            id="mobile-site-navigation"
            initial={{ height: reduceMotion ? 'auto' : 0, opacity: reduceMotion ? 1 : 0 }}
            transition={navIndicatorTransition}
          >
            <div className="mx-auto grid max-w-7xl gap-1 text-sm text-[var(--text-secondary)]">
              {navigation.map((item) => (
                <Link
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={cx(mobileMenuLinkClassName, isActive(item.href) && 'bg-[var(--background)] text-[var(--text-primary)]')}
                  href={item.href}
                  key={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2 border-t border-[var(--border)] pt-3">
                <Link
                  className={cx(ds.action.secondary, 'px-3 py-0')}
                  href={englishHref}
                  onClick={() => setIsMenuOpen(false)}
                >
                  EN
                </Link>
                <Link
                  className={cx(ds.action.secondary, 'px-3 py-0')}
                  href={koreanHref}
                  onClick={() => setIsMenuOpen(false)}
                >
                  KO
                </Link>
              </div>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function getLocalizedPath(pathname: string, locale: 'en' | 'ko') {
  return getLocalizedRoutePath(pathname, locale);
}
