export const SITE_CONFIG = {
  name: 'Fethiye Kavurmacısı',
  description: "Fethiye'nin en iyi kuzu kavurması",
  descriptionEN: 'Best lamb kavurma in Fethiye',
  url: 'https://fethiyekavurmacisi.com',
  phone: '+905317789060',
  phoneDisplay: '+90 531 778 90 60',
  whatsapp: '905317789060',
  whatsappDisplay: '+90 531 778 90 60',
  email: 'info@fethiyekavurmacisi.com',
  address: {
    street: 'Kesikkapı, Çarşı Cd. No:107/B',
    streetEN: 'Kesikkapı, Çarşı St. No:107/B',
    city: 'Fethiye',
    region: 'Muğla',
    postalCode: '48300',
    country: 'Türkiye',
    countryEN: 'Turkey',
    full: 'Kesikkapı, Çarşı Cd. No:107/B, 48300 Fethiye/Muğla',
    fullEN: 'Kesikkapı, Çarşı St. No:107/B, 48300 Fethiye/Muğla',
  },
  coordinates: {
    lat: 36.6219,
    lng: 29.1162,
  },
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Fethiye+Kavurmac%C4%B1s%C4%B1+Kesikkap%C4%B1+%C3%87ar%C5%9F%C4%B1+Cd+107+Fethiye',
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1602.3!2d29.1166!3d36.6215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sFethiye!5e0!3m2!1str!2str!4v1700000000000',
  googleReviewsUrl:
    'https://www.google.com/search?q=fethiye+kavurmacisi#lrd=0x0:0x0,3',
  hours: [
    { dayTR: 'Pazartesi', dayEN: 'Monday', value: '10:00 - 02:00', closed: false },
    { dayTR: 'Salı', dayEN: 'Tuesday', value: '10:00 - 02:00', closed: false },
    { dayTR: 'Çarşamba', dayEN: 'Wednesday', value: '10:00 - 02:00', closed: false },
    { dayTR: 'Perşembe', dayEN: 'Thursday', value: '10:00 - 02:00', closed: false },
    { dayTR: 'Cuma', dayEN: 'Friday', value: '10:00 - 02:00', closed: false },
    { dayTR: 'Cumartesi', dayEN: 'Saturday', value: '10:00 - 02:00', closed: false },
    { dayTR: 'Pazar', dayEN: 'Sunday', value: 'Kapalı', valueEN: 'Closed', closed: true },
  ],
  social: {
    instagram: 'https://www.instagram.com/fethiyekavurmacisi/',
    facebook: 'https://www.facebook.com/profile.php?id=61577014082974',
    twitter: '',
    tripadvisor: '',
  },
  stats: {
    years: 30,
    dailyGuests: 500,
    googleRating: 4.9,
    reviewCount: 342,
  },
} as const;

export const WHATSAPP_LINK = `https://wa.me/${SITE_CONFIG.whatsapp}`;
export const TEL_LINK = `tel:${SITE_CONFIG.phone}`;
export const MAIL_LINK = `mailto:${SITE_CONFIG.email}`;
