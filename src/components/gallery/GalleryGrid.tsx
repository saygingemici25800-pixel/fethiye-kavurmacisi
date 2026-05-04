'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Expand } from 'lucide-react';
import { GALLERY_ITEMS } from '@/lib/gallery-data';
import type { GalleryCategory, GalleryItem } from '@/types';
import Lightbox from '@/components/ui/Lightbox';
import { cn } from '@/lib/cn';

type Filter = 'all' | GalleryCategory;

const FILTERS: Filter[] = ['all', 'food', 'venue'];

export default function GalleryGrid() {
  const t = useTranslations('gallery');
  const [filter, setFilter] = useState<Filter>('all');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = useMemo<GalleryItem[]>(() => {
    if (filter === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === filter);
  }, [filter]);

  const openAt = (index: number) => setActiveIndex(index);
  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length));
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % items.length));

  return (
    <>
      <div className="sticky top-20 z-30 -mx-4 border-y border-white/5 bg-charcoal-dark/80 backdrop-blur-lg px-4 py-3 md:py-4">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto scrollbar-hide">
          {FILTERS.map((key) => {
            const active = filter === key;
            const label = t(`filters.${key}`);
            return (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                className={cn(
                  'whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                  active
                    ? 'bg-flame text-white'
                    : 'bg-charcoal-light/50 text-cream/70 hover:bg-charcoal-light hover:text-cream',
                )}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl px-4 md:px-6 lg:px-8">
        {items.length === 0 ? (
          <p className="py-20 text-center text-cream/60">{t('empty')}</p>
        ) : (
          <motion.div
            layout
            className="columns-1 gap-4 sm:columns-2 lg:columns-3"
          >
            <AnimatePresence mode="popLayout">
              {items.map((item, index) => (
                <motion.button
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => openAt(index)}
                  className="group relative mb-4 block w-full overflow-hidden rounded-xl border border-white/10 bg-charcoal-light"
                  aria-label={item.alt}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-charcoal-dark/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-flame p-2 text-white shadow-lg">
                      <Expand className="h-4 w-4" />
                    </span>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      <Lightbox
        items={items}
        activeIndex={activeIndex}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </>
  );
}
