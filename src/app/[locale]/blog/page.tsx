import type { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/config';
import Section, { SectionHeader } from '@/components/ui/Section';
import BlogCard from '@/components/blog/BlogCard';
import { BLOG_POSTS } from '@/lib/blog-data';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'blog' });
  return {
    title: t('heroTitle'),
    description: t('heroSubtitle'),
    alternates: {
      canonical: `/${locale}/blog`,
      languages: { 'tr-TR': '/tr/blog', 'en-US': '/en/blog' },
    },
  };
}

export default async function BlogIndexPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'blog' });
  const tc = await getTranslations({ locale, namespace: 'common' });

  const featured = BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0];
  const rest = BLOG_POSTS.filter((p) => p.slug !== featured.slug);

  return (
    <>
      <section className="relative pt-32 pb-12 md:pt-36 md:pb-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-5xl md:text-6xl text-cream-light text-balance">
            {t('heroTitle')}
          </h1>
          <p className="mt-4 text-lg text-cream/75 text-balance">
            {t('heroSubtitle')}
          </p>
        </div>
      </section>

      <Section padded={false} className="py-6">
        <p className="mb-5 font-accent text-sm tracking-[0.25em] text-flame text-center md:text-left">
          {t('featured')}
        </p>
        <BlogCard
          post={featured}
          locale={locale}
          readingLabel={tc('minRead')}
          variant="featured"
        />
      </Section>

      <Section>
        <SectionHeader title={t('allPosts')} align="left" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <BlogCard
              key={post.slug}
              post={post}
              locale={locale}
              readingLabel={tc('minRead')}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
