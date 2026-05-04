'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { X } from 'lucide-react';
import type { Locale } from '@/i18n/config';
import LanguageSwitcher from './LanguageSwitcher';
import { cn } from '@/lib/cn';

type NavItem = { href: string; label: string };

export default function MobileMenu({
  open,
  onClose,
  items,
  locale,
  brandName,
  activePath,
}: {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
  locale: Locale;
  brandName: string;
  activePath: string;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[70] bg-charcoal-dark/98 backdrop-blur-lg"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <span className="font-accent text-2xl text-flame tracking-wider">
              {brandName}
            </span>
            <div className="flex items-center gap-2">
              <LanguageSwitcher currentLocale={locale} />
              <button
                type="button"
                aria-label="Kapat"
                onClick={onClose}
                className="rounded-full p-2 text-cream hover:bg-charcoal-light"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          <nav className="px-5 py-10">
            <ul className="flex flex-col gap-2">
              {items.map((item, idx) => {
                const active = activePath === item.href;
                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * idx, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        'block font-heading text-3xl leading-snug transition-colors',
                        active ? 'text-flame' : 'text-cream hover:text-flame',
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
