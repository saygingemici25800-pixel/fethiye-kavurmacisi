'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/lib/constants';

const AVATARS = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop',
];

export default function HeroSocialProof() {
  const t = useTranslations('hero');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="flex items-center gap-3 rounded-full border border-cream/30 bg-charcoal/40 px-4 py-2 shadow-lg shadow-black/20 backdrop-blur-md"
    >
      <div className="flex -space-x-1.5">
        {AVATARS.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            width={24}
            height={24}
            alt={`Misafir ${i + 1}`}
            className="h-6 w-6 rounded-full object-cover ring-2 ring-charcoal"
          />
        ))}
      </div>
      <div className="flex items-center gap-1.5 text-xs text-cream/90">
        <span aria-hidden className="text-yellow-400">
          ⭐
        </span>
        <strong className="font-semibold text-flame">
          {SITE_CONFIG.stats.googleRating}
        </strong>
        <span aria-hidden>—</span>
        <span>{t('googleReviews')}</span>
      </div>
    </motion.div>
  );
}
