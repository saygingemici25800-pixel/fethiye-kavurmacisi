import type { Review } from '@/types';

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    rating: 5,
    bodyTR:
      "Fethiye'ye her gelişimde uğrarım. Mehmet Usta'nın elinden çıkan kavurma başka hiçbir yerde yok. Hem lezzet hem sıcak ortam için 10 üzerinden 10.",
    bodyEN:
      "I drop by every time I'm in Fethiye. The kavurma from Mehmet Usta's hands is unlike anywhere else — 10/10 for flavor and the warm vibe.",
    author: 'Ahmet K.',
    dateTR: '2 hafta önce',
    dateEN: '2 weeks ago',
    source: 'google',
    foreign: false,
    daysAgo: 14,
  },
  {
    id: 'r2',
    rating: 5,
    bodyTR:
      "Fethiye'nin en iyi kebabı! Dana inanılmaz yumuşaktı ve servis de harikaydı. Kesinlikle tavsiye ederim.",
    bodyEN:
      'Best kebab in Fethiye! The beef was incredibly tender and the service was wonderful. Highly recommended.',
    author: 'Sarah M.',
    dateTR: '1 ay önce',
    dateEN: '1 month ago',
    source: 'google',
    foreign: true,
    daysAgo: 30,
  },
  {
    id: 'r3',
    rating: 5,
    bodyTR:
      "Ailecek gittik, herkes çok memnun kaldı. Özellikle çocuklar için de güzel seçenekler var. Mekan temiz, personel ilgili.",
    bodyEN:
      'We went as a family and everyone loved it. There are nice options for kids too. The place is clean and the staff attentive.',
    author: 'Ayşe T.',
    dateTR: '3 hafta önce',
    dateEN: '3 weeks ago',
    source: 'google',
    foreign: false,
    daysAgo: 21,
  },
  {
    id: 'r4',
    rating: 5,
    bodyTR:
      'Otantik bir Türk deneyimi. Usta gerçek bir maestro, pişirme sürecini bize anlatmak için vakit ayırdı. Kesinlikle uğrayın.',
    bodyEN:
      'Authentic Turkish experience. The owner is a real master — he took time to explain the cooking process. A must-visit.',
    author: 'John D.',
    dateTR: '2 ay önce',
    dateEN: '2 months ago',
    source: 'google',
    foreign: true,
    daysAgo: 60,
  },
  {
    id: 'r5',
    rating: 4,
    bodyTR:
      'Lezzet muhteşem, fiyatlar biraz yüksek ama değer. Dekor da çok güzel. Bir dahaki Fethiye ziyaretimde yine geleceğim.',
    bodyEN:
      "Amazing flavor, prices a bit high but worth it. The decor is lovely too. I'll be back next time I'm in Fethiye.",
    author: 'Mehmet Y.',
    dateTR: '1 ay önce',
    dateEN: '1 month ago',
    source: 'google',
    foreign: false,
    daysAgo: 32,
  },
  {
    id: 'r6',
    rating: 5,
    bodyTR:
      'Gizli bir cevher! Tatilimiz boyunca 3 kez geldik. Özellikle dana kavurmayı şiddetle tavsiye ederim.',
    bodyEN:
      'Hidden gem! We came 3 times during our holiday. Highly recommend the beef confit.',
    author: 'Emma L.',
    dateTR: '3 hafta önce',
    dateEN: '3 weeks ago',
    source: 'google',
    foreign: true,
    daysAgo: 20,
  },
];

export const RATING_DISTRIBUTION = {
  5: 78,
  4: 15,
  3: 4,
  2: 2,
  1: 1,
};
