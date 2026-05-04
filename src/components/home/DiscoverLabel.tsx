'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function DiscoverLabel() {
  const t = useTranslations('hero');

  return (
    <motion.span
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.0 }}
      className="whitespace-nowrap font-heading text-sm italic tracking-[0.30em] text-cream/90 md:text-lg md:tracking-[0.50em]"
    >
      {t('discover')}
    </motion.span>
  );
}
