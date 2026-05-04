import type { Locale } from '@/i18n/config';

export type { Locale };

export type MenuCategory = 'main' | 'soup';

export type MenuItem = {
  id: string;
  nameTR: string;
  nameEN: string;
  descTR: string;
  descEN: string;
  price: number;
  image: string;
  featured: boolean;
  category: MenuCategory;
};

export type GalleryCategory = 'food' | 'venue';

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  width: number;
  height: number;
};

export type Review = {
  id: string;
  rating: 1 | 2 | 3 | 4 | 5;
  bodyTR: string;
  bodyEN: string;
  author: string;
  dateTR: string;
  dateEN: string;
  source: 'google' | 'tripadvisor';
  foreign: boolean;
  daysAgo: number;
};

export type FaqItem = {
  id: string;
  questionTR: string;
  questionEN: string;
  answerTR: string;
  answerEN: string;
};

export type BlogPost = {
  slug: string;
  titleTR: string;
  titleEN: string;
  excerptTR: string;
  excerptEN: string;
  categoryTR: string;
  categoryEN: string;
  date: string;
  readingMinutes: number;
  cover: string;
  author: string;
  bodyTR: string;
  bodyEN: string;
  featured?: boolean;
};
