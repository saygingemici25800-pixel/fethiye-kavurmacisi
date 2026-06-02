'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import {
  IoRestaurantOutline,
  IoImagesOutline,
  IoStarOutline,
  IoBookOutline,
  IoCallOutline,
} from 'react-icons/io5';
import { cn } from '@/lib/cn';

type MenuItem = {
  title: string;
  titleEn: string;
  href: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
};

const menuItems: MenuItem[] = [
  {
    title: 'Mehmet Usta',
    titleEn: 'Mehmet Usta',
    href: '/mehmet-usta',
    icon: <IoRestaurantOutline />,
    gradientFrom: '#ff6b35',
    gradientTo: '#8b2500',
  },
  {
    title: 'Galeri',
    titleEn: 'Gallery',
    href: '/galeri',
    icon: <IoImagesOutline />,
    gradientFrom: '#c77d3a',
    gradientTo: '#ff6b35',
  },
  {
    title: 'Yorumlar',
    titleEn: 'Reviews',
    href: '/yorumlar',
    icon: <IoStarOutline />,
    gradientFrom: '#f5e6d3',
    gradientTo: '#c77d3a',
  },
  {
    title: 'Blog',
    titleEn: 'Blog',
    href: '/blog',
    icon: <IoBookOutline />,
    gradientFrom: '#8b2500',
    gradientTo: '#ff6b35',
  },
  {
    title: 'İletişim',
    titleEn: 'Contact',
    href: '/iletisim',
    icon: <IoCallOutline />,
    gradientFrom: '#ff6b35',
    gradientTo: '#c77d3a',
  },
];

export default function GradientMenu() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-2 md:gap-3">
      {menuItems.map(({ title, titleEn, href, icon, gradientFrom, gradientTo }) => {
        const fullHref = `/${locale}${href}`;
        const active = pathname === fullHref || pathname.startsWith(`${fullHref}/`);
        return (
          <li
            key={href}
            style={
              {
                '--gradient-from': gradientFrom,
                '--gradient-to': gradientTo,
              } as React.CSSProperties
            }
            className={cn(
              'group relative h-[38px] w-[38px] md:h-[46px] md:w-[46px] rounded-full bg-white/95 shadow-lg transition-all duration-500 hover:w-[110px] md:hover:w-[150px] hover:shadow-none',
              active && 'w-[110px] md:w-[150px] shadow-none',
            )}
          >
            <Link
              href={fullHref}
              aria-label={locale === 'en' ? titleEn : title}
              className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full"
            >
              <span
                aria-hidden
                className={cn(
                  'absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-opacity duration-500 group-hover:opacity-100',
                  active && 'opacity-100',
                )}
              />
              <span
                aria-hidden
                className={cn(
                  'absolute inset-x-0 top-[10px] -z-10 h-full rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 blur-[15px] transition-opacity duration-500 group-hover:opacity-50',
                  active && 'opacity-50',
                )}
              />
              <span
                className={cn(
                  'relative z-10 text-xl text-charcoal/80 transition-transform duration-500 group-hover:scale-0',
                  active && 'scale-0',
                )}
              >
                {icon}
              </span>
              <span
                className={cn(
                  'absolute text-xs md:text-sm font-semibold uppercase tracking-wide text-white transition-transform duration-500 scale-0 group-hover:scale-100',
                  'delay-0 group-hover:delay-150',
                  active && 'scale-100 delay-150',
                )}
              >
                {locale === 'en' ? titleEn : title}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
