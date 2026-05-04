import { Star } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { SITE_CONFIG } from '@/lib/constants';
import { RATING_DISTRIBUTION } from '@/lib/reviews-data';
import type { Locale } from '@/i18n/config';

export default async function RatingSummary({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'reviews' });

  return (
    <div className="grid gap-10 rounded-3xl border border-white/10 bg-charcoal-light/40 p-8 md:grid-cols-[1fr_1.2fr] md:p-12">
      <div className="text-center md:text-left">
        <div className="font-accent text-7xl md:text-8xl text-flame leading-none">
          {SITE_CONFIG.stats.googleRating.toFixed(1)}
        </div>
        <div className="mt-3 flex items-center justify-center gap-1 md:justify-start">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={
                i < Math.round(SITE_CONFIG.stats.googleRating)
                  ? 'h-5 w-5 fill-flame text-flame'
                  : 'h-5 w-5 text-cream/30'
              }
            />
          ))}
        </div>
        <p className="mt-4 text-sm text-cream/70">
          {SITE_CONFIG.stats.reviewCount} {t('reviewsCount')}
        </p>
        <a
          href={SITE_CONFIG.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-flame px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-flame/25 transition hover:bg-flame-dark"
        >
          {t('writeReview')}
        </a>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-cream/60">
          {t('distribution')}
        </h3>
        <ul className="mt-4 space-y-2">
          {[5, 4, 3, 2, 1].map((star) => {
            const value = RATING_DISTRIBUTION[star as 5 | 4 | 3 | 2 | 1] || 0;
            return (
              <li key={star} className="flex items-center gap-3 text-sm">
                <span className="flex w-10 items-center gap-1 text-cream/70">
                  {star} <Star className="h-3 w-3 fill-flame text-flame" />
                </span>
                <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-charcoal-dark">
                  <div
                    className="h-full rounded-full bg-flame transition-all duration-1000"
                    style={{ width: `${value}%` }}
                  />
                </div>
                <span className="w-10 text-right text-cream/60 tabular-nums">
                  {value}%
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
