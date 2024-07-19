<script>
import { storeData } from '../../store.js';
import AppBanner from './_ComponentHome/AppBanner.vue';
import AppVideo from './_ComponentHome/AppVideo.vue';
import AppPortfolio from './_ComponentHome/AppPortfolio.vue';
import AppSliderBrands from './_ComponentHome/AppSliderBrands.vue';
import AppWhatsOnBoard from './_ComponentHome/AppWhatsOnBoard.vue';
import AppPicsOf from './_ComponentHome/AppPicsOf.vue';
import AppFooter from './_Common/AppFooter.vue';


export default {
  components:
  {
    AppBanner,
    AppVideo,
    AppPortfolio,
    AppSliderBrands,
    AppWhatsOnBoard,
    AppPicsOf,
    AppFooter
  },
  data() {
    return {

      storeData,

    };
  },
};
</script>

<template>
  <div class="HomePage" v-if="storeData.flag === false" :class="storeData.isActive === true ? 'none' : ''">
    <AppBanner />
    <!-- ---------------------- -->
    <AppVideo />
    <!-- ---------------------- -->
    <AppPortfolio />
    <!-- ---------------------- -->
    <AppSliderBrands />
    <!-- ------------------------------- -->
    <AppWhatsOnBoard />
    <!-- ----------------------------- -->
    <AppPicsOf/>
    <!-- ----------------------------- -->
    <AppFooter/>
  </div>
</template>

<style lang="scss" scoped>

.HomePage::-webkit-scrollbar {
  display: none;
}
.HomePage {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
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
</style>
