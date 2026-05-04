'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, ChefHat, UtensilsCrossed } from 'lucide-react';
import type { Locale, MenuItem } from '@/types';
import { MENU_MAIN_DISHES, MENU_SOUPS } from '@/lib/menu-data';
import Section, { SectionHeader } from '@/components/ui/Section';

const formatter = new Intl.NumberFormat('tr-TR');

function MenuCard({
  item,
  locale,
  detailLabel,
  index,
}: {
  item: MenuItem;
  locale: Locale;
  detailLabel: string;
  index: number;
}) {
  const [imgError, setImgError] = useState(false);
  const name = locale === 'en' ? item.nameEN : item.nameTR;
  const desc = locale === 'en' ? item.descEN : item.descTR;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-charcoal-light/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-flame/40 hover:shadow-[0_25px_60px_-25px_rgba(255,107,53,0.55)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-dark">
        {imgError ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-charcoal-dark text-cream/50">
            <UtensilsCrossed className="h-8 w-8 text-flame/60" />
            <span className="px-3 text-center font-heading text-sm text-cream/80">
              {name}
            </span>
          </div>
        ) : (
          <Image
            src={item.image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            onError={() => setImgError(true)}
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/30 to-transparent" />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-flame/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
          <ChefHat className="h-3 w-3" />
          {detailLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-xl text-cream-light">{name}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-cream/70">
          {desc}
        </p>
        <div className="mt-4 flex items-end justify-between">
          <span className="font-accent text-2xl tracking-wider text-flame">
            ₺{formatter.format(item.price)}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-cream/60 transition-colors group-hover:text-flame">
            {detailLabel} <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function MenuShowcase({ locale }: { locale: Locale }) {
  const t = useTranslations('menu');

  return (
    <Section id="menu" className="relative scroll-mt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-flame/10 blur-3xl"
      />
      <SectionHeader title={t('title')} subtitle={t('subtitle')} />

      {/* Ana Yemekler */}
      <div className="mb-6 flex items-center gap-3">
        <h3 className="font-heading text-2xl text-cream-light md:text-3xl">
          {t('mainsTitle')}
        </h3>
        <span className="h-px flex-1 bg-gradient-to-r from-flame/40 to-transparent" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {MENU_MAIN_DISHES.map((item, idx) => (
          <MenuCard
            key={item.id}
            item={item}
            locale={locale}
            detailLabel={t('detail')}
            index={idx}
          />
        ))}
      </div>

      {/* Çorbalar */}
      <div className="mb-6 mt-16 flex items-center gap-3">
        <h3 className="font-heading text-2xl text-cream-light md:text-3xl">
          {t('soupsTitle')}
        </h3>
        <span className="h-px flex-1 bg-gradient-to-r from-flame/40 to-transparent" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {MENU_SOUPS.map((item, idx) => (
          <MenuCard
            key={item.id}
            item={item}
            locale={locale}
            detailLabel={t('detail')}
            index={idx}
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href={`/${locale}/iletisim`}
          className="inline-flex items-center gap-2 rounded-full border border-flame/60 px-7 py-3 font-semibold text-flame transition hover:bg-flame hover:text-white"
        >
          {t('viewAll')} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
