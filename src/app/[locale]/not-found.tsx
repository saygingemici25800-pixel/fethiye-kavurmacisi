import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Flame } from 'lucide-react';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <Flame className="mx-auto h-16 w-16 text-flame animate-flame-pulse" />
        <h1 className="mt-6 font-heading text-4xl md:text-5xl text-cream-light">
          {t('title')}
        </h1>
        <p className="mt-4 text-cream/70">{t('subtitle')}</p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-flame px-6 py-3 font-semibold text-white hover:bg-flame-dark transition"
        >
          {t('cta')}
        </Link>
      </div>
    </div>
  );
}
