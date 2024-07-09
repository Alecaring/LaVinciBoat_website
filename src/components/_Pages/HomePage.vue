<script>
import { storeData } from '../../store.js';
import AppBanner from './_ComponentHome/AppBanner.vue';


export default {
  components: { AppBanner, },
    data() {
        return {
            expandedCardFree: false,
            freeItems: [
                { name: "Equipaggio Professionale (Capitano, Equipaggio di coperta, Cuoco/chef)", short: "Equipaggio", icon: "fas fa-user-check", included: true },
                { name: "Pulizia giornaliera", short: "Pulizia", icon: "fas fa-broom", included: true },
                { name: "Biancheria da letto e da bagno", short: "Biancheria", icon: "fas fa-bed", included: true },
                { name: "Articoli da toeletta di alta qualità", short: "Toeletta", icon: "fas fa-soap", included: true },
                { name: "Colazione, pranzo e cena", short: "Pasti", icon: "fas fa-utensils", included: true },
                { name: "Snack e bevande analcoliche", short: "Snack", icon: "fas fa-coffee", included: true },
                { name: "Acqua potabile", short: "Acqua", icon: "fas fa-water", included: true },
                { name: "Attrezzatura per snorkeling", short: "Snorkeling", icon: "fas fa-mask", included: true },
                { name: "Kayak e paddleboard", short: "Kayak", icon: "fas fa-kayak", included: true },
                { name: "Giochi da tavolo e libri", short: "Giochi", icon: "fas fa-chess", included: true },
                { name: "TV satellitare e sistema di intrattenimento", short: "Intrattenimento", icon: "fas fa-tv", included: true },
                { name: "Trasferimenti da e per l'aeroporto", short: "Trasferimenti", icon: "fas fa-shuttle-van", included: true },
                { name: "Wi-Fi a bordo", short: "Wi-Fi", icon: "fas fa-wifi", included: true },
                { name: "Sistema di navigazione avanzato", short: "Navigazione", icon: "fas fa-compass", included: true },
                { name: "Equipaggiamento di sicurezza completo", short: "Sicurezza", icon: "fas fa-life-ring", included: true }
            ],
            premiumItems: [
                { name: "Pianificazione di itinerari personalizzati", short: "Itinerari", icon: "fas fa-map-marked-alt", included: false },
                { name: "Prenotazione di ristoranti e eventi", short: "Prenotazioni", icon: "fas fa-calendar-alt", included: false },
                { name: "Escursioni a terra organizzate", short: "Escursioni", icon: "fas fa-hiking", included: false },
                { name: "Menu gourmet personalizzati", short: "Gourmet", icon: "fas fa-utensils", included: false },
                { name: "Bevande alcoliche di alta qualità", short: "Bevande", icon: "fas fa-glass-martini-alt", included: false },
                { name: "Champagne e vini pregiati", short: "Champagne", icon: "fas fa-wine-bottle", included: false },
                { name: "Jetski e motoscafi", short: "Jetski", icon: "fas fa-water", included: false },
                { name: "Immersioni subacquee con istruttore", short: "Immersioni", icon: "fas fa-swimmer", included: false },
                { name: "Parasailing", short: "Parasailing", icon: "fas fa-parachute-box", included: false },
                { name: "Attrezzatura per pesca sportiva", short: "Pesca", icon: "fas fa-fish", included: false },
                { name: "Massaggi e trattamenti spa", short: "Spa", icon: "fas fa-spa", included: false },
                { name: "Personal trainer e yoga", short: "Trainer", icon: "fas fa-dumbbell", included: false },
                { name: "Sauna e jacuzzi", short: "Sauna", icon: "fas fa-hot-tub", included: false },
                { name: "Organizzazione di feste e eventi a tema", short: "Eventi", icon: "fas fa-music", included: false },
                { name: "Musica dal vivo e DJ", short: "Musica", icon: "fas fa-headphones", included: false },
                { name: "Fotografo e videomaker a bordo", short: "Fotografo", icon: "fas fa-camera", included: false },
                { name: "Traduttore personale", short: "Traduttore", icon: "fas fa-language", included: false },
                { name: "Assistenza medica privata", short: "Medica", icon: "fas fa-user-md", included: false }
            ],
            storeData,
            activeIndex: 0,
            
            FeaturedWorkArray: [
                {
                    img: '1.png',
                    title: 'Hot Type',
                    description: 'Red hot type animations'
                },
                {
                    img: '2.png',
                    title: 'Alterscopo',
                    description: 'Web3 risks in real time'
                },
                {
                    img: '3.png',
                    title: 'Hot Type',
                    description: 'Red hot type animations'
                },
                {
                    img: '4.png',
                    title: 'Alterscopo',
                    description: 'Web3 risks in real time'
                },
                {
                    img: '5.png',
                    title: 'Hot Type',
                    description: 'Red hot type animations'
                },
                {
                    img: '6.png',
                    title: 'Alterscopo',
                    description: 'Web3 risks in real time'
                },
            ],
            cards: [
                { img: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1719792000&semt=ais_user' },
                { img: 'https://st2.depositphotos.com/1810600/5838/v/450/depositphotos_58387439-stock-illustration-abstract-vector-logo.jpg' },
                { img: 'https://media.istockphoto.com/id/1331491686/it/vettoriale/progettazione-degli-elementi.jpg?s=612x612&w=0&k=20&c=cyIAEi8Lre1uFRUcMyWJP-GgbfRCA-dKlwpbQ0ZrFeE=' },
                { img: 'https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg' },
                { img: 'https://media.istockphoto.com/id/1313644269/it/vettoriale/modello-di-logo-stella-cerchio-oro-e-argento.jpg?s=612x612&w=0&k=20&c=ghO_oBuygdYu7OZP-ik4rz3khCaDSXTRRxJP5-Cgtac=' },
                { img: 'https://img.freepik.com/free-vector/gradient-quill-pen-logo-with-tagline-template_23-2149813051.jpg' },
            ],
            
        };
    },
    computed: {
        limitedFreeItems() {
            return this.freeItems.slice(0, 5);
        },
        limitedpremiumItems() {
            return this.premiumItems.slice(0, 5);
        }
    },
    methods: {
        getCardStyle(index) {
            const angle = (index - this.activeIndex) * 40; // Puoi regolare questo valore per cambiare l'angolo
            const isMiddle = index === this.activeIndex;
            return {
                transform: `rotateY(${angle}deg) translateZ(220px)`,
                opacity: isMiddle ? 1 : 0.5, // Regola l'opacità per migliorare l'effetto visivo
                transition: 'transform 1s, opacity 1s',
                zIndex: isMiddle ? 1 : 0,
            };
        },
        rotateCards() {
            this.activeIndex = (this.activeIndex + 1) % this.cards.length;
        },
        changeWhatsOnBoars() {
            this.expandedCardFree = !this.expandedCardFree;
        }
    },
    mounted() {
        setInterval(this.rotateCards, 3000);
    },
    
};
</script>

<template>
  <div :class="storeData.isActive === true ? 'none' : ''">
    
    <AppBanner/>
    <!-- ---------------------- -->
    <div class="containerVideoBanner">
      <video autoplay loop muted>
        <source src="/Seashore.mp4" type="video/mp4">
        <source src="/Seashore.mp4" type="video/webm">
        Il tuo browser non supporta il tag video.
      </video>
    </div>
    <!-- ---------------------- -->
    <div class="containerFeaturedWork">
      <div class="containerTopFeatWork">
        <h2>Portfolio</h2>
        <a href="/Portfolio">View All</a>
      </div>
      <div class="containerFeaturedWorkSlider">

        <div v-for="item in FeaturedWorkArray" class="FeatWorkCards">

          <div class="FeatWorkCardsImgCont">
            <img :src="item.img" alt="">
          </div>

          <div class="FeatWorkCardsTxtCont">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>

        </div>


      </div>
    </div>
    <!-- ---------------------- -->
    <div>
      <div class="containerCollaboration">
        <h2>Experience Pure Elegance, <br>
          Prestige, and Comfort.</h2>
      </div>

      <div class="slider">
        <div class="slider__container">
          <div v-for="(card, index) in cards" :key="index" class="card" :style="getCardStyle(index)">
            <img :src="card.img" alt="Card Image" />
          </div>
        </div>
      </div>

      <div class="contenitorCollabBottomDescription">
        <p>
          Discover the excellence of our luxury fleet. Every journey is a symphony of elegance, comfort, and adventure.
          From crystal-clear waters to breathtaking views, we offer you an unforgettable experience.
          Let our professional crew take care of every detail, allowing you to relax and enjoy the trip of a lifetime.
          Customize every moment with our exclusive and premium services.
          With us, every desire becomes a reality.
        </p>
        <a href="/About">
          <div class="contenitorUnderCollabBottomDescription">
            <span>Let's Talk</span>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </a>

      </div>
    </div>
    <!-- ------------------------------- -->

    <div class="sectionWhatsOnBoard">
      <div class="titleContainer">
        <h3>Whats On Board</h3>
      </div>




      <div class="CardWhatsOnBoardContainer">

        <div @click="changeWhatsOnBoars" :class="expandedCardFree ? 'alessio' : 'antonio'"
          class="freeCardWhatsOnBoardContainer">


          <div :class="expandedCardFree ? 'containerTxtfreeCardWhatsOnBoard' : 'containerTxtfreeCardWhatsOnBoardClosed'"
            v-for="item in limitedFreeItems">

            <i :class="item.icon"></i>
            <span v-if="expandedCardFree">{{ item.short }}</span>

          </div>

        </div>

        <div @click="changeWhatsOnBoars" :class="expandedCardFree === false ? 'alessio' : 'antonio'"
          class="PremiumCardWhatsOnBoardContainer">
          <div :class="expandedCardFree ? 'containerTxtfreeCardWhatsOnBoardClosed' : 'containerTxtfreeCardWhatsOnBoard'"
            v-for="item in limitedpremiumItems">


            <span v-if="expandedCardFree === false">{{ item.short }}</span>
            <i :class="item.icon"></i>

          </div>
        </div>

      </div>
      <div class="ContainerWhatsOnBoardDiscover">

        <span>Discover all Services</span>
        <i class="fa-solid fa-arrow-right"></i>

      </div>


















    </div>
    <!-- ----------------------------- -->
    <div class="containerFeaturedWork">

      <div class="containerFeaturedWorkSlider">


        <div v-for="item in FeaturedWorkArray" class="FeatWorkCards">
          <img :src="item.img" alt="">
        </div>


      </div>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quia ullam quibusdam excepturi aspernatur quia
        ullam quibusdam excepturi aspernatur.
      </p>
      <div class="contenitorUnderCollabBottomDescription">
        <span>Let's Talk</span>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
    <!-- ----------------------------- -->
    <div>
      <div class="footerContainerHomePage">
        <h4>Footer<sub>®</sub></h4>
      </div>

      <div class="containerBottomFooterHomePge">
        <p>Small is Beautiful</p>
        <p>La Vinci Yatch® - All Right Reserved - Privacy Policy</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.word-slider {
  display: inline-block;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .8s ease-in-out, transform .7s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(4px);
}

// ................


.slider {
  perspective: 1000px;
  width: 300px;
  /* Regola la larghezza in base alle tue necessità */
  height: 200px;
  /* Regola l'altezza in base alle tue necessità */
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  /* Aggiungi questa riga per nascondere gli overflow */
}

.slider__container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 150px;
  /* Assicurati che la larghezza sia appropriata */
  height: 150px;
  /* Assicurati che l'altezza sia appropriata */
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
