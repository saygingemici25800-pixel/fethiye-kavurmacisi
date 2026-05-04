'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  ChefHat,
  Image as ImageIcon,
  Star,
  BookOpen,
  MapPin,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import type { Locale } from '@/i18n/config';
import Section, { SectionHeader } from '@/components/ui/Section';
import { cn } from '@/lib/cn';

type CardDef = {
  key: 'chef' | 'gallery' | 'reviews' | 'blog' | 'contact';
  href: string;
  Icon: LucideIcon;
  borderClass: string;
  gradientClass: string;
  glowClass: string;
};

export default function ExploreCards({ locale }: { locale: Locale }) {
  const t = useTranslations('explore');
  const tc = useTranslations('common');

  const cards: CardDef[] = [
    {
      key: 'chef',
      href: `/${locale}/mehmet-usta`,
      Icon: ChefHat,
      borderClass: 'border-flame/40',
      gradientClass: 'from-flame/30 to-flame/0',
      glowClass: 'group-hover:shadow-[0_20px_55px_-20px_rgba(255,107,53,0.65)]',
    },
    {
      key: 'gallery',
      href: `/${locale}/galeri`,
      Icon: ImageIcon,
      borderClass: 'border-copper/40',
      gradientClass: 'from-copper/30 to-copper/0',
      glowClass: 'group-hover:shadow-[0_20px_55px_-20px_rgba(199,125,58,0.6)]',
    },
    {
      key: 'reviews',
      href: `/${locale}/yorumlar`,
      Icon: Star,
      borderClass: 'border-amber-400/40',
      gradientClass: 'from-amber-400/25 to-amber-400/0',
      glowClass: 'group-hover:shadow-[0_20px_55px_-20px_rgba(251,191,36,0.55)]',
    },
    {
      key: 'blog',
      href: `/${locale}/blog`,
      Icon: BookOpen,
      borderClass: 'border-cream/40',
      gradientClass: 'from-cream/25 to-cream/0',
      glowClass: 'group-hover:shadow-[0_20px_55px_-20px_rgba(245,230,211,0.45)]',
    },
    {
      key: 'contact',
      href: `/${locale}/iletisim`,
      Icon: MapPin,
      borderClass: 'border-ember/40',
      gradientClass: 'from-ember/40 to-ember/0',
      glowClass: 'group-hover:shadow-[0_20px_55px_-20px_rgba(139,37,0,0.65)]',
    },
  ];

  return (
    <Section id="explore" className="relative bg-gradient-to-b from-charcoal to-charcoal-dark scroll-mt-24">
      <SectionHeader title={t('title')} subtitle={t('subtitle')} />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {cards.map((card, idx) => (
          <motion.div
            key={card.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
          >
            <Link
              href={card.href}
              className={cn(
                'group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border bg-charcoal-light/40 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5',
                card.borderClass,
                card.glowClass,
              )}
            >
              <div
                aria-hidden
                className={cn(
                  'absolute inset-x-0 -top-24 h-48 bg-gradient-to-b opacity-60 transition-opacity duration-500 group-hover:opacity-100',
                  card.gradientClass,
                )}
              />

              <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-charcoal-dark/70 text-flame transition-all duration-500 group-hover:rotate-6 group-hover:bg-flame group-hover:text-white">
                <card.Icon className="h-6 w-6" strokeWidth={2} />
              </div>

              <div className="relative z-10">
                <h3 className="font-heading text-xl text-cream-light">
                  {t(`cards.${card.key}.title`)}
                </h3>
                <p className="mt-2 text-sm text-cream/70 leading-relaxed">
                  {t(`cards.${card.key}.desc`)}
                </p>
              </div>

              <span className="relative z-10 mt-auto inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-flame">
                {tc('discover')}
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
