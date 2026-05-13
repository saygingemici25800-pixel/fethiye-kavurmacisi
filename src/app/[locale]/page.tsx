import { unstable_setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/config';
import HeroVideo from '@/components/home/HeroVideo';
import TableEssentials from '@/components/home/TableEssentials';

export default function HomePage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <HeroVideo />
      <TableEssentials />
    </>
  );
}
