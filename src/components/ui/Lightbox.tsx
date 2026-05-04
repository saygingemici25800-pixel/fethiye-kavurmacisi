'use client';

import { useCallback, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import type { GalleryItem } from '@/types';

type LightboxProps = {
  items: GalleryItem[];
  activeIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function Lightbox({
  items,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const open = activeIndex !== null;
  const touchStartX = useRef<number | null>(null);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [open, onClose, onPrev, onNext],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const active = activeIndex !== null ? items[activeIndex] : null;

  return (
    <AnimatePresence>
      {open && active && (
        <motion.div
          className="lightbox-backdrop fixed inset-0 z-[60] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(dx) > 60) {
              dx < 0 ? onNext() : onPrev();
            }
            touchStartX.current = null;
          }}
        >
          <button
            type="button"
            aria-label="Kapat"
            className="absolute right-4 top-4 rounded-full bg-charcoal/70 p-2 text-cream hover:bg-flame hover:text-white transition"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            aria-label="Önceki"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-charcoal/70 p-3 text-cream hover:bg-flame hover:text-white transition hidden md:block"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <button
            type="button"
            aria-label="Sonraki"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-charcoal/70 p-3 text-cream hover:bg-flame hover:text-white transition hidden md:block"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          <motion.div
            key={active.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="relative max-h-[88vh] max-w-[92vw] md:max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[70vh] w-full md:h-[80vh]">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                className="object-contain"
                sizes="92vw"
                priority
              />
            </div>
            <p className="mt-4 text-center text-cream/80 text-sm">
              {active.alt}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
