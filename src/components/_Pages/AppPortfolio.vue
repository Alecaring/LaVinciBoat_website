<template>
  <div :class="storeData.isActive === true ? 'none' : ''">
    <div>
      <div class="containerPortfolioBannerTitle">
        <h1>Portfolio<sub>®</sub></h1>
      </div>
      <div class="PortfolioBannerPills">
        <div v-for="item in navLinks" :key="item.adv" @click="clickChangeLink(item.adv)">
          <h5 :class="{ active: item.adv === activeLink }">{{ item.adv }}</h5>
        </div>
      </div>
      <!-- ---------------------------------- -->
      <div class="containerCardPortfolio">
        <div class="cardsPortflolio" v-for="item in filteredPortfolioCards" :key="item.title">
          <div class="card">
            <div class="cardHead">
              <img :src="item.img" alt="">
            </div>
            <div class="cardFooter">
              <span>{{ item.title }}</span>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- ---------------------------------- -->
    </div>
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

<script>
import { storeData } from '../../store.js';

export default {
  data() {
    return {
      storeData,
      navLinks: [
        { adv: 'Discover All' },
        { adv: 'Polignano' },
        { adv: 'Myconos' },
        { adv: 'Zante' },
        { adv: 'Isole Tremiti' },
        { adv: 'Gallipoli' },
      ],
      activeLink: 'Discover All',
      datasPortfolioCards: [
        {
          where: 'Polignano',
          img: '1.png',
          title: 'Polignano a Mare',
          description: 'Polignano Description'
        },
        {
          where: 'Myconos',
          img: '2.png',
          title: 'Myconos',
          description: 'Myconos Description'
        },
        {
          where: 'Zante',
          img: '3.png',
          title: 'Zante',
          description: 'Zante Description'
        },
        {
          where: 'Isole Tremiti',
          img: '4.png',
          title: 'Isole Tremiti',
          description: 'Isole Tremiti Description'
        },
        {
          where: 'Gallipoli',
          img: '6.png',
          title: 'Gallipoli',
          description: 'Gallipoli Description'
        }
      ],
    }
  },
  computed: {
    filteredPortfolioCards() {
      if (this.activeLink === 'Discover All') {
        return this.datasPortfolioCards;
      } else {
        return this.datasPortfolioCards.filter(card => card.where === this.activeLink);
      }
    }
  },
  methods: {
    clickChangeLink(link) {
      this.activeLink = link;
    }
  },
}
</script>

<style lang="scss" scoped>
.active {
  color: rgb(0, 0, 0);
  background-color: #fff;
}

.containerCardPortfolio {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 4rem 0;
  gap: 2rem;
}

.cardsPortflolio {
  color: white;
  position: relative;

  .cardHead {
    img {
      border-radius: 1rem;
    }
  }
  
  .cardFooter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.322);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 1rem;

    span {
      background-color: transparent;
      font-size: 2rem;
    }
    p {
      background-color: transparent;
    }
  }
}
</style>
