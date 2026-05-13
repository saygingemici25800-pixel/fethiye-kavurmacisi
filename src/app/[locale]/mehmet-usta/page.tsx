import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Beef, Flame, Hourglass, CookingPot, Quote, ArrowRight } from 'lucide-react';
import type { Locale } from '@/i18n/config';
import Section, { SectionHeader } from '@/components/ui/Section';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'mehmetUsta' });
  return {
    title: t('heroTitle'),
    description: t('heroSubtitle'),
    alternates: {
      canonical: `/${locale}/mehmet-usta`,
      languages: { 'tr-TR': '/tr/mehmet-usta', 'en-US': '/en/mehmet-usta' },
    },
  };
}

export default async function MehmetUstaPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('mehmetUsta');

  const storyParagraphs = t.raw('story') as string[];

  const secrets: Array<{
    key: 'meat' | 'oak' | 'patience' | 'copper';
    Icon: typeof Beef;
    bgImage?: string;
  }> = [
    { key: 'meat', Icon: Beef },
    { key: 'oak', Icon: Flame },
    { key: 'patience', Icon: Hourglass, bgImage: '/images/kavurma-bakir-kepce.jpg' },
    { key: 'copper', Icon: CookingPot, bgImage: '/images/gallery/buyuk-tepsi-kavurma.jpg' },
  ];

  const dayImages = [
    { src: '/images/mehmet-usta-isbasi.jpg', alt: 'Mehmet Usta işbaşında' },
    { src: '/images/ilik-kemikleri.jpg', alt: 'İlik kemikleri pişirme' },
    { src: '/images/gallery/buyuk-tepsi-kavurma.jpg', alt: 'Geleneksel bakır tepside kavurma' },
    { src: '/images/gallery/kavurma-yufka-hazirlik.jpg', alt: 'Yufka üzerinde kavurma hazırlığı' },
  ];

  const historyItems: Array<{
    key: 'apprentice' | 'master' | 'today';
    src: string;
    alt: string;
  }> = [
    {
      key: 'apprentice',
      src: '/images/mehmet-usta/genclik-1985.jpeg',
      alt: 'Mehmet Usta gençlik yılları, 1985',
    },
    {
      key: 'master',
      src: '/images/mehmet-usta/koftede-usta.jpeg',
      alt: 'Mehmet Usta ızgara başında köfte yaparken',
    },
    {
      key: 'today',
      src: '/images/mehmet-usta/buyuk-ocak.jpeg',
      alt: "Mehmet Usta bugün, Fethiye Kavurmacısı ocağında",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
        <Image
          src="/images/ilik-kemikleri.jpg"
          alt="Ateşte pişen ilik kemikleri"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/60 via-charcoal/50 to-charcoal-dark" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 pt-20 text-center">
          <p className="font-accent text-sm md:text-base tracking-[0.3em] text-flame">
            {t('heroEyebrow')}
          </p>
          <h1 className="mt-4 font-heading text-5xl md:text-7xl text-white text-balance">
            {t('heroTitle')}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-cream/80 text-balance">
            {t('heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Story */}
      <Section className="relative">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          <div className="lg:col-span-3">
            <h2 className="font-heading text-3xl md:text-5xl text-cream-light mb-6">
              {t('storyTitle')}
            </h2>
            <div className="space-y-5 text-base md:text-lg leading-relaxed text-cream/80">
              {storyParagraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/images/kavurma-tepsi.jpg"
                alt="Geleneksel bakır tepside 6 saat pişen kavurma"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block">
              <div className="rounded-2xl border border-flame/30 bg-charcoal-dark/90 px-6 py-4 shadow-xl">
                <p className="font-accent text-3xl text-flame">1994</p>
                <p className="text-xs text-cream/60 uppercase tracking-wider">
                  Başlangıç
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* History timeline */}
      <Section className="bg-gradient-to-b from-charcoal-dark to-charcoal">
        <SectionHeader
          eyebrow={t('history.eyebrow')}
          title={t('history.title')}
          subtitle={t('history.subtitle')}
        />

        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3">
          {historyItems.map(({ key, src, alt }) => (
            <article
              key={key}
              className="group overflow-hidden rounded-2xl border border-flame/20 bg-charcoal-dark transition-transform duration-500 hover:scale-[1.03] hover:border-flame/50"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-flame px-3 py-1 font-accent text-sm tracking-[0.15em] text-cream-light shadow-lg">
                  {t(`history.items.${key}.date`)}
                </span>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-charcoal-dark to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl text-cream-light">
                  {t(`history.items.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">
                  {t(`history.items.${key}.desc`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Secrets */}
      <Section className="bg-gradient-to-b from-charcoal to-charcoal-dark">
        <SectionHeader
          eyebrow={t('secretTitle')}
          title={t('secretSubtitle')}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {secrets.map(({ key, Icon, bgImage }) => (
            <div
              key={key}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-charcoal-light/50 p-8 backdrop-blur-sm transition hover:-translate-y-1 hover:border-flame/40 hover:shadow-[0_20px_45px_-20px_rgba(255,107,53,0.5)]"
            >
              {bgImage && (
                <div aria-hidden className="pointer-events-none absolute inset-0">
                  <Image
                    src={bgImage}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-20 transition-opacity duration-500 group-hover:opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-charcoal-light/80 via-charcoal/60 to-charcoal-dark/90" />
                </div>
              )}
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-flame/10 text-flame transition-transform duration-500 group-hover:rotate-6">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-heading text-2xl text-cream-light">
                  {t(`secrets.${key}.title`)}
                </h3>
                <p className="mt-3 text-cream/75 leading-relaxed">
                  {t(`secrets.${key}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Day at the fire gallery */}
      <Section>
        <SectionHeader title={t('galleryTitle')} />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {dayImages.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10 bg-charcoal-light"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition duration-700 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Pull quote */}
      <Section padded={false} className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl border border-flame/25 bg-flame/5 p-10 md:p-16 text-center">
            <Quote className="mx-auto h-12 w-12 text-flame/60" />
            <p className="mt-6 font-heading text-2xl md:text-4xl leading-tight text-cream-light text-balance italic">
              &ldquo;{t('quote')}&rdquo;
            </p>
            <p className="mt-6 font-accent text-sm tracking-[0.3em] text-flame">
              — {t('quoteAuthor')}
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section padded={false} className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-cream-light">
            {t('cta')}
          </h2>
          <p className="mt-4 text-cream/75">{t('ctaDesc')}</p>
          <Link
            href={`/${locale}/iletisim`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-flame px-8 py-4 font-semibold text-white shadow-lg shadow-flame/30 transition hover:scale-[1.04] hover:bg-flame-dark"
          >
            {t('cta')} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
