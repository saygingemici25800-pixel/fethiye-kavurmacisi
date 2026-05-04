import Image from 'next/image';
import Link from 'next/link';
import { Clock } from 'lucide-react';
import type { BlogPost } from '@/types';
import type { Locale } from '@/i18n/config';

type Props = {
  post: BlogPost;
  locale: Locale;
  readingLabel: string;
  variant?: 'default' | 'featured';
};

export default function BlogCard({
  post,
  locale,
  readingLabel,
  variant = 'default',
}: Props) {
  const title = locale === 'en' ? post.titleEN : post.titleTR;
  const excerpt = locale === 'en' ? post.excerptEN : post.excerptTR;
  const category = locale === 'en' ? post.categoryEN : post.categoryTR;
  const dateFmt = new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const date = dateFmt.format(new Date(post.date));

  if (variant === 'featured') {
    return (
      <Link
        href={`/${locale}/blog/${post.slug}`}
        className="group relative grid overflow-hidden rounded-3xl border border-white/10 bg-charcoal-light/40 transition hover:border-flame/40 md:grid-cols-2"
      >
        <div className="relative aspect-[16/10] md:aspect-auto md:h-full">
          <Image
            src={post.cover}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/60 to-transparent md:bg-gradient-to-r" />
          <span className="absolute left-5 top-5 rounded-full bg-flame px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            {category}
          </span>
        </div>
        <div className="flex flex-col gap-4 p-8 md:p-10">
          <div className="flex items-center gap-3 text-xs text-cream/60">
            <span>{date}</span>
            <span aria-hidden>•</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" /> {post.readingMinutes} {readingLabel}
            </span>
          </div>
          <h3 className="font-heading text-3xl md:text-4xl text-cream-light leading-tight text-balance">
            {title}
          </h3>
          <p className="text-cream/75 leading-relaxed">{excerpt}</p>
          <span className="mt-auto inline-flex text-sm font-semibold uppercase tracking-wider text-flame transition-transform group-hover:translate-x-1">
            {locale === 'en' ? 'Read post' : 'Yazıyı oku'} →
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/${locale}/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-charcoal-light/40 transition hover:-translate-y-1 hover:border-flame/40 hover:shadow-[0_20px_45px_-20px_rgba(255,107,53,0.5)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-dark">
        <Image
          src={post.cover}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 rounded-full bg-flame px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
          {category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-3 text-xs text-cream/60">
          <span>{date}</span>
          <span aria-hidden>•</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" /> {post.readingMinutes} {readingLabel}
          </span>
        </div>
        <h3 className="font-heading text-xl text-cream-light leading-snug">
          {title}
        </h3>
        <p className="text-sm text-cream/70 leading-relaxed line-clamp-2">
          {excerpt}
        </p>
      </div>
    </Link>
  );
}
