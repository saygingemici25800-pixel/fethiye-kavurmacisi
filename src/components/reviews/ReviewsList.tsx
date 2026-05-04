'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { REVIEWS } from '@/lib/reviews-data';
import type { Locale } from '@/i18n/config';
import { cn } from '@/lib/cn';

type Filter = 'all' | 'fiveStar' | 'foreign' | 'newest';

const MAX_PREVIEW = 180;

export default function ReviewsList({ locale }: { locale: Locale }) {
  const t = useTranslations('reviews');
  const [filter, setFilter] = useState<Filter>('all');
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const items = useMemo(() => {
    let arr = [...REVIEWS];
    if (filter === 'fiveStar') arr = arr.filter((r) => r.rating === 5);
    if (filter === 'foreign') arr = arr.filter((r) => r.foreign);
    if (filter === 'newest') arr = arr.sort((a, b) => a.daysAgo - b.daysAgo);
    return arr;
  }, [filter]);

  const filters: Array<{ key: Filter; label: string }> = [
    { key: 'all', label: t('filters.all') },
    { key: 'fiveStar', label: t('filters.fiveStar') },
    { key: 'foreign', label: t('filters.foreign') },
    { key: 'newest', label: t('filters.newest') },
  ];

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
              filter === f.key
                ? 'bg-flame text-white'
                : 'bg-charcoal-light/60 text-cream/70 hover:bg-charcoal-light hover:text-cream',
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((review) => {
            const body = locale === 'en' ? review.bodyEN : review.bodyTR;
            const date = locale === 'en' ? review.dateEN : review.dateTR;
            const isLong = body.length > MAX_PREVIEW;
            const isOpen = expanded[review.id];
            const text =
              !isLong || isOpen ? body : body.slice(0, MAX_PREVIEW).trimEnd() + '…';

            return (
              <motion.article
                key={review.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-charcoal-light/40 p-6 backdrop-blur-sm transition hover:border-flame/40"
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={
                        i < review.rating
                          ? 'h-4 w-4 fill-flame text-flame'
                          : 'h-4 w-4 text-cream/30'
                      }
                    />
                  ))}
                </div>

                <p className="text-sm leading-relaxed text-cream/80">
                  &ldquo;{text}&rdquo;
                  {isLong && (
                    <button
                      type="button"
                      onClick={() =>
                        setExpanded((prev) => ({
                          ...prev,
                          [review.id]: !isOpen,
                        }))
                      }
                      className="ml-1 text-flame hover:underline"
                    >
                      {isOpen ? t('showLess') : t('showMore')}
                    </button>
                  )}
                </p>

                <div className="mt-auto flex items-center justify-between text-xs text-cream/55">
                  <div>
                    <p className="font-semibold text-cream/80">{review.author}</p>
                    <p>{date}</p>
                  </div>
                  <span className="rounded-full border border-white/10 px-2 py-1 text-[10px] uppercase tracking-wider">
                    Google
                  </span>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
