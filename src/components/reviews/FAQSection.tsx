import { getTranslations } from 'next-intl/server';
import Accordion from '@/components/ui/Accordion';
import Section, { SectionHeader } from '@/components/ui/Section';
import { FAQ_ITEMS } from '@/lib/faq-data';
import type { Locale } from '@/i18n/config';

export default async function FAQSection({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'reviews' });

  const items = FAQ_ITEMS.map((i) => ({
    id: i.id,
    question: locale === 'en' ? i.questionEN : i.questionTR,
    answer: locale === 'en' ? i.answerEN : i.answerTR,
  }));

  // FAQ JSON-LD
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((i) => ({
      '@type': 'Question',
      name: locale === 'en' ? i.questionEN : i.questionTR,
      acceptedAnswer: {
        '@type': 'Answer',
        text: locale === 'en' ? i.answerEN : i.answerTR,
      },
    })),
  };

  return (
    <Section>
      <SectionHeader title={t('faqTitle')} subtitle={t('faqSubtitle')} />
      <div className="mx-auto max-w-3xl">
        <Accordion items={items} />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </Section>
  );
}
