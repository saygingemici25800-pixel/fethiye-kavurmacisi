import type { MenuItem } from '@/types';

export const MENU_ITEMS: MenuItem[] = [
  // ── Ana Yemekler ──────────────────────────────────────
  {
    id: 'kuzu-kavurma',
    nameTR: 'Kuzu Kavurma',
    nameEN: 'Lamb Kavurma',
    descTR: '6 saat odun ateşinde, bakır tavada pişirilmiş özel kuzu kavurma',
    descEN: '6 hours slow-cooked over wood fire in copper pan, special lamb confit',
    price: 450,
    image: '/images/menu/kuzu-kavurma.jpg',
    featured: true,
    category: 'main',
  },
  {
    id: 'kofte',
    nameTR: 'Köfte',
    nameEN: 'Köfte',
    descTR: 'El yapımı, mangal kömüründe pişen ızgara köfte',
    descEN: 'Hand-made grilled meatballs over charcoal',
    price: 280,
    image: '/images/menu/kofte.jpg',
    featured: true,
    category: 'main',
  },
  {
    id: 'kokorec',
    nameTR: 'Kokoreç',
    nameEN: 'Kokoreç',
    descTR: 'Geleneksel tarif, baharatlı, odun ateşinde',
    descEN: 'Traditional recipe, spicy, on wood fire',
    price: 320,
    image: '/images/menu/kokorec.jpg',
    featured: true,
    category: 'main',
  },
  {
    id: 'ciger',
    nameTR: 'Ciğer',
    nameEN: 'Grilled Liver',
    descTR: 'Taze dana ciğeri, ızgara, soğanlı',
    descEN: 'Fresh grilled veal liver with onions',
    price: 290,
    image: '/images/menu/ciger.jpg',
    featured: false,
    category: 'main',
  },
  {
    id: 'tavuk',
    nameTR: 'Tavuk',
    nameEN: 'Chicken Skewers',
    descTR: 'Marine edilmiş tavuk şiş, mangalda',
    descEN: 'Marinated chicken skewers on charcoal',
    price: 240,
    image: '/images/menu/tavuk.jpg',
    featured: false,
    category: 'main',
  },
  {
    id: 'kavurma-ekmek-arasi',
    nameTR: 'Kavurma Ekmek Arası',
    nameEN: 'Kavurma Sandwich',
    descTR: 'Taze ekmek içinde kavurma, domates, soğan ve yeşil biber',
    descEN: 'Kavurma in fresh bread with tomato, onion and green pepper',
    price: 180,
    image: '/images/menu/kavurma-ekmek-arasi.jpg',
    featured: false,
    category: 'main',
  },

  // ── Çorbalar ──────────────────────────────────────────
  {
    id: 'mercimek-corbasi',
    nameTR: 'Mercimek Çorbası',
    nameEN: 'Lentil Soup',
    descTR: 'Geleneksel kırmızı mercimek çorbası',
    descEN: 'Traditional red lentil soup',
    price: 80,
    image: '/images/menu/mercimek-corbasi.jpg',
    featured: false,
    category: 'soup',
  },
  {
    id: 'ezogelin-corbasi',
    nameTR: 'Ezogelin Çorbası',
    nameEN: 'Ezogelin Soup',
    descTR: 'Bulgur, mercimek ve nane ile',
    descEN: 'With bulgur, lentils and mint',
    price: 85,
    image: '/images/menu/ezogelin-corbasi.jpg',
    featured: false,
    category: 'soup',
  },
  {
    id: 'ilik-corbasi',
    nameTR: 'İlik Çorbası',
    nameEN: 'Bone Marrow Soup',
    descTR: 'Kemik suyunda kaynatılmış, hakiki ilik çorbası',
    descEN: 'Authentic bone marrow soup',
    price: 120,
    image: '/images/menu/ilik-corbasi.jpg',
    featured: true,
    category: 'soup',
  },
];

export const MENU_MAIN_DISHES: MenuItem[] = MENU_ITEMS.filter(
  (item) => item.category === 'main',
);

export const MENU_SOUPS: MenuItem[] = MENU_ITEMS.filter(
  (item) => item.category === 'soup',
);
