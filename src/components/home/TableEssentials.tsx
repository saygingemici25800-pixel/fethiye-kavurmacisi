'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Section, { SectionHeader } from '@/components/ui/Section';

const ITEM_KEYS = ['ribs', 'rice', 'salad', 'bread'] as const;
const ICONS: Record<(typeof ITEM_KEYS)[number], string> = {
  ribs: '🥩',
  rice: '🍚',
  salad: '🍅',
  bread: '🫓',
};

export default function TableEssentials() {
  const t = useTranslations('tableEssentials');

  return (
    <Section className="bg-gradient-to-b from-charcoal-dark to-charcoal">
      <SectionHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <div className="grid gap-5 sm:gap-6 grid-cols-2 lg:grid-cols-4">
        {ITEM_KEYS.map((key, idx) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="group relative flex flex-col items-center rounded-2xl border border-flame/20 bg-charcoal-dark/70 p-6 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:border-flame/60 hover:shadow-[0_20px_45px_-20px_rgba(255,107,53,0.55)]"
          >
            <span
              aria-hidden
              className="mb-4 text-5xl md:text-6xl transition-transform duration-500 group-hover:scale-110"
            >
              {ICONS[key]}
            </span>
            <h3 className="font-heading text-lg md:text-xl text-cream-light leading-snug">
              {t(`items.${key}.name`)}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-cream/70">
              {t(`items.${key}.desc`)}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
