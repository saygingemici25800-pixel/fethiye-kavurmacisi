# Fethiye Kavurmacısı - Web Sitesi Proje Dökümanı

> Bu döküman, Fethiye Kavurmacısı restoranı için tasarlanacak web sitesinin eksiksiz teknik ve içerik spesifikasyonunu içerir. Claude Code tarafından baştan sona uygulanmak üzere hazırlanmıştır.

---

## 📌 PROJE ÖZETİ

**Proje Adı:** Fethiye Kavurmacısı Resmi Web Sitesi
**Tip:** Restoran Landing Page + 5 Ek Sayfa
**Amaç:** Google organik aramasından gelen yerli ve yabancı turistleri restorana fiziksel olarak çekmek (in-store traffic)
**Hedef Kitle:** Fethiye'yi ziyaret eden yerli turistler + yabancı turistler (İngilizce konuşan)
**Deploy Platformu:** Vercel
**Domain:** Özel domain kullanılacak (örn. fethiyekavurmacisi.com)

---

## 🛠 TEKNOLOJİ YIĞINI (TECH STACK)

### Ana Framework
- **Next.js 14+** (App Router kullan, Pages Router değil)
- **TypeScript** (tüm dosyalar `.tsx` / `.ts` olacak)
- **Tailwind CSS** (styling)
- **React 18+**

### Kütüphaneler
```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "typescript": "^5.4.0",
    "tailwindcss": "^3.4.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.400.0",
    "next-intl": "^3.15.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.3.0"
  },
  "devDependencies": {
    "@types/node": "^20.12.0",
    "@types/react": "^18.3.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "eslint": "^8.57.0",
    "eslint-config-next": "^14.2.0"
  }
}
```

### Kütüphane Kullanım Amaçları
- **framer-motion**: Sayfa geçişleri, scroll animasyonları, hover efektleri
- **lucide-react**: Tüm ikonlar (telefon, whatsapp, instagram, vb.)
- **next-intl**: TR/EN dil desteği
- **clsx + tailwind-merge**: Conditional class name yönetimi

---

## 🎨 TASARIM SİSTEMİ

### Renk Paleti (Tailwind Config'e Eklenecek)

```js
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      charcoal: {
        DEFAULT: '#1a1a1a',
        light: '#2d2d2d',
        dark: '#0f0f0f',
      },
      flame: {
        DEFAULT: '#ff6b35',
        light: '#ff8659',
        dark: '#e55420',
      },
      copper: {
        DEFAULT: '#c77d3a',
        light: '#d99a5e',
        dark: '#a8631f',
      },
      cream: {
        DEFAULT: '#f5e6d3',
        light: '#faf1e3',
        dark: '#e8d4b8',
      },
      ember: '#8b2500', // Koyu kor rengi (hover'lar için)
    }
  }
}
```

### Tipografi
- **Başlıklar (Heading):** `Playfair Display` (Google Fonts) - serif, karakterli
- **Gövde metni (Body):** `Inter` (Google Fonts) - sans-serif, okunaklı
- **Vurgu/Logo:** `Bebas Neue` (Google Fonts) - condensed, impact

```js
// tailwind.config.ts fontFamily
fontFamily: {
  heading: ['var(--font-playfair)', 'serif'],
  body: ['var(--font-inter)', 'sans-serif'],
  accent: ['var(--font-bebas)', 'sans-serif'],
}
```

### Tasarım Prensipleri
- **Tema:** "Ateş & Bakır" - sıcak, iştah açıcı, gelenekselle modernin buluşması
- **Genel hissiyat:** Yaratıcı, eğlenceli, renkli ama abartısız; kavurmacı ruhunu yansıtan otantik bir estetik
- **Animasyonlar:** Yumuşak, doğal; ateş parıltısı efektleri; scroll-triggered fade-in & slide-up'lar
- **Görseller:** Yüksek kaliteli, doygun, iştah açıcı fotoğraflar; sıcak renk tonlaması
- **Boşluk kullanımı:** Cömert white space; nefes alan layout
- **Mobil öncelikli:** Tüm tasarım önce mobilde mükemmel çalışmalı

---

## 📁 PROJE KLASÖR YAPISI

```
fethiye-kavurmacisi/
├── public/
│   ├── videos/
│   │   └── hero-loop.mp4          # Hero arka plan videosu (kullanıcı ekleyecek)
│   │   └── hero-loop.webm         # Web için optimize edilmiş format
│   ├── images/
│   │   ├── logo.png               # Kullanıcı ekleyecek
│   │   ├── logo-white.png
│   │   ├── mehmet-usta.jpg        # Placeholder
│   │   ├── gallery/               # Galeri fotoğrafları klasörü
│   │   ├── menu/                  # Yemek fotoğrafları
│   │   └── blog/                  # Blog kapak görselleri
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   └── og-image.jpg               # Social media paylaşım görseli
├── src/
│   ├── app/
│   │   ├── [locale]/              # Dil routing'i için
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx           # Ana sayfa (landing)
│   │   │   ├── mehmet-usta/
│   │   │   │   └── page.tsx
│   │   │   ├── galeri/
│   │   │   │   └── page.tsx
│   │   │   ├── yorumlar/
│   │   │   │   └── page.tsx
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx       # Blog liste sayfası
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx   # Blog detay sayfası
│   │   │   └── iletisim/
│   │   │       └── page.tsx
│   │   ├── globals.css
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── LanguageSwitcher.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── home/
│   │   │   ├── HeroVideo.tsx
│   │   │   ├── StatsStrip.tsx
│   │   │   ├── MenuShowcase.tsx
│   │   │   ├── ExploreCards.tsx   # 5 alt sayfa kartı
│   │   │   └── LocationSection.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Lightbox.tsx
│   │   │   ├── Accordion.tsx       # SSS için
│   │   │   └── WhatsAppButton.tsx  # Sabit yüzen buton
│   │   ├── gallery/
│   │   │   ├── MasonryGrid.tsx
│   │   │   └── CategoryFilter.tsx
│   │   ├── reviews/
│   │   │   ├── ReviewCard.tsx
│   │   │   ├── RatingSummary.tsx
│   │   │   └── FAQSection.tsx
│   │   └── blog/
│   │       ├── BlogCard.tsx
│   │       └── BlogPost.tsx
│   ├── lib/
│   │   ├── constants.ts            # Site bilgileri (adres, tel, vb.)
│   │   ├── menu-data.ts            # Menü içeriği
│   │   ├── gallery-data.ts
│   │   ├── reviews-data.ts
│   │   ├── faq-data.ts
│   │   └── blog-data.ts
│   ├── i18n/
│   │   ├── messages/
│   │   │   ├── tr.json
│   │   │   └── en.json
│   │   └── config.ts
│   └── types/
│       └── index.ts
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── .gitignore
├── README.md
└── middleware.ts                   # i18n middleware
```

---

## 🌐 ÇOKLU DİL DESTEĞİ (i18n)

### Kurulum
- `next-intl` kütüphanesi kullanılacak
- URL yapısı: `/tr/...` ve `/en/...`
- Varsayılan dil: Türkçe (TR)
- Dil değiştirici header'da sağ üstte olacak

### Dosya Yapısı
```
src/i18n/messages/
├── tr.json    # Türkçe çeviriler
└── en.json    # İngilizce çeviriler
```

### Örnek tr.json Yapısı
```json
{
  "nav": {
    "home": "Ana Sayfa",
    "mehmetUsta": "Mehmet Usta",
    "gallery": "Galeri",
    "reviews": "Yorumlar",
    "blog": "Blog",
    "contact": "İletişim"
  },
  "hero": {
    "title": "Fethiye Kavurmacısı",
    "subtitle": "Fethiye'nin en iyi kuzu kavurması, 30 yıldır aynı lezzet",
    "cta1": "Menüyü Gör",
    "cta2": "Yol Tarifi Al"
  }
  // ... diğer çeviriler
}
```

Tüm metinler i18n üzerinden gelecek. Hardcoded Türkçe/İngilizce metin olmayacak.

---

## 📄 ANA SAYFA (LANDING PAGE) DETAYLARI

### 1. HERO BÖLÜMÜ (Tam Ekran Video)

**Özellikler:**
- `h-screen` (100vh) tam ekran
- Arka planda loop video oynatılacak
- Video: `autoPlay`, `muted`, `loop`, `playsInline` özellikleri olmalı
- Video üzerine koyu overlay (%40-50 siyah) - metinlerin okunması için
- Mobilde video yüklenmezse fallback olarak poster görseli

**Video Detayları:**
- Dosya yolu: `/public/videos/hero-loop.mp4` ve `.webm`
- Süre: 8-10 saniye loop
- Çözünürlük: 1920x1080 (desktop), mobilde `object-cover`
- Format: MP4 (H.264) + WebM (daha hafif)
- Maksimum boyut: 5-8 MB (performans için)

**İçerik Yerleşimi:**
- **Sol üst:** Logo (beyaz versiyon, 60px yükseklik)
- **Sağ üst:** Dil seçici (TR | EN) + hamburger menü (mobilde)
- **Orta (merkez):**
  - Üst başlık (küçük): "FETHİYE'NİN EFSANESİ" (accent font, letter-spacing geniş, turuncu)
  - Ana başlık: **"Fethiye Kavurmacısı"** (Playfair Display, 4xl-7xl, beyaz)
  - Alt başlık: "30 yıldır odun ateşinde pişen gerçek kuzu kavurma" (Inter, xl, cream rengi)
  - Buton grubu (yan yana):
    - Birincil CTA: **"Menüyü Gör"** (flame bg, white text, alevli hover efekti)
    - İkincil CTA: **"Yol Tarifi Al"** (outline white, Google Maps'e açılır)
- **Alt merkez:** Aşağı kaydırma ikonu (bounce animasyonu ile `ChevronDown` - lucide-react)

**Kod Örneği:**
```tsx
// components/home/HeroVideo.tsx
<section className="relative h-screen w-full overflow-hidden">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
    poster="/images/hero-poster.jpg"
  >
    <source src="/videos/hero-loop.webm" type="video/webm" />
    <source src="/videos/hero-loop.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-charcoal/50 z-10" />
  <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
    {/* İçerik */}
  </div>
</section>
```

---

### 2. STATS STRIP (İstatistik Şeridi)

**Amaç:** Güven inşa etmek, "30 yıldır..." mesajını vurgulamak.

**Tasarım:**
- Hero'nun hemen altında ince şerit
- Koyu arka plan (charcoal), altın (copper) vurgular
- 4 rakam yan yana (mobilde 2x2 grid)

**İçerik:**
1. **30+** — "Yıllık Tecrübe"
2. **500+** — "Günlük Mutlu Misafir"
3. **4.8/5** — "Google Puanı"
4. **%100** — "Odun Ateşi"

**Animasyon:** Sayılar görünüme girdiğinde 0'dan hedef rakama count-up animasyonu.

---

### 3. MENÜ VİTRİNİ (Featured Menu)

**Başlık:** "Sofranıza Gelecek Lezzetler"
**Alt başlık:** "Mehmet Usta'nın imzasını taşıyan en sevilen tabaklarımız"

**Layout:** 4 kart (desktop), 2x2 (tablet), tek sütun (mobil)

**Kart İçeriği (her biri):**
- Yüksek kaliteli yemek fotoğrafı (16:9 oranı)
- Yemek adı (heading font)
- Kısa açıklama (2 satır)
- Fiyat (flame rengi, kalın)
- "Detay" linki (hover'da alt çizgi)

**Kartlar ve Fiyatlar (placeholder):**

| # | Yemek | Açıklama | Fiyat |
|---|-------|----------|-------|
| 1 | Kuzu Kavurma | Odun ateşinde 6 saat pişen özel kuzu eti | ₺450 |
| 2 | Tandır | Geleneksel toprak tandırda, kendi yağında | ₺420 |
| 3 | Kuzu Şiş | Meşe kömüründe, baharatlı marinasyonlu | ₺380 |
| 4 | Mehmet Usta Özel | Ustanın günlük sürpriz tabağı | ₺520 |

**Tüm menü için buton:** "Tüm Menüyü Gör" (sayfa içi scroll veya modal)

---

### 4. KEŞFET BÖLÜMÜ (5 Kart - Alt Sayfalara Yönlendirme)

**Başlık:** "Daha Fazlasını Keşfet"
**Alt başlık:** "Fethiye Kavurmacısı'nın hikayesine yolculuk yapın"

**Layout:**
- Desktop: 5 kart tek satırda (grid-cols-5) VEYA 3+2 düzeni
- Tablet: 2 sütun
- Mobil: 1 sütun

**Kart Tasarımı:**
- Büyük ikon veya illüstrasyon (üstte)
- Başlık (heading font)
- Kısa açıklama (2-3 satır)
- "Keşfet →" mikro CTA
- Hover'da: hafif yukarı kalkma + shadow + renk geçişi
- Her kart farklı accent renk alabilir (çeşitlilik için)

**5 Kart:**

| Kart | İkon (lucide-react) | Başlık | Açıklama | Link |
|------|---------------------|--------|----------|------|
| 1 | `ChefHat` | Mehmet Usta | 30 yıldır ocağın başında, lezzetin arkasındaki usta | `/mehmet-usta` |
| 2 | `Image` | Galeri | Mutfağımızdan, tabaklarımızdan ve misafirlerimizden kareler | `/galeri` |
| 3 | `Star` | Yorumlar & SSS | Misafirlerimizin dedikleri ve sık sorulan sorular | `/yorumlar` |
| 4 | `BookOpen` | Blog | Fethiye lezzet rehberi ve kavurma kültürü yazıları | `/blog` |
| 5 | `MapPin` | İletişim | Bize nasıl ulaşırsınız ve rezervasyon bilgileri | `/iletisim` |

---

### 5. KONUM & İLETİŞİM BÖLÜMÜ

**Başlık:** "Sofra Hazır, Sizi Bekliyoruz"

**Layout (2 sütun):**

**Sol sütun - Harita:**
- Google Maps embed (iframe)
- Genişlik: %100, yükseklik: 400px
- Restoranın tam konumu işaretli

**Sağ sütun - Bilgiler:**
- 📍 **Adres:** (placeholder) "Taşyaka Mah. Atatürk Cad. No: 123, Fethiye/Muğla"
- 📞 **Telefon:** (placeholder) `+90 252 XXX XX XX` - tıklanabilir (`tel:`)
- 💬 **WhatsApp:** Yeşil buton, tıklanınca WhatsApp sohbeti açılır (`wa.me/905XXXXXXXXX`)
- 🕐 **Çalışma Saatleri:**
  - Pazartesi - Pazar: 11:00 - 23:00
  - (Eğer kapalı gün varsa belirtilsin)
- 📱 **Sosyal Medya ikonları:** Instagram, Facebook, TripAdvisor

---

### 6. FOOTER

**Arka plan:** Charcoal (koyu)
**Yazı rengi:** Cream (açık)

**Yapı (4 sütun desktop, 2x2 tablet, tek sütun mobil):**

**Sütun 1 - Marka:**
- Logo (beyaz versiyon)
- Kısa tagline: "Fethiye'nin en eski kavurmacısı"
- Sosyal medya ikonları yan yana

**Sütun 2 - Hızlı Linkler:**
- Ana Sayfa
- Mehmet Usta
- Galeri
- Yorumlar
- Blog
- İletişim

**Sütun 3 - İletişim:**
- Adres
- Telefon
- E-posta
- WhatsApp

**Sütun 4 - Saatler:**
- Haftanın günleri ve saatler

**Alt şerit (copyright):**
- © 2025 Fethiye Kavurmacısı. Tüm hakları saklıdır.
- "Made with 🔥 in Fethiye" (ince yazı)

---

## 📄 ALT SAYFA 1: MEHMET USTA

**URL:** `/mehmet-usta` (TR), `/en/mehmet-usta` (EN)

### Bölümler

**1. Hero (yarım ekran)**
- Mehmet Usta'nın büyük portre fotoğrafı (tam ocağın başında, duman ve alev arkada)
- Üstünde başlık: "Ocağın Ustası"
- Alt başlık: "Mehmet Usta'nın 30 yıllık hikayesi"

**2. Hikaye Bölümü**
- Sol: Metin (3-4 paragraf placeholder)
  - "Mehmet Usta, 1994 yılında küçük bir kasap dükkanında başladı bu mesleğe..."
  - "Fethiye'nin o zamanki küçük sokaklarında, odun kokusu onu hep çekti..."
  - "Bugün, 30 yılı aşkın tecrübesiyle her gün aynı özenle tabağınızı hazırlıyor..."
- Sağ: Siyah-beyaz arşiv fotoğrafı (genç halinden)

**3. "Benim Sırrım" Bölümü**
- 3 kart yatay:
  - 🥩 **Et Seçimi:** "Sadece yerel, 6-8 aylık kuzu..."
  - 🔥 **Meşe Odunu:** "Muğla'nın meşe ormanlarından kesilen..."
  - ⏳ **Sabır:** "Her kavurma en az 6 saat ağır ateşte..."

**4. Video/Foto Galerisi**
- Ustanın işbaşında çekilmiş 3-4 fotoğraf/video
- Autoplay muted short video klipler (loop)

**5. Alıntı Bloğu (Pull Quote)**
- Büyük tipografi ile: _"Kavurma yapmak sabır ister. Acelesi olan başka yerde yesin."_ — Mehmet Usta

**6. CTA:** "Sofraya Gelin" — iletişim sayfasına link

---

## 📄 ALT SAYFA 2: GALERİ

**URL:** `/galeri`

### Özellikler

**1. Üst Bölüm**
- Başlık: "Galerimiz"
- Alt başlık: "Mutfağımızdan, sofralarımızdan, mutlu misafirlerimizden kareler"

**2. Kategori Filtresi (Sticky)**
- 4 buton: **Tümü** | **Yemekler** | **Mekan** | **Mutfak** | **Misafirler**
- Aktif kategori flame rengi, diğerleri gri
- Filtre değişince framer-motion ile smooth geçiş

**3. Masonry Grid**
- Pinterest tarzı kolon düzeni (3 kolon desktop, 2 tablet, 1 mobil)
- Her fotoğraf farklı yükseklikte olabilir
- Hover'da: hafif zoom + overlay (fotoğrafı büyütme ikonu)
- Tıklayınca: **Lightbox** açılır (fullscreen görüntüleme + sol/sağ ok ile gezinme)

**4. Lightbox Özellikleri**
- Klavye desteği (← → ESC)
- Mobilde swipe desteği
- Fotoğrafın altında açıklama (opsiyonel)

**5. Placeholder Veri**
- `src/lib/gallery-data.ts` içinde ~20 adet placeholder fotoğraf tanımı olsun
- Her biri: `{ id, src, alt, category, width, height }`

---

## 📄 ALT SAYFA 3: YORUMLAR & SSS

**URL:** `/yorumlar`

### Bölümler

**1. Üst Bölüm - Puan Özeti**
- Büyük yazı: **⭐ 4.8/5**
- Alt: "342 Google değerlendirmesi temelinde"
- 5 yıldız-1 yıldız dağılım grafiği (yatay barlar)
- "Google'da Yorum Bırak" butonu (harici link)

**2. Filtre Çubuğu**
- Butonlar: **Tümü** | **5 Yıldız** | **Yabancı Misafirler** | **En Yeniler**

**3. Yorum Kartları (Grid 2x3 veya 3x2)**
- Her kart:
  - Üstte: Yıldız puanı
  - Yorum metni (4-5 satır, uzunsa "Devamını oku")
  - Kullanıcı adı + tarih
  - Küçük Google ikonu (kaynak belirtimi)
- **Placeholder olarak 6 yorum** (3 Türkçe, 3 İngilizce)

**Örnek Placeholder Yorumlar:**
1. ⭐⭐⭐⭐⭐ "Fethiye'ye her gelişimde uğrarım. Mehmet Usta'nın elinden çıkan kavurma başka hiçbir yerde yok." — Ahmet K., 2 hafta önce
2. ⭐⭐⭐⭐⭐ "Best kebab in Fethiye! The lamb was incredibly tender and the service was wonderful." — Sarah M., 1 month ago
3. ⭐⭐⭐⭐⭐ "Ailecek gittik, herkes çok memnun kaldı. Özellikle çocuklar için de güzel seçenekler var." — Ayşe T., 3 hafta önce
4. ⭐⭐⭐⭐⭐ "Authentic Turkish experience. The owner is a real master, took time to explain the cooking process." — John D., 2 months ago
5. ⭐⭐⭐⭐ "Lezzet muhteşem, fiyatlar biraz yüksek ama değer. Dekor da çok güzel." — Mehmet Y., 1 ay önce
6. ⭐⭐⭐⭐⭐ "Hidden gem! We came 3 times during our holiday. Highly recommend the lamb confit." — Emma L., 3 weeks ago

**4. SSS BÖLÜMÜ (Yorumların altında)**

**Başlık:** "Sıkça Sorulan Sorular"
**Alt başlık:** "Misafirlerimizin en çok merak ettikleri"

**Tasarım:** Accordion (tıklayınca açılır), 3 soru

**Sorular & Cevaplar:**

**S1: Rezervasyon gerekli mi?**
> Akşam 19:00 sonrası yoğun olduğumuzdan rezervasyon öneririz. Rezervasyon için WhatsApp hattımızdan veya telefondan kolayca ulaşabilirsiniz. Öğlen servislerinde genellikle rezervasyonsuz yer bulunur.
>
> *EN: Do I need a reservation? — We recommend reservations after 7 PM as we get busy. You can easily book via WhatsApp or phone. For lunch, walk-ins are usually welcome.*

**S2: Çocuk menünüz veya vejetaryen seçeneğiniz var mı?**
> Evet, küçük misafirlerimiz için özel porsiyon seçeneklerimiz mevcuttur. Vejetaryen misafirlerimiz için de zengin meze çeşitlerimiz, ızgara sebze tabağımız ve özel yapım mantı gibi seçeneklerimiz bulunmaktadır.
>
> *EN: Do you have a kids menu or vegetarian options? — Yes, we offer smaller portions for children. For vegetarians, we have a rich selection of mezes, grilled vegetable platters, and homemade mantı.*

**S3: Kredi kartı ve yabancı kart kabul ediyor musunuz?**
> Tüm büyük kredi kartlarını (Visa, Mastercard, American Express) ve yabancı bankaların kartlarını kabul ediyoruz. Nakit (TL, EUR, USD, GBP) ödeme de mümkündür.
>
> *EN: Do you accept credit cards and foreign cards? — We accept all major credit cards (Visa, Mastercard, American Express) including foreign bank cards. Cash payments in TL, EUR, USD, and GBP are also accepted.*

**Accordion Davranışı:**
- Tek seferde tek soru açık olsun (bir açılınca diğeri kapansın)
- Chevron ikonu açıkken dönüyor (rotate-180)
- Smooth height transition

---

## 📄 ALT SAYFA 4: BLOG

**URL:** `/blog`

### Blog Liste Sayfası

**1. Hero**
- Başlık: "Fethiye Lezzet Rehberi"
- Alt başlık: "Kavurma kültürü, Fethiye gezi notları ve yeme-içme rehberi"

**2. Öne Çıkan Yazı**
- Sayfanın üstünde büyük kart (full-width)
- Sol: Kapak görseli, Sağ: Başlık + excerpt + "Devamını Oku"

**3. Yazı Grid'i**
- 3 sütun (desktop), 2 (tablet), 1 (mobil)
- Her kart:
  - Kapak görseli (16:9)
  - Kategori etiketi (flame arka plan)
  - Başlık (heading font)
  - Tarih + okuma süresi (örn. "5 dk okuma")
  - Kısa özet (2-3 satır)

**4. Placeholder Blog Yazıları (4 adet)**

| # | Başlık | Slug | Kategori |
|---|--------|------|----------|
| 1 | Fethiye'de Ne Yenir? Gerçek Kavurma Nerede Bulunur? | `fethiyede-ne-yenir` | Rehber |
| 2 | Kuzu Kavurma vs Tandır: Farkı Nedir? | `kavurma-vs-tandir` | Mutfak |
| 3 | Fethiye'de 1 Günlük Gezi Rotası + Nerede Yemek | `fethiye-gezi-rotasi` | Rehber |
| 4 | Mehmet Usta'nın Kavurma Tarifi Sırları | `kavurma-sirlari` | Mutfak |

### Blog Detay Sayfası (`/blog/[slug]`)

**1. Hero**
- Büyük kapak görseli (full-width, 60vh)
- Üstte overlay ile başlık
- Alt: Yazar, tarih, okuma süresi

**2. İçerik Bölümü**
- Tek kolon, max-width: 720px, ortalanmış
- Tipografi: heading'ler büyük ve karakterli, paragraph'lar rahat okunur (line-height: 1.75)
- İçerik placeholder olarak Lorem Ipsum + Türkçe placeholder metin karışımı
- 600-1000 kelime

**3. Yazı İçi Öğeler**
- Paragraph
- H2, H3 başlıklar
- Blockquote (alıntı) — sol tarafta flame renkli bar
- Yazı içi görseller (2-3 tane)
- Liste (ul/ol)

**4. CTA (yazının sonunda)**
- "Bu lezzeti tatmak ister misin?" başlıklı kutu
- "Masanızı Ayırtın" butonu → iletişim sayfası

**5. İlgili Yazılar**
- Alt kısımda "Diğer Yazılarımız" başlığı
- 3 ilgili yazı kartı

---

## 📄 ALT SAYFA 5: İLETİŞİM

**URL:** `/iletisim`

### Bölümler

**1. Hero (yarım ekran)**
- Başlık: "Bize Ulaşın"
- Alt başlık: "Sofranız her zaman hazır"

**2. İletişim Kartları (4 kart grid)**

| İkon | Başlık | İçerik | Aksiyon |
|------|--------|--------|---------|
| `MapPin` | Adres | Tam adres | "Yol Tarifi Al" (Google Maps) |
| `Phone` | Telefon | +90 252 XXX XX XX | "Ara" (`tel:`) |
| `MessageCircle` | WhatsApp | Hızlı mesajlaşma | "Yaz" (`wa.me/`) |
| `Clock` | Saatler | Pzt-Paz: 11:00-23:00 | - |

**3. Büyük Harita Bölümü**
- Full-width Google Maps iframe
- Yükseklik: 500px

**4. Sosyal Medya Bölümü**
- Başlık: "Bizi Takip Edin"
- 3 büyük sosyal medya kartı: Instagram, Facebook, TripAdvisor
- Her biri marka rengi ile, hover'da scale animasyonu

**5. Önemli Not Kutusu**
- Flame border'lı kutu
- "Rezervasyon için WhatsApp'tan yazabilir veya bizi arayabilirsiniz. 19:00 sonrası için önceden rezervasyon yapmanızı öneririz."

---

## 🎯 GLOBAL BİLEŞENLER

### Header (Tüm Sayfalarda)

**Davranış:**
- Ana sayfada: Şeffaf arka plan (video üstünde), scroll ile koyulaşır
- Diğer sayfalarda: Her zaman koyu arka plan
- Sticky (top: 0, z-index yüksek)

**İçerik:**
- Sol: Logo (tıklanınca ana sayfa)
- Orta: Navigation linkleri (Ana Sayfa, Mehmet Usta, Galeri, Yorumlar, Blog, İletişim)
- Sağ: Dil seçici (TR/EN)
- Mobilde: Hamburger menü açılınca tam ekran overlay

### Footer
Yukarıda "Ana Sayfa - Footer" bölümünde detaylandırıldı. Aynı footer tüm sayfalarda.

### Sabit WhatsApp Butonu (Floating)
- Sağ alt köşede sabit (fixed bottom-6 right-6)
- Yeşil yuvarlak buton (56px çap)
- WhatsApp ikonu içinde
- Hover'da: scale(1.1) + pulse animasyonu
- Tıklayınca `wa.me/90XXXXXXXXXX` açılır
- Z-index: 50 (her şeyin üstünde)

### Dil Seçici Bileşeni
- Dropdown: "TR ▼" tıklayınca açılır, "English" opsiyonu gelir
- Flag ikonları opsiyonel (🇹🇷 🇬🇧)
- Seçim yapınca URL değişir (/tr/... ↔ /en/...)
- Seçili dil localStorage'da saklansın

---

## 🔍 SEO OPTİMİZASYONU (KRİTİK!)

> Google trafiği hedefimiz olduğu için SEO mükemmel olmalı.

### Her Sayfada Bulunacaklar

**1. Meta Tag'ler**
```tsx
export const metadata = {
  title: 'Fethiye Kavurmacısı | Fethiye\'nin En İyi Kuzu Kavurması',
  description: '30 yıldır odun ateşinde pişen gerçek kuzu kavurma. Fethiye\'de Mehmet Usta\'nın mutfağından.',
  keywords: 'fethiye restoran, fethiye kavurma, fethiye kuzu, fethiye yemek, fethiye türk mutfağı',
  openGraph: {
    title: '...',
    description: '...',
    images: ['/og-image.jpg'],
    locale: 'tr_TR',
    type: 'website',
  },
  alternates: {
    languages: {
      'tr-TR': '/tr',
      'en-US': '/en',
    }
  }
}
```

**2. Structured Data (JSON-LD)**
Ana sayfaya **Restaurant Schema** eklenecek:
```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Fethiye Kavurmacısı",
  "image": "https://fethiyekavurmacisi.com/og-image.jpg",
  "telephone": "+90-252-XXX-XX-XX",
  "priceRange": "$$",
  "servesCuisine": "Turkish",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "...",
    "addressLocality": "Fethiye",
    "addressRegion": "Muğla",
    "postalCode": "48300",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.6215,
    "longitude": 29.1166
  },
  "openingHours": "Mo-Su 11:00-23:00",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "342"
  }
}
```

**3. Semantic HTML**
- `<header>`, `<main>`, `<nav>`, `<article>`, `<section>`, `<footer>` düzgün kullanılacak
- `<h1>` her sayfada 1 tane olacak
- Alt tag'ler her `<img>`'de dolu olacak

**4. Performans**
- Next.js `<Image>` komponenti tüm görsellerde kullanılacak
- Lazy loading default
- WebP/AVIF format desteği
- Font'lar `next/font` ile yüklenecek (FOUT önlemi)

**5. robots.txt & sitemap.xml**
- `public/robots.txt` oluştur
- Next.js'in `app/sitemap.ts` dosyasıyla otomatik sitemap generate et

**6. Hedef Anahtar Kelimeler**
- "fethiye kavurma"
- "fethiye restoran"
- "fethiye kuzu kavurma"
- "best restaurant fethiye"
- "fethiye traditional food"
- "where to eat fethiye"
- "fethiye lamb"

---

## 🎨 ANİMASYONLAR (FRAMER MOTION)

### Sayfa Geçişleri
- Tüm sayfa geçişlerinde 0.3s fade-in

### Scroll Animasyonları
Kullanılacak pattern'ler:
```tsx
// Fade up on view
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
```

### Hero CTA Butonları
- Hover'da scale(1.05) + shadow artışı
- "Menüyü Gör" butonunda arka planda hafif alev parlaması (pseudo element)

### Kart Hover'ları
- translate-y: -4px
- Shadow artışı
- İçerideki ikonun hafif rotate'i

### Scroll İndicator
- Hero'nun altındaki ChevronDown: sürekli y: [0, 10, 0] bounce

### Sayı Sayacı (Stats)
- Kullanıcı görünüme girdiğinde 0'dan hedef sayıya 2 saniyede artar

---

## 📊 VERİ YAPILARI

### src/lib/constants.ts
```ts
export const SITE_CONFIG = {
  name: 'Fethiye Kavurmacısı',
  description: 'Fethiye\'nin en iyi kuzu kavurması',
  url: 'https://fethiyekavurmacisi.com',
  phone: '+902521234567',
  phoneDisplay: '+90 252 123 45 67',
  whatsapp: '+905301234567',
  email: 'info@fethiyekavurmacisi.com',
  address: {
    street: 'Taşyaka Mah. Atatürk Cad. No: 123',
    city: 'Fethiye',
    region: 'Muğla',
    postalCode: '48300',
    country: 'Türkiye',
    full: 'Taşyaka Mah. Atatürk Cad. No: 123, Fethiye/Muğla'
  },
  coordinates: {
    lat: 36.6215,
    lng: 29.1166
  },
  googleMapsUrl: 'https://maps.google.com/?q=36.6215,29.1166',
  hours: {
    monday: '11:00 - 23:00',
    tuesday: '11:00 - 23:00',
    wednesday: '11:00 - 23:00',
    thursday: '11:00 - 23:00',
    friday: '11:00 - 23:00',
    saturday: '11:00 - 23:00',
    sunday: '11:00 - 23:00',
  },
  social: {
    instagram: 'https://instagram.com/fethiyekavurmacisi',
    facebook: 'https://facebook.com/fethiyekavurmacisi',
    tripadvisor: 'https://tripadvisor.com/...',
  },
  stats: {
    years: 30,
    dailyGuests: 500,
    googleRating: 4.8,
    reviewCount: 342,
  }
}
```

### src/lib/menu-data.ts
```ts
export const MENU_ITEMS = [
  {
    id: '1',
    nameTR: 'Kuzu Kavurma',
    nameEN: 'Lamb Confit',
    descTR: 'Odun ateşinde 6 saat pişen özel kuzu eti',
    descEN: 'Special lamb slow-cooked 6 hours on wood fire',
    price: 450,
    image: '/images/menu/kuzu-kavurma.jpg',
    featured: true,
  },
  // ... diğerleri
]
```

### src/lib/faq-data.ts
```ts
export const FAQ_ITEMS = [
  {
    id: '1',
    questionTR: 'Rezervasyon gerekli mi?',
    questionEN: 'Do I need a reservation?',
    answerTR: 'Akşam 19:00 sonrası yoğun olduğumuzdan...',
    answerEN: 'We recommend reservations after 7 PM...',
  },
  // ... diğer 2 soru
]
```

---

## 🚀 DEPLOYMENT (VERCEL)

### Gereksinimler
1. GitHub repository oluştur
2. Vercel hesabıyla GitHub'a bağlan
3. "Import Project" → repository seç
4. Environment Variables (varsa) ekle
5. Deploy → otomatik build ve yayın

### Domain Bağlama
1. Vercel dashboard → Project → Settings → Domains
2. Özel domain ekle (örn. `fethiyekavurmacisi.com`)
3. DNS ayarlarında A record veya CNAME ekle (Vercel yönergeleri gösterir)

### Ortam Değişkenleri (gerekirse)
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=...
NEXT_PUBLIC_SITE_URL=https://fethiyekavurmacisi.com
```

---

## ✅ UYGULAMA SIRASI (CLAUDE CODE İÇİN ADIM ADIM)

Claude Code aşağıdaki sırayı takip etmeli:

### Faz 1: Kurulum
1. `create-next-app` ile Next.js 14 TypeScript projesi oluştur
2. Tailwind CSS, framer-motion, lucide-react, next-intl, clsx, tailwind-merge kur
3. `tailwind.config.ts` → renk paleti ve font'ları ekle
4. `src/app/globals.css` → custom CSS değişkenleri
5. Font yükleme: Playfair Display, Inter, Bebas Neue (`next/font/google`)
6. Klasör yapısını oluştur

### Faz 2: i18n Kurulumu
7. `next-intl` middleware ve config kurulumu
8. `tr.json` ve `en.json` dosyalarını tüm çevirilerle hazırla
9. `[locale]` dinamik route yapısı

### Faz 3: Layout & Global Bileşenler
10. `Header.tsx` (logo + nav + dil seçici + mobil menü)
11. `Footer.tsx`
12. `WhatsAppButton.tsx` (floating)
13. `Button.tsx`, `Card.tsx` gibi UI primitifleri

### Faz 4: Ana Sayfa
14. `HeroVideo.tsx` (video + başlık + CTA)
15. `StatsStrip.tsx` (animated counters)
16. `MenuShowcase.tsx` (featured 4 menu item)
17. `ExploreCards.tsx` (5 alt sayfa kartı)
18. `LocationSection.tsx` (harita + iletişim özet)

### Faz 5: Alt Sayfalar
19. `/mehmet-usta` sayfası
20. `/galeri` (masonry + lightbox)
21. `/yorumlar` (reviews + FAQ accordion)
22. `/blog` liste + `/blog/[slug]` detay
23. `/iletisim`

### Faz 6: SEO & Optimizasyon
24. Her sayfada `metadata` export
25. JSON-LD structured data (Restaurant schema)
26. `sitemap.ts`
27. `robots.txt`
28. Open Graph görseli

### Faz 7: Test & Deploy
29. Mobil responsive test
30. Lighthouse skoru kontrol (90+ hedef)
31. Build hataları yok
32. GitHub'a push, Vercel deploy

---

## 🎁 EKSTRA GEREKSİNİMLER

### Erişilebilirlik (A11y)
- Tüm butonlarda `aria-label`
- Focus state'ler görünür (keyboard navigation)
- Renk kontrastları WCAG AA uyumlu
- `<img>`'lerde alt text

### Performans
- Lighthouse skor hedefi: Performance 90+, SEO 100
- Video maksimum 8MB
- Görseller WebP, lazy load
- JavaScript minimize

### Tarayıcı Desteği
- Chrome, Safari, Firefox, Edge (son 2 versiyon)
- iOS Safari, Chrome Android

### Favicon & İkonlar
- `favicon.ico` (32x32)
- `apple-touch-icon.png` (180x180)
- Manifest ikonları (192x192, 512x512)

---

## 📝 KULLANICININ SONRASINDA EKLEYECEKLERİ

Bu içerikler placeholder olacak, kullanıcı sonradan ekleyecek:

- [ ] Logo dosyaları (`logo.png`, `logo-white.png`)
- [ ] Hero video (`hero-loop.mp4` ve `.webm`)
- [ ] Mehmet Usta fotoğrafları
- [ ] Menü yemek fotoğrafları (4 adet minimum)
- [ ] Galeri fotoğrafları (~20 adet)
- [ ] Blog kapak görselleri (4 adet)
- [ ] Gerçek telefon numarası
- [ ] Gerçek adres
- [ ] Gerçek Google Maps linki
- [ ] Gerçek sosyal medya linkleri
- [ ] WhatsApp numarası
- [ ] Blog yazı içerikleri (gerçek metin)

---

## 🎬 SONUÇ

Bu döküman, Fethiye Kavurmacısı web sitesi için eksiksiz teknik ve içerik brief'idir. Claude Code bu dökümanı baştan sona takip ederek tek seferde production-ready bir proje oluşturabilir.

**Başlangıç Komutu (Claude Code için):**
> "Bu dökümanı baştan sona takip ederek Fethiye Kavurmacısı web sitesini oluştur. Next.js 14 App Router, TypeScript, Tailwind CSS, framer-motion ve next-intl kullan. Tüm bileşenleri, sayfaları, i18n çevirilerini ve SEO optimizasyonlarını belirtildiği gibi uygula. Placeholder içerikler ve görsel yolları (public klasörüne eklenecek) kullan. Son olarak README.md'yi yaz."

---

**Doküman Versiyonu:** 1.0
**Oluşturulma Tarihi:** 2025
**Hedef Platform:** Vercel
