import type { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/config';
import Section from '@/components/ui/Section';
import RatingSummary from '@/components/reviews/RatingSummary';
import ReviewsList from '@/components/reviews/ReviewsList';
import FAQSection from '@/components/reviews/FAQSection';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'reviews' });
  return {
    title: t('heroTitle'),
    description: t('heroSubtitle'),
    alternates: {
      canonical: `/${locale}/yorumlar`,
      languages: { 'tr-TR': '/tr/yorumlar', 'en-US': '/en/yorumlar' },
    },
  };
}

export default async function ReviewsPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'reviews' });

  return (
    <>
      <section className="relative pt-32 pb-10 md:pt-36">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-5xl md:text-6xl text-cream-light text-balance">
            {t('heroTitle')}
          </h1>
          <p className="mt-4 text-lg text-cream/75">{t('heroSubtitle')}</p>
        </div>
      </section>

      <Section padded={false} className="py-10">
        <RatingSummary locale={locale} />
      </Section>

      <Section padded={false} className="py-12">
        <ReviewsList locale={locale} />
      </Section>

      <FAQSection locale={locale} />
    </>
  );
}
