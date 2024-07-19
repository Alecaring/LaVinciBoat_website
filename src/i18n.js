import { createI18n } from 'vue-i18n';

// .................................
const messages = {
  en: {
    helloInitial: 'Hello',
    messaggioBannerHome1: 'Elegance and ',
    messaggioBannerHome2: 'adventure ',
    messaggioBannerHome3: 'on board.',  
    contactSay: 'Say',
    contactBooking: 'Booking',
    contactCarriers: 'Careers',
    sliderBrandsTitle1: "Sperimenta l'eleganza pura,",
    sliderBrandsTitle2: 'Prestigio e comodità.',
    sliderBrandsPara: 'Discover the excellence of our luxury fleet. Every journey is a symphony of elegance, comfort, and adventure. From crystal-clear waters to breathtaking views, we offer you an unforgettable experience. Let our professional crew take care of every detail, allowing you to relax and enjoy the trip of a lifetime. Customize every moment with our exclusive and premium services. With us, every desire becomes a reality.',
    sliderBrandsDiscass: "Let's Talk",



    words: {
      "exclusivity": "Exclusivity",
      "elegance": "Elegance",
      "prestige": "Prestige",
      "sophistication": "Sophistication",
      "comfort": "Comfort",
      "luxury": "Luxury",
      "adventure": "Adventure",
      "unforgettable": "Unforgettable",
      "customized": "Customized",
      "excellence": "Excellence"
  }
  },
  it: {
    helloInitial: 'Ciao',
    messaggioBannerHome1: 'Eleganza e ',
    messaggioBannerHome2: 'avventura ',
    messaggioBannerHome3: 'a bordo.',
    contactSay: 'Saluta',
    contactBooking: 'Prenotazioni',
    contactCarriers: 'Lavora con Noi',
    sliderBrandsTitle1: 'Experience Pure Elegance,',
    sliderBrandsTitle2: 'Prestige, and Comfort.',
    sliderBrandsPara: "Scopri l'eccellenza della nostra flotta di lusso. Ogni viaggio è una sinfonia di eleganza, comfort e avventura. Dalle acque cristalline ai panorami mozzafiato, ti offriamo un'esperienza indimenticabile. Lascia che il nostro equipaggio professionale si prenda cura di ogni dettaglio, permettendoti di rilassarti e goderti il ​​viaggio di una vita. Personalizza ogni momento con i nostri servizi esclusivi e premium. Con noi ogni desiderio diventa realtà.",
    sliderBrandsDiscass: 'Discutiamone',


    words: {
      "exclusivity": "Esclusività",
      "elegance": "Eleganza",
      "prestige": "Prestigio",
      "sophistication": "Sofisticazione",
      "comfort": "Comfort",
      "luxury": "Lusso",
      "adventure": "Avventura",
      "unforgettable": "Indimenticabile",
      "customized": "Personalizzato",
      "excellence": "Eccellenza"
  }
  }
};
// .................................

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

export { i18n };
