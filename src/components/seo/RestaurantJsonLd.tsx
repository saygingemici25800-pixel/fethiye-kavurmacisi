import { SITE_CONFIG } from '@/lib/constants';
import type { Locale } from '@/i18n/config';

export default function RestaurantJsonLd({ locale }: { locale: Locale }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    url: `${SITE_CONFIG.url}/${locale}`,
    telephone: SITE_CONFIG.phone,
    priceRange: '$$',
    servesCuisine: ['Turkish', 'Anatolian', 'Mediterranean'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.region,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.coordinates.lat,
      longitude: SITE_CONFIG.coordinates.lng,
    },
    openingHours: 'Mo-Sa 10:00-02:00+1',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '10:00',
        closes: '02:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE_CONFIG.stats.googleRating,
      reviewCount: SITE_CONFIG.stats.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.twitter,
      SITE_CONFIG.social.tripadvisor,
    ].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
