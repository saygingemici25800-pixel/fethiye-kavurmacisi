import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter, Playfair_Display, Bebas_Neue } from 'next/font/google';
import type { ReactNode } from 'react';
import { locales, type Locale } from '@/i18n/config';
import { SITE_CONFIG } from '@/lib/constants';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import RestaurantJsonLd from '@/components/seo/RestaurantJsonLd';
import '../globals.css';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  display: 'swap',
});

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: {
      default: t('defaultTitle'),
      template: `%s | ${t('siteName')}`,
    },
    description: t('defaultDescription'),
    applicationName: SITE_CONFIG.name,
    authors: [{ name: SITE_CONFIG.name }],
    keywords: [
      'fethiye kavurma',
      'fethiye restoran',
      'fethiye dana kavurma',
      'fethiye dana',
      'fethiye türk mutfağı',
      'best restaurant fethiye',
      'fethiye traditional food',
      'where to eat fethiye',
      'fethiye beef',
      'mehmet usta',
    ],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'tr-TR': '/tr',
        'en-US': '/en',
      },
    },
    openGraph: {
      title: t('defaultTitle'),
      description: t('defaultDescription'),
      url: `${SITE_CONFIG.url}/${locale}`,
      siteName: SITE_CONFIG.name,
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('defaultTitle'),
      description: t('defaultDescription'),
      images: ['/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
      },
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as Locale)) notFound();

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${playfair.variable} ${bebas.variable}`}
    >
      <body className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-charcoal text-cream font-body antialiased">
        <NextIntlClientProvider messages={messages}>
          <RestaurantJsonLd locale={locale as Locale} />
          <Header locale={locale as Locale} />
          <main id="main">{children}</main>
          <Footer locale={locale as Locale} />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
