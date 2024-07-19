<script>
import AppHeader from './components/_Header/AppHeader.vue';
import { storeData } from './store';

export default {
  components: { AppHeader },
  data() {
    return {
      storeData,
      
    }
  },
  
  mounted() {
    setTimeout(() => {
      this.storeData.flag = false;
    }, 4000);
  },
}
</script>

<template>
  <div>

    <div v-if="storeData.flag" class="wrapper">
      <svg>
        <text x="50%" y="50%" dy=".35em" text-anchor="middle">
          {{ $t('helloInitial') }}
        </text>
      </svg>
    </div>

    <AppHeader />
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Sacramento&display=swap");

svg {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 100%;
  height: 100%;
}

svg text {
  animation: stroke 4s infinite alternate;
  stroke-width: 2;
  stroke: #ffffff;
  font-size: 30vw;
}

@keyframes stroke {
  0% {
    fill: rgba(72, 138, 204, 0);
    stroke: rgb(255, 255, 255);
    stroke-dashoffset: 25%;
    stroke-dasharray: 0 50%;
    stroke-width: 2;
  }

  70% {
    fill: rgba(72, 138, 204, 0);
    stroke: rgb(255, 255, 255);
  }

  80% {
    fill: rgba(72, 138, 204, 0);
    stroke: rgb(255, 255, 255);
    stroke-width: 3;
  }

  100% {
    fill: rgba(255, 0, 0, 0.731);
    stroke: rgba(54, 95, 160, 0);
    stroke-dashoffset: -25%;
    stroke-dasharray: 50% 0;
    stroke-width: 0;
  }
}

.wrapper {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80vh;
}
</style>