<script>
export default {
  data() {
    return {
      currentIndex: 0,
      changeWordsArray: [
        { name: 'Exclusivity®' },
        { name: 'Elegance®' },
        { name: 'Prestige®' },
        { name: 'Sophistication®' },
        { name: 'Comfort®' },
        { name: 'Luxury®' },
        { name: 'Adventure®' },
        { name: 'Unforgettable®' },
        { name: 'Customized®' },
        { name: 'Excellence®' }
      ],
      FeaturedWorkArray: [
      {
        img: 'Hot_Type_Featured-567x709.jpg',
        title: 'Hot Type',
        description: 'Red hot type animations'
      },
      {
        img: 'alterscope_slider-7-567x655.png',
        title: 'Alterscopo',
        description: 'Web3 risks in real time'
      },
      // {
      //   img: '',
      //   title: '',
      //   description: ''
      // },
      // {
      //   img: '',
      //   title: '',
      //   description: ''
      // },
      // {
      //   img: '',
      //   title: '',
      //   description: ''
      // },
      // {
      //   img: '',
      //   title: '',
      //   description: ''
      // },
      // {
      //   img: '',
      //   title: '',
      //   description: ''
      // },
      // {
      //   img: '',
      //   title: '',
      //   description: ''
      // },
      // {
      //   img: '',
      //   title: '',
      //   description: ''
      // },
      // {
      //   img: '',
      //   title: '',
      //   description: ''
      // },
      // {
      //   img: '',
      //   title: '',
      //   description: ''
      // },
      ],
      cards: [
        {
          img: 'logo collab',
        },
        {
          img: 'logo collab',
        },
        {
          img: 'logo collab',
        },
        {
          img: 'logo collab',
        },
        {
          img: 'logo collab',
        },
        {
          img: 'logo collab',
        },
        {
          img: 'logo collab',
        },
      ],
      activeIndex: 0,
    };
  },
  computed: {
    currentWord() {
      return this.changeWordsArray[this.currentIndex];
    }
  },
  methods: {
    nextWord() {
      this.currentIndex = (this.currentIndex + 1) % this.changeWordsArray.length;
    },
    getCardStyle(index) {
      const angle = (index - this.activeIndex) * 72;
      return {
        transform: `rotateY(${angle}deg) translateZ(150px)`,
        zIndex: index === this.activeIndex ? 1 : 0,
        transition: 'transform 0.5s, z-index 0.5s',
        transform: index === this.activeIndex ? `rotateY(${angle}deg) translateZ(200px) scale(1.2)` : `rotateY(${angle}deg) translateZ(150px) scale(1)`,
      };
    },
    rotateCards() {
      this.activeIndex = (this.activeIndex + Math.floor(Math.random() * this.cards.length)) % this.cards.length;
    },
  },
  mounted() {
    this.wordInterval = setInterval(this.nextWord, 1500);
    setInterval(this.rotateCards, 3000);

  },
  beforeDestroy() {
    clearInterval(this.wordInterval);
  }
};
</script>

<template>
  <div class="containerBanner">
    <h2>
      Design Trip <br>
      for Timeless <br>
      <transition name="fade" mode="out-in">
        <span class="word-slider" :key="currentWord.name">
          {{ currentWord.name }}
        </span>
      </transition>
    </h2>
  </div>
  <!-- ---------------------- -->
  <div class="containerVideoBanner">
    <video poster="https://studio-size.com/wp-content/uploads/2024/06/Reel-Preview-2.gif" muted="" loop="" playsinline=""
      src="https://player.vimeo.com/progressive_redirect/playback/953957232/rendition/1080p/file.mp4?loc=external&amp;log_user=0&amp;signature=83883f7f7a50c6aeb64e3b1b1f466615177dae78f2295dc7a57d51752c5b712a"
      preload="metadata"></video>
  </div>
  <!-- ---------------------- -->
  <div class="containerFeaturedWork">
    <div class="containerTopFeatWork">
      <h2>Featured Work</h2>
      <a>view All</a>
    </div>
    <div class="containerFeaturedWorkSlider">

      <div v-for="item in FeaturedWorkArray" class="FeatWorkCards">
        <img :src="item.img" alt="">
        <h3>{{item.title}}</h3>
        <p>{{ item.description }}</p>
      </div>
      

    </div>
  </div>
  <!-- ---------------------- -->
  <div>
    <div class="containerCollaboration">
      <h2>Bacl to the simple, <br>
          intuitive and <br>
          inspiring.
      </h2>
    </div>
    <div class="slider">
    <div class="slider__container" :style="containerStyle">
      <div 
        v-for="(card, index) in cards" 
        :key="index" 
        class="card" 
        :style="getCardStyle(index)"
      >
        {{ card.img }}
      </div>
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
  transition: opacity .5s ease-in-out, transform 1s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(4px);
}
// ................


.slider {
  perspective: 700px;
  width: 100%;
  position: relative;
  height: 50vh;


}

.slider__container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-style: preserve-3d;


}

.card {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 40%;
  background-color: #3498db;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border-radius: 1rem;
  transform-origin: 50% 50%;
}
</style>
