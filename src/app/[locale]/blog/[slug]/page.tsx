import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { ArrowLeft, ArrowRight, Clock, User } from 'lucide-react';
import type { Locale } from '@/i18n/config';
import { locales } from '@/i18n/config';
import { BLOG_POSTS, getPostBySlug, getRelatedPosts } from '@/lib/blog-data';
import BlogContent from '@/components/blog/BlogContent';
import BlogCard from '@/components/blog/BlogCard';
import Section, { SectionHeader } from '@/components/ui/Section';

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    BLOG_POSTS.map((post) => ({ locale, slug: post.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: 'Not found' };
  const title = params.locale === 'en' ? post.titleEN : post.titleTR;
  const description = params.locale === 'en' ? post.excerptEN : post.excerptTR;
  return {
    title,
    description,
    alternates: {
      canonical: `/${params.locale}/blog/${post.slug}`,
      languages: {
        'tr-TR': `/tr/blog/${post.slug}`,
        'en-US': `/en/blog/${post.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      type: 'article',
      images: [{ url: post.cover, alt: title }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { locale: Locale; slug: string };
}) {
  unstable_setRequestLocale(params.locale);
  const { locale, slug } = params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const t = await getTranslations({ locale, namespace: 'blog' });
  const tc = await getTranslations({ locale, namespace: 'common' });

  const title = locale === 'en' ? post.titleEN : post.titleTR;
  const body = locale === 'en' ? post.bodyEN : post.bodyTR;
  const category = locale === 'en' ? post.categoryEN : post.categoryTR;
  const related = getRelatedPosts(post.slug, 3);
  const dateFmt = new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const date = dateFmt.format(new Date(post.date));

  // Article JSON-LD
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    image: post.cover,
    datePublished: post.date,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Organization', name: 'Fethiye Kavurmacısı' },
  };

  return (
    <>
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <Image
          src={post.cover}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/70 via-charcoal/50 to-charcoal-dark" />
        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-start justify-end px-4 pb-12 pt-28 sm:px-6 lg:px-8">
          <Link
            href={`/${locale}/blog`}
            className="mb-6 inline-flex items-center gap-2 text-sm text-cream/80 hover:text-flame transition"
          >
            <ArrowLeft className="h-4 w-4" /> {tc('backToBlog')}
          </Link>
          <span className="rounded-full bg-flame px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            {category}
          </span>
          <h1 className="mt-4 font-heading text-4xl md:text-6xl text-white text-balance max-w-3xl">
            {title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-cream/70">
            <span className="inline-flex items-center gap-2">
              <User className="h-4 w-4 text-flame" /> {post.author}
            </span>
            <span>{date}</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-4 w-4 text-flame" /> {post.readingMinutes}{' '}
              {tc('minRead')}
            </span>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <BlogContent body={body} />

        <div className="mt-14 rounded-3xl border border-flame/25 bg-flame/5 p-8 md:p-10 text-center">
          <h3 className="font-heading text-2xl md:text-3xl text-cream-light">
            {t('ctaTitle')}
          </h3>
          <p className="mt-3 text-cream/75">{t('ctaDesc')}</p>
          <Link
            href={`/${locale}/iletisim`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-flame px-7 py-3 font-semibold text-white transition hover:bg-flame-dark"
          >
            {t('ctaButton')} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </article>

      <Section>
        <SectionHeader title={t('relatedPosts')} align="left" />
        <div className="grid gap-6 md:grid-cols-3">
          {related.map((p) => (
            <BlogCard
              key={p.slug}
              post={p}
              locale={locale}
              readingLabel={tc('minRead')}
            />
          ))}
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </>
  );
}
