import { getTranslations } from 'next-intl/server';
import { MapPin, Phone, MessageCircle, Clock, Instagram, Facebook } from 'lucide-react';
import type { Locale } from '@/i18n/config';
import Section, { SectionHeader } from '@/components/ui/Section';
import { SITE_CONFIG, WHATSAPP_LINK, TEL_LINK } from '@/lib/constants';

export default async function LocationSection({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'location' });
  const tc = await getTranslations({ locale, namespace: 'common' });

  const address = locale === 'en' ? SITE_CONFIG.address.fullEN : SITE_CONFIG.address.full;

  return (
    <Section id="location" className="relative bg-charcoal-dark scroll-mt-24">
      <SectionHeader title={t('title')} subtitle={t('subtitle')} />

      <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 lg:col-span-3">
          <iframe
            title="Fethiye Kavurmacısı — Google Maps"
            src={SITE_CONFIG.googleMapsEmbed}
            width="100%"
            height="440"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[380px] w-full md:h-[440px] border-0"
            allowFullScreen
          />
        </div>

        <div className="grid gap-4 lg:col-span-2">
          <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-charcoal-light/40 p-5">
            <MapPin className="h-6 w-6 shrink-0 text-flame" />
            <div>
              <h3 className="font-heading text-lg text-cream-light">
                {t('address')}
              </h3>
              <p className="mt-1 text-sm text-cream/75 leading-relaxed">
                {address}
              </p>
              <a
                href={SITE_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex text-sm font-semibold text-flame hover:underline"
              >
                {tc('getDirections')} →
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-charcoal-light/40 p-5">
            <Phone className="h-6 w-6 shrink-0 text-flame" />
            <div>
              <h3 className="font-heading text-lg text-cream-light">
                {t('phone')}
              </h3>
              <a
                href={TEL_LINK}
                className="mt-1 block text-sm text-cream/75 hover:text-flame transition-colors"
              >
                {SITE_CONFIG.phoneDisplay}
              </a>
            </div>
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/5 p-5 transition hover:bg-[#25D366]/15"
          >
            <MessageCircle className="h-6 w-6 shrink-0 text-[#25D366]" />
            <div>
              <h3 className="font-heading text-lg text-cream-light">
                {t('whatsapp')}
              </h3>
              <span className="mt-1 block text-sm text-cream/75">
                {SITE_CONFIG.whatsappDisplay}
              </span>
            </div>
          </a>

          <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-charcoal-light/40 p-5">
            <Clock className="h-6 w-6 shrink-0 text-flame" />
            <div>
              <h3 className="font-heading text-lg text-cream-light">
                {t('hours')}
              </h3>
              <p className="mt-1 text-sm text-cream/75">{t('hoursValue')}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 pt-1">
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-cream transition hover:bg-flame hover:border-flame hover:text-white"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={SITE_CONFIG.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-cream transition hover:bg-flame hover:border-flame hover:text-white"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={SITE_CONFIG.social.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TripAdvisor"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-cream transition hover:bg-flame hover:border-flame hover:text-white"
            >
              <span className="text-[10px] font-bold tracking-wider">TA</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
