<script>
import { storeData } from '../../store.js';

export default {
  data() {
    return {
      componentKey: 0,
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
    changeLanguage(lang) {
      // Salvare la lingua nel localStorage
      localStorage.setItem('language', lang);

      // Cambiare la lingua
      this.$i18n.locale = lang;

      // Ricaricare la pagina per applicare le modifiche
      window.location.reload();
    }
  },
  created() {
    // Recuperare la lingua dal localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      this.$i18n.locale = savedLanguage;
    }
  }
};
</script>

<template>
  <div class="navContainer" :key="componentKey">
    <nav>
      <ul>
        <li>
          <router-link class="titleLink" to="/">
            <span>
              La Vinci <span>Yacht</span><sup>®</sup>
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
      <div class="LangContainer">
        <div>
          <span class="rounded" @click="changeLanguage('en')">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_the_United_Kingdom_Square.svg" alt="">
          </span>
        </div>
        <div>
          <span class="rounded" @click="changeLanguage('it')">
            <img src="https://vectorflags.s3.amazonaws.com/flags/it-square-01.png" alt="">
          </span>
        </div>
      </div>

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

<style lang="scss" scoped>
.hiddenLinkContainer {
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

.LangContainer {
  color: white;
  display: flex;
  gap: 1.5rem;
  .rounded {
    position: relative;
    width: 50px;
    height: 50px;
    background-color: #fff;
    display: flex;
    border-radius: 50%;
    overflow: hidden;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 100%;
    }
  }
}
</style>
