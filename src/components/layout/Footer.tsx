import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import {
  Flame,
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} from 'lucide-react';
import type { Locale } from '@/i18n/config';
import { SITE_CONFIG, WHATSAPP_LINK, TEL_LINK, MAIL_LINK } from '@/lib/constants';

export default async function Footer({ locale }: { locale: Locale }) {
  const tNav = await getTranslations({ locale, namespace: 'nav' });
  const tFooter = await getTranslations({ locale, namespace: 'footer' });

  const year = new Date().getFullYear();

  const links = [
    { href: `/${locale}`, label: tNav('home') },
    { href: `/${locale}/mehmet-usta`, label: tNav('mehmetUsta') },
    { href: `/${locale}/galeri`, label: tNav('gallery') },
    { href: `/${locale}/yorumlar`, label: tNav('reviews') },
    { href: `/${locale}/blog`, label: tNav('blog') },
    { href: `/${locale}/iletisim`, label: tNav('contact') },
  ];

  const address = locale === 'en' ? SITE_CONFIG.address.fullEN : SITE_CONFIG.address.full;

  return (
    <footer className="relative border-t border-white/10 bg-charcoal-dark text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:gap-12 lg:px-8">
        <div className="space-y-4">
          <Link
            href={`/${locale}`}
            aria-label="Fethiye Kavurmacısı"
            className="flex items-center gap-3 text-cream hover:text-flame transition-colors"
          >
            <Image
              src="/images/logo-white.png"
              alt="Fethiye Kavurmacısı"
              width={56}
              height={56}
              priority
            />
            <span className="font-accent text-xl tracking-wider">
              Fethiye Kavurmacısı
            </span>
          </Link>
          <p className="text-cream/70 text-sm leading-relaxed max-w-xs">
            {tFooter('tagline')}
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-cream transition hover:bg-flame hover:border-flame hover:text-white"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={SITE_CONFIG.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-cream transition hover:bg-flame hover:border-flame hover:text-white"
            >
              <Facebook className="h-4 w-4" />
            </a>
            {SITE_CONFIG.social.tripadvisor && (
              <a
                href={SITE_CONFIG.social.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TripAdvisor"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-cream transition hover:bg-flame hover:border-flame hover:text-white"
              >
                <span className="text-[10px] font-bold tracking-wider">TA</span>
              </a>
            )}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-base text-cream-light uppercase tracking-wide">
            {tFooter('quickLinks')}
          </h3>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-cream/75 transition-colors hover:text-flame"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-base text-cream-light uppercase tracking-wide">
            {tFooter('contactTitle')}
          </h3>
          <ul className="space-y-3 text-sm text-cream/75">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-flame" />
              <span>{address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-flame" />
              <a href={TEL_LINK} className="hover:text-flame transition-colors">
                {SITE_CONFIG.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <MessageCircle className="h-4 w-4 mt-0.5 shrink-0 text-flame" />
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-flame transition-colors"
              >
                {SITE_CONFIG.whatsappDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 shrink-0 text-flame" />
              <a href={MAIL_LINK} className="hover:text-flame transition-colors">
                {SITE_CONFIG.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-base text-cream-light uppercase tracking-wide">
            {tFooter('hoursTitle')}
          </h3>
          <ul className="space-y-1.5 text-sm text-cream/75">
            {SITE_CONFIG.hours.map((h) => {
              const value = h.closed
                ? locale === 'en'
                  ? h.valueEN ?? 'Closed'
                  : h.value
                : h.value;
              return (
                <li
                  key={h.dayTR}
                  className="flex items-center justify-between gap-4"
                >
                  <span>{locale === 'en' ? h.dayEN : h.dayTR}</span>
                  <span
                    className={h.closed ? 'text-flame/80' : 'text-cream/60'}
                  >
                    {value}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-cream/55 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {year} Fethiye Kavurmacısı. {tFooter('rights')}
          </p>
          <p className="flex items-center gap-1">
            {tFooter('madeWith')} <Flame className="inline h-3 w-3 text-flame" />
          </p>
        </div>
      </div>
    </footer>
  );
}
