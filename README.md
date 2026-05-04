# Fethiye Kavurmacısı

Fethiye Kavurmacısı restoranı için resmi web sitesi. Ana sayfa + 5 alt sayfa (Mehmet Usta, Galeri, Yorumlar & SSS, Blog, İletişim), Türkçe/İngilizce çift dilli, SEO'ya optimize edilmiş landing page.

## Teknoloji Yığını

- **Next.js 14 (App Router)** — SSG + statik optimize
- **TypeScript**
- **Tailwind CSS** — özel renk paleti (`charcoal`, `flame`, `copper`, `cream`, `ember`)
- **framer-motion** — animasyonlar (hero, scroll, counter, lightbox)
- **lucide-react** — ikonlar
- **next-intl** — TR/EN i18n (`/tr/...`, `/en/...`)
- **clsx + tailwind-merge** — class yönetimi

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:3000 → otomatik /tr'ye yönlendirir
npm run build    # production build
npm start
```

## Proje yapısı

```
src/
├── app/
│   ├── [locale]/        # dil-awared sayfalar (tr, en)
│   │   ├── page.tsx     # ana sayfa
│   │   ├── mehmet-usta/
│   │   ├── galeri/
│   │   ├── yorumlar/
│   │   ├── blog/ + [slug]/
│   │   └── iletisim/
│   ├── sitemap.ts       # otomatik sitemap
│   ├── robots.ts
│   └── globals.css
├── components/
│   ├── layout/          # Header, Footer, LanguageSwitcher, MobileMenu
│   ├── home/            # HeroVideo, StatsStrip, MenuShowcase, ExploreCards, LocationSection
│   ├── ui/              # Button, Card, Section, Accordion, Lightbox, WhatsAppButton
│   ├── gallery/         # GalleryGrid (masonry + filter + lightbox)
│   ├── reviews/         # RatingSummary, ReviewsList, FAQSection
│   ├── blog/            # BlogCard, BlogContent
│   └── seo/             # RestaurantJsonLd
├── lib/                 # constants, menu-data, gallery-data, reviews-data, faq-data, blog-data
├── i18n/
│   ├── config.ts
│   ├── request.ts
│   ├── routing.ts
│   └── messages/{tr,en}.json
└── types/index.ts
```

## Dil desteği

- Varsayılan dil: **Türkçe** (TR)
- URL: `/tr/...` ve `/en/...`
- Tüm metinler `src/i18n/messages/{tr,en}.json` içinde — hardcoded metin yok
- Dil değiştirici header'da, seçim localStorage'a kaydediliyor

## SEO özellikleri

- Her sayfada `generateMetadata` (title + description + OpenGraph + canonical + alternates)
- Ana sayfada **Restaurant** JSON-LD (adres, telefon, açılış saatleri, aggregateRating, geo)
- Yorumlar sayfasında **FAQPage** JSON-LD
- Blog detaylarında **Article** JSON-LD
- Otomatik `sitemap.xml` ve `robots.txt` (app router)
- Her sayfanın alt dili için `hreflang`
- Tüm görsellerde `<Image>` komponenti (lazy + WebP/AVIF)

## Kullanıcının ekleyeceği içerikler (placeholder)

Şu an site tüm placeholder'larla çalışır durumda. Kullanıcı aşağıdakileri `public/` içindeki ilgili klasörlere eklemeli:

| Alan | Yol | Not |
|------|-----|-----|
| Logo | `public/images/logo.png`, `logo-white.png` | opsiyonel |
| Hero video | `public/videos/hero-loop.mp4` + `.webm` | 8–10 sn loop, ≤8MB |
| Hero poster | `public/images/hero-poster.jpg` | video yüklenene kadar |
| Mehmet Usta | `public/images/mehmet-usta.jpg`, `mehmet-usta-young.jpg` | portre + arşiv |
| Menü fotoğrafları | `public/images/menu/{kuzu-kavurma,tandir,kuzu-sis,mehmet-usta-ozel}.jpg` | 4 adet |
| Galeri | `public/images/gallery/{food,place,kitchen,guests}-0{1..6}.jpg` | ~20 adet |
| Blog kapakları | `public/images/blog/{slug}.jpg` | 4 adet |
| OG görseli | `public/og-image.jpg` | 1200×630 |
| Favicon | `public/favicon.ico`, `apple-touch-icon.png` | 32×32 + 180×180 |

Ayrıca **gerçek veriyi** güncellemek için:

- `src/lib/constants.ts` — telefon, WhatsApp, adres, koordinat, sosyal medya linkleri, çalışma saatleri
- `src/lib/menu-data.ts` — menü kalemleri ve fiyatlar
- `src/lib/reviews-data.ts` — gerçek Google yorumları
- `src/lib/blog-data.ts` — blog yazıları

## Vercel'e deploy

1. Bu klasörü bir GitHub repo'suna push'la.
2. [vercel.com/new](https://vercel.com/new) → repo'yu import et.
3. Varsayılan ayarlarla **Deploy**.
4. Settings → Domains'ten `fethiyekavurmacisi.com` ekle, DNS kayıtlarını yönergelere göre gir.

Ortam değişkenlerine ihtiyaç yok (şimdilik).

## Notlar

- Tüm sayfalar SSG olarak prerender oluyor (en hızlı TTFB)
- WhatsApp floating button tüm sayfalarda sabit
- Header ana sayfada şeffaf başlıyor, scroll ile koyu arka plana geçiyor
- Galeri'de klavye (← → ESC) ve mobile swipe desteği var
- Yorumlar sayfasında filtre + "devamını oku"

Made with 🔥 in Fethiye.
