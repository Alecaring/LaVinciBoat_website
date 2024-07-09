<script>
import { storeData } from '../../store.js';
export default {
  data() {
    return {
      storeData,
      arr: [
        { name: 'Home', source: 'Home' },
        { name: 'Portfolio', source: 'Portfolio' },
        { name: 'About', source: 'About' },
        { name: 'Contact', source: 'Contact' },
      ],
      socialsNavArr: [
        { icon: 'fa-brands fa-instagram', href: '#', name: 'Instagram' },
        { icon: 'fa-brands fa-facebook-f', href: '#', name: 'Facebook' },
        { icon: 'fa-brands fa-pinterest-p', href: '#', name: 'Pinterest' },
        { icon: 'fa-brands fa-youtube', href: '#', name: 'Youtube' },
        { icon: 'fa-brands fa-linkedin-in', href: '#', name: 'Linkedin' },
      ],
    };
  },
  methods: {
    openNavMenu() {
      this.storeData.isActive = !this.storeData.isActive;
    },
  },
};
</script>



<template>
  <div class="navContainer">
    <nav>
      <ul>
        <li>
          <router-link class="titleLink" to="/">
            <span>
              La Vinci <span>Yatch</span><sup>®</sup>
            </span>
          </router-link>

        </li>
        <li @click="openNavMenu"><i class="fa-solid fa-bars-staggered"></i></li>
      </ul>
    </nav>
  </div>
  <!-- ------------------------- -->
  <transition name="menu-transition">
    <div class="hiddenLinkContainer" v-if="storeData.isActive">
      <nav class="hiddenLink">
        <ul>
          <li v-for="(item, index) in arr" :key="index">
            <router-link @click="openNavMenu" class="li" :to="{ name: item.source }">{{ item.name }}</router-link>
          </li>
        </ul>
      </nav>
      <div class="HiddenLinkSocial">
        <nav>
          <div class="innerContainerHiddenLinkSocial" v-for="(socialIcon, index) in socialsNavArr" :key="index">
            <i :class="socialIcon.icon"></i>
          </div>
        </nav>
      </div>
    </div>
  </transition>
</template>
  

  
<style lang="scss" scoped>  .hiddenLinkContainer {
    overflow: hidden;
  }

  .menu-transition-enter-active,
  .menu-transition-leave-active {
    transition: all .5s ease;
  }

  .menu-transition-enter,
  .menu-transition-leave-to {
    transform: translateY(-20px);
    opacity: 0;
  }

  .menu-transition-leave-active {
    transform: translateY(20px);
  }
</style>
  