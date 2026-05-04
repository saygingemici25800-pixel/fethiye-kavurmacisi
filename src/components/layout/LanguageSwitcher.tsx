'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Check, Globe } from 'lucide-react';
import { locales, localeNames, localeFlags, type Locale } from '@/i18n/config';
import { cn } from '@/lib/cn';

export default function LanguageSwitcher({
  currentLocale,
  dark = false,
}: {
  currentLocale: Locale;
  dark?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const switchTo = (locale: Locale) => {
    if (locale === currentLocale) {
      setOpen(false);
      return;
    }
    const segments = pathname.split('/');
    segments[1] = locale;
    const next = segments.join('/') || `/${locale}`;
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', locale);
    }
    router.push(next);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label="Dil değiştir"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold uppercase tracking-wider transition',
          dark
            ? 'text-cream hover:bg-charcoal-light'
            : 'text-white hover:bg-white/10 backdrop-blur-sm',
        )}
      >
        <Globe className="h-4 w-4" />
        <span>{currentLocale.toUpperCase()}</span>
        <ChevronDown
          className={cn('h-4 w-4 transition-transform', open && 'rotate-180')}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 mt-2 min-w-[160px] overflow-hidden rounded-xl border border-white/10 bg-charcoal-dark/95 p-1 shadow-2xl backdrop-blur-lg"
          >
            {locales.map((l) => (
              <li key={l}>
                <button
                  role="option"
                  aria-selected={l === currentLocale}
                  onClick={() => switchTo(l)}
                  className={cn(
                    'flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm text-cream transition hover:bg-charcoal-light',
                    l === currentLocale && 'text-flame',
                  )}
                >
                  <span className="flex items-center gap-2">
                    <span aria-hidden>{localeFlags[l]}</span>
                    <span>{localeNames[l]}</span>
                  </span>
                  {l === currentLocale && <Check className="h-4 w-4" />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
