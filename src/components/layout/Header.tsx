'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { Locale } from '@/i18n/config';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';
import { cn } from '@/lib/cn';

export default function Header({ locale }: { locale: Locale }) {
  const tNav = useTranslations('nav');
  const tHeader = useTranslations('header');
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navItems = [
    { href: `/${locale}`, label: tNav('home') },
    { href: `/${locale}/mehmet-usta`, label: tNav('mehmetUsta') },
    { href: `/${locale}/galeri`, label: tNav('gallery') },
    { href: `/${locale}/yorumlar`, label: tNav('reviews') },
    { href: `/${locale}/blog`, label: tNav('blog') },
    { href: `/${locale}/iletisim`, label: tNav('contact') },
  ];

  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 h-16 transition-all duration-500 md:h-20',
          transparent
            ? 'bg-transparent'
            : 'bg-charcoal-dark/90 backdrop-blur-lg border-b border-white/5 shadow-lg shadow-black/20',
        )}
      >
        {/* LEFT: logo — sol kenara sabit */}
        <div className="absolute left-0 top-0 flex h-full items-center px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${locale}`}
            aria-label="Fethiye Kavurmacısı"
            className="inline-flex shrink-0 items-center transition-transform hover:scale-[1.03]"
          >
            <Image
              src="/images/logo.png"
              alt="Fethiye Kavurmacısı"
              width={56}
              height={56}
              priority
              className="h-10 w-10 drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)] md:h-14 md:w-14"
            />
          </Link>
        </div>

        {/* CENTER: brand title — viewport yatay merkezine sabit */}
        <div className="absolute left-1/2 top-0 flex h-full -translate-x-1/2 items-center px-4">
          <Link
            href={`/${locale}`}
            className="whitespace-nowrap font-heading text-base font-semibold tracking-wide text-cream transition-colors hover:text-flame md:text-2xl"
          >
            {tHeader('title')}
          </Link>
        </div>

        {/* RIGHT: language switcher + mobile hamburger — sağ kenara sabit */}
        <div className="absolute right-0 top-0 flex h-full items-center gap-1 px-4 sm:px-6 lg:px-8">
          <LanguageSwitcher currentLocale={locale} />
          <button
            type="button"
            aria-label="Menü"
            className="ml-1 rounded-full p-2 text-white hover:bg-white/10 md:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={navItems}
        locale={locale}
        brandName="Fethiye Kavurmacısı"
        activePath={pathname}
      />
    </>
  );
}
