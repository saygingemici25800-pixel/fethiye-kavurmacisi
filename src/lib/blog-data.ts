import type { BlogPost } from '@/types';

const placeholderBody = (lang: 'tr' | 'en') => {
  if (lang === 'tr') {
    return `
## Giriş

Fethiye'ye gelen her misafirin sorduğu soru aynıdır: "Gerçek kavurma nerede yenir?" Bu yazıda hem ustanın mutfağından notlar, hem de rehber bilgiler bulacaksınız.

Kavurma, Anadolu mutfağının kilometre taşlarından biridir. Odunun rengi, etin yaşı, ateşin süresi — her detay sonuçta hissedilir.

### Meşe odunu neden önemli?

Meşe, yavaş ve derin yanar. Dana etine bu derinliği bir başka odun veremez. Muğla'nın meşe ormanlarından gelen odunları özenle seçiyoruz.

### Sabır, her şeyden önce

- En az 6 saat ağır ateş
- Ara ara et tadımı
- Tek bir tuz: deniz tuzu
- Hiç acele yok

> "Kavurma yapmak sabır ister. Acelesi olan başka yerde yesin." — Mehmet Usta

## Peki sofrada ne olmalı?

Kavurmanın yanında sıcak pide, közlenmiş biber, soğuk ayran ve mevsimin mezeleri iyi gider. Tatlıda geleneksel kabak tatlısını öneriyoruz.

Fethiye'deysen, bir öğlen bize uğra. Sofra her zaman hazır.
`;
  }
  return `
## Intro

Every guest in Fethiye asks the same question: "Where is the real kavurma?" In this post you'll find notes from the chef's kitchen and a short guide for visitors.

Kavurma is a cornerstone of Anatolian cuisine. The color of the wood, the age of the beef, the duration of the fire — every detail is felt in the final bite.

### Why oak matters

Oak burns slowly and deeply. No other firewood gives beef that depth. We carefully select our wood from Muğla's oak forests.

### Patience, above all else

- At least 6 hours on a slow fire
- Tasting along the way
- A single seasoning: sea salt
- Absolutely no rush

> "Kavurma takes patience. Those in a hurry should eat somewhere else." — Mehmet Usta

## What should be on the table?

Warm pide, charred peppers, cold ayran and seasonal mezes pair well with kavurma. For dessert, we'd suggest the traditional pumpkin with tahini.

If you're in Fethiye, stop by one afternoon. The table is always set.
`;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'fethiyede-ne-yenir',
    titleTR: "Fethiye'de Ne Yenir? Gerçek Kavurma Nerede Bulunur?",
    titleEN: 'What to Eat in Fethiye? Where to Find Real Kavurma',
    excerptTR:
      "Fethiye'ye gelen herkesin sorduğu o soru: gerçek, dumanı tüten kavurma nerede bulunur? İşte cevabımız.",
    excerptEN:
      "Every traveler in Fethiye asks it: where do you find real, smoky kavurma? Here's our answer.",
    categoryTR: 'Rehber',
    categoryEN: 'Guide',
    date: '2025-06-12',
    readingMinutes: 6,
    cover: '/images/gallery/masa-kavurma-servis.jpg',
    author: 'Mehmet Usta',
    bodyTR: placeholderBody('tr'),
    bodyEN: placeholderBody('en'),
    featured: true,
  },
  {
    slug: 'kavurma-vs-tandir',
    titleTR: 'Dana Kavurma vs Tandır: Farkı Nedir?',
    titleEN: 'Kavurma vs Tandır: What Is the Difference?',
    excerptTR:
      'İkisi de dana, ikisi de ateşle pişer. Peki sofrada neden bu kadar farklı hissettirirler?',
    excerptEN:
      'Both are beef, both cooked with fire. Why do they feel so different on the plate?',
    categoryTR: 'Mutfak',
    categoryEN: 'Kitchen',
    date: '2025-05-30',
    readingMinutes: 5,
    cover: '/images/gallery/buyuk-tepsi-kavurma.jpg',
    author: 'Mehmet Usta',
    bodyTR: placeholderBody('tr'),
    bodyEN: placeholderBody('en'),
  },
  {
    slug: 'fethiye-gezi-rotasi',
    titleTR: "Fethiye'de 1 Günlük Gezi Rotası + Nerede Yemek",
    titleEN: 'One-Day Fethiye Route + Where to Eat Along the Way',
    excerptTR:
      "Ölüdeniz'den Babadağ'a, Kayaköy'den Paspatur çarşısına — ve aralarda doğru masaları.",
    excerptEN:
      'From Ölüdeniz to Babadağ, Kayaköy to the Paspatur bazaar — and where to eat along the way.',
    categoryTR: 'Rehber',
    categoryEN: 'Guide',
    date: '2025-05-18',
    readingMinutes: 8,
    cover: '/images/gallery/misafir-gulerken.jpg',
    author: 'Fethiye Kavurmacısı Ekibi',
    bodyTR: placeholderBody('tr'),
    bodyEN: placeholderBody('en'),
  },
  {
    slug: 'kavurma-sirlari',
    titleTR: "Mehmet Usta'nın Kavurma Tarifi Sırları",
    titleEN: "Mehmet Usta's Kavurma Secrets",
    excerptTR:
      'Evde de denemek isteyenler için: 30 yılın sırları, ustadan misafirlerine.',
    excerptEN:
      'For those who want to try at home: 30 years of secrets, from the chef to his guests.',
    categoryTR: 'Mutfak',
    categoryEN: 'Kitchen',
    date: '2025-04-22',
    readingMinutes: 7,
    cover: '/images/kavurma-bakir-kepce.jpg',
    author: 'Mehmet Usta',
    bodyTR: placeholderBody('tr'),
    bodyEN: placeholderBody('en'),
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.slug !== slug).slice(0, count);
}
