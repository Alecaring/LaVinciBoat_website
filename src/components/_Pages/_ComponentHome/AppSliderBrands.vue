<script>
export default {
    data() {
        return {
            activeIndex: 0,
            cards: [
                { img: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1719792000&semt=ais_user' },
                { img: 'https://st2.depositphotos.com/1810600/5838/v/450/depositphotos_58387439-stock-illustration-abstract-vector-logo.jpg' },
                { img: 'https://media.istockphoto.com/id/1331491686/it/vettoriale/progettazione-degli-elementi.jpg?s=612x612&w=0&k=20&c=cyIAEi8Lre1uFRUcMyWJP-GgbfRCA-dKlwpbQ0ZrFeE=' },
                { img: 'https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg' },
                { img: 'https://media.istockphoto.com/id/1313644269/it/vettoriale/modello-di-logo-stella-cerchio-oro-e-argento.jpg?s=612x612&w=0&k=20&c=ghO_oBuygdYu7OZP-ik4rz3khCaDSXTRRxJP5-Cgtac=' },
                { img: 'https://img.freepik.com/free-vector/gradient-quill-pen-logo-with-tagline-template_23-2149813051.jpg' },
            ],

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
        
    },
    mounted() {
        setInterval(this.rotateCards, 3000);
    },
}
</script>


<template>
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
                Discover the excellence of our luxury fleet. Every journey is a symphony of elegance, comfort, and
                adventure.
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
</template>

<style lang="scss" scoped>
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