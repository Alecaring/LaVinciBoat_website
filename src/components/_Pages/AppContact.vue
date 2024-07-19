<script>
import { storeData } from '../../store.js';
import AppPortfolio from './_ComponentHome/AppPortfolio.vue';

export default {
  components: { AppPortfolio },
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
<div v-if="storeData.flag === false" :class="storeData.isActive === true ? 'none' : ''">
  <div>
    <div>
      <div class="containerBannerContacts">
        <h2>
          {{ $t('contactSay') }}
          <transition name="fade" mode="out-in">
            <span class="word-sliderContact" :key="currentWord.name">
              {{ currentWord.name }}
            </span>
          </transition>
        </h2>
      </div>
    </div>

    <div class="containerMailBooking">
      <h4>{{ $t('contactBooking') }}</h4>
      <a href="mailto:mail@gmail.com">LaVinciYatch@Booking.com</a>
    </div>

    <div class="containerMailCareers">
      <h4>{{ $t('contactCarriers') }}</h4>
      <a href="mailto:mail@gmail.com">LaVinciYatch@Careers.com</a>
    </div>
  </div>
  <!-- ------------------ -->
  <AppPortfolio/>
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