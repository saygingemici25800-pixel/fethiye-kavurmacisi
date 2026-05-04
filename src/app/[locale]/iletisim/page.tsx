import type { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Instagram,
  Facebook,
  AlertCircle,
} from 'lucide-react';
import type { Locale } from '@/i18n/config';
import Section, { SectionHeader } from '@/components/ui/Section';
import { SITE_CONFIG, WHATSAPP_LINK, TEL_LINK } from '@/lib/constants';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'contact' });
  return {
    title: t('heroTitle'),
    description: t('heroSubtitle'),
    alternates: {
      canonical: `/${locale}/iletisim`,
      languages: { 'tr-TR': '/tr/iletisim', 'en-US': '/en/iletisim' },
    },
  };
}

export default async function ContactPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'contact' });
  const tc = await getTranslations({ locale, namespace: 'common' });

  const address = locale === 'en' ? SITE_CONFIG.address.fullEN : SITE_CONFIG.address.full;

  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-accent text-sm tracking-[0.3em] text-flame">
            {t('heroEyebrow')}
          </p>
          <h1 className="mt-3 font-heading text-5xl md:text-6xl text-cream-light text-balance">
            {t('heroTitle')}
          </h1>
          <p className="mt-4 text-lg text-cream/75">{t('heroSubtitle')}</p>
        </div>
      </section>

      {/* Contact cards */}
      <Section padded={false} className="py-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={SITE_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-charcoal-light/40 p-6 transition hover:-translate-y-1 hover:border-flame/40"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-flame/10 text-flame transition group-hover:rotate-6 group-hover:bg-flame group-hover:text-white">
              <MapPin className="h-6 w-6" />
            </span>
            <div className="flex-1">
              <h3 className="font-heading text-lg text-cream-light">
                {t('cards.address.title')}
              </h3>
              <p className="mt-1 text-sm text-cream/70">{address}</p>
            </div>
            <span className="text-sm font-semibold text-flame">
              {t('cards.address.action')} →
            </span>
          </a>

          <a
            href={TEL_LINK}
            className="group flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-charcoal-light/40 p-6 transition hover:-translate-y-1 hover:border-flame/40"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-flame/10 text-flame transition group-hover:rotate-6 group-hover:bg-flame group-hover:text-white">
              <Phone className="h-6 w-6" />
            </span>
            <div className="flex-1">
              <h3 className="font-heading text-lg text-cream-light">
                {t('cards.phone.title')}
              </h3>
              <p className="mt-1 text-sm text-cream/70">
                {SITE_CONFIG.phoneDisplay}
              </p>
            </div>
            <span className="text-sm font-semibold text-flame">
              {t('cards.phone.action')} →
            </span>
          </a>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start gap-4 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/5 p-6 transition hover:-translate-y-1"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#25D366]/15 text-[#25D366] transition group-hover:rotate-6 group-hover:bg-[#25D366] group-hover:text-white">
              <MessageCircle className="h-6 w-6" />
            </span>
            <div className="flex-1">
              <h3 className="font-heading text-lg text-cream-light">
                {t('cards.whatsapp.title')}
              </h3>
              <p className="mt-1 text-sm text-cream/70">
                {t('cards.whatsapp.desc')}
              </p>
            </div>
            <span className="text-sm font-semibold text-[#25D366]">
              {t('cards.whatsapp.action')} →
            </span>
          </a>

          <div className="flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-charcoal-light/40 p-6">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-flame/10 text-flame">
              <Clock className="h-6 w-6" />
            </span>
            <div className="flex-1">
              <h3 className="font-heading text-lg text-cream-light">
                {t('cards.hours.title')}
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-cream/70">
                <li>
                  <strong className="text-cream">
                    {locale === 'en' ? 'Mon – Sat:' : 'Pzt – Cmt:'}
                  </strong>{' '}
                  10:00 - 02:00
                </li>
                <li>
                  <strong className="text-cream">
                    {locale === 'en' ? 'Sun:' : 'Paz:'}
                  </strong>{' '}
                  <span className="text-flame/90">
                    {locale === 'en' ? 'Closed' : 'Kapalı'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Big map */}
      <Section padded={false} className="py-12">
        <div className="overflow-hidden rounded-3xl border border-white/10">
          <iframe
            title="Fethiye Kavurmacısı — Google Maps"
            src={SITE_CONFIG.googleMapsEmbed}
            className="h-[420px] w-full border-0 md:h-[520px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>

      {/* Social */}
      <Section>
        <SectionHeader title={t('followTitle')} subtitle={t('followSubtitle')} />
        <div className="grid gap-5 md:grid-cols-3">
          <a
            href={SITE_CONFIG.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#E1306C]/20 to-charcoal-light/40 p-6 transition hover:-translate-y-1 hover:border-[#E1306C]/50"
          >
            <Instagram className="h-8 w-8 text-[#E1306C]" />
            <h3 className="font-heading text-xl text-cream-light">Instagram</h3>
            <p className="text-sm text-cream/70">@fethiyekavurmacisi</p>
            <span className="mt-2 text-sm font-semibold text-[#E1306C]">
              {tc('follow')} →
            </span>
          </a>

          <a
            href={SITE_CONFIG.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1877F2]/20 to-charcoal-light/40 p-6 transition hover:-translate-y-1 hover:border-[#1877F2]/50"
          >
            <Facebook className="h-8 w-8 text-[#1877F2]" />
            <h3 className="font-heading text-xl text-cream-light">Facebook</h3>
            <p className="text-sm text-cream/70">Fethiye Kavurmacısı</p>
            <span className="mt-2 text-sm font-semibold text-[#1877F2]">
              {tc('follow')} →
            </span>
          </a>

          {SITE_CONFIG.social.tripadvisor && (
            <a
              href={SITE_CONFIG.social.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#00AF87]/20 to-charcoal-light/40 p-6 transition hover:-translate-y-1 hover:border-[#00AF87]/50"
            >
              <div className="grid h-8 w-8 place-items-center rounded-full bg-[#00AF87] text-xs font-bold text-white">
                TA
              </div>
              <h3 className="font-heading text-xl text-cream-light">TripAdvisor</h3>
              <p className="text-sm text-cream/70">
                {locale === 'en' ? 'Traveler reviews' : 'Gezgin yorumları'}
              </p>
              <span className="mt-2 text-sm font-semibold text-[#00AF87]">
                {tc('follow')} →
              </span>
            </a>
          )}
        </div>
      </Section>

      {/* Important note */}
      <Section padded={false} className="pb-24">
        <div className="mx-auto max-w-3xl rounded-2xl border border-flame/40 bg-flame/5 p-6 md:p-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-6 w-6 shrink-0 text-flame" />
            <div>
              <h3 className="font-heading text-xl text-cream-light">
                {t('noteTitle')}
              </h3>
              <p className="mt-2 text-cream/80 leading-relaxed">
                {t('noteBody')}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
