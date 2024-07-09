<script>
import { storeData } from '../../store.js';

export default {
  data() {
    return {
      storeData,
      currentIndex: 0,
      changeWordsArray: [
        { name: 'Hello!' },
        { name: '你好!' },
        { name: '¡Hola!' },
        { name: 'नमस्ते!' },
        { name: '!مرحبا' },
        { name: 'Olá!' },
        { name: 'Привет!' },
        { name: 'こんにちは!' },
        { name: 'Ciao!' },
      ],
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
      whatsOnBoardArray: [
        { component: "Wather", pro: false },
        { component: "champain", pro: true },
        { component: "glasses", pro: false },
        { component: "apetizer", pro: true },
        { component: "telos", pro: true },
        { component: "capitan", pro: false },
        { component: "assistents", pro: false },

      ],
    }
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
  },
  mounted() {
    this.wordInterval = setInterval(this.nextWord, 1500);
  },
  beforeDestroy() {
    clearInterval(this.wordInterval);
  }

}
</script>

<template>
<div :class="storeData.isActive === true ? 'none' : ''">
  <div>
    <div>
      <div class="containerBannerContacts">
        <h2>
          Say
          <transition name="fade" mode="out-in">
            <span class="word-sliderContact" :key="currentWord.name">
              {{ currentWord.name }}
            </span>
          </transition>
        </h2>
      </div>
    </div>

    <div class="containerMailBooking">
      <h4>Booking</h4>
      <a href="mailto:mail@gmail.com">LaVinciYatch@Booking.com</a>
    </div>

    <div class="containerMailCareers">
      <h4>Careers</h4>
      <a href="mailto:mail@gmail.com">LaVinciYatch@Careers.com</a>
    </div>
  </div>
  <!-- ------------------ -->
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
    <!-- ------------------ -->
    
    <!-- ------------------ -->
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

<style lang="scss" scoped></style>