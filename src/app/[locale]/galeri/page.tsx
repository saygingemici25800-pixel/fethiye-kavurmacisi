import type { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/config';
import GalleryGrid from '@/components/gallery/GalleryGrid';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'gallery' });
  return {
    title: t('heroTitle'),
    description: t('heroSubtitle'),
    alternates: {
      canonical: `/${locale}/galeri`,
      languages: { 'tr-TR': '/tr/galeri', 'en-US': '/en/galeri' },
    },
  };
}

export default async function GalleryPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'gallery' });

  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-charcoal-light/60 to-transparent"
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-5xl md:text-6xl text-cream-light text-balance">
            {t('heroTitle')}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-cream/75 text-balance">
            {t('heroSubtitle')}
          </p>
        </div>
      </section>

      <GalleryGrid />

      <div className="h-24" />
    </>
  );
}
