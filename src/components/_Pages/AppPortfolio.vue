<template>
  <div v-if="storeData.flag === false" :class="storeData.isActive === true ? 'none' : ''">
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
          
          <AppCardPort :img="item.img" :brand="item.brand" :price4h="item.price4h" :title="item.title"/>

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
import AppCardPort from './_Common/AppCardPort.vue';

export default {
    data() {
        return {
            storeData,
            navLinks: [
                { adv: 'Discover All' },
                { adv: 'Polignano' },
                { adv: 'Leuca' },
                { adv: 'Otranto' },
                { adv: 'Isole Tremiti' },
                { adv: 'Gallipoli' },
            ],
            activeLink: 'Discover All',
            datasPortfolioCards: [
                {
                    where: 'Polignano',
                    img: 'https://www.grottapalazzese.it/wp-content/uploads/2019/06/Grotta-esterno-x-camere.jpg',
                    title: 'Polignano',
                    description: 'Polignano Description',
                    price4h: '900',
                    price6h: '1200',
                    priceNight: '2000',
                    brand: 'La Vinci Yacht'
                },
                {
                    where: 'Leuca',
                    img: 'https://tourismmedia.italia.it/is/image/mitur/20220404110036-santa-maria-di-leuca-puglia-shutterstock-685007158?wid=1080&hei=660&fit=constrain,1&fmt=webp',
                    title: 'Leuca',
                    description: 'Myconos Description',
                    price4h: '900',
                    price6h: '1200',
                    priceNight: '2000',
                    brand: 'La Vinci Yacht'
                },
                {
                    where: 'Otranto',
                    img: 'https://images.placesonline.com/photos/otranto_guida__1613587620.jpg',
                    title: 'Otranto',
                    description: 'Zante Description',
                    price4h: '900',
                    price6h: '1200',
                    priceNight: '2000',
                    brand: 'La Vinci Yacht'
                },
                {
                    where: 'Isole Tremiti',
                    img: 'https://www.puglia.com/wp-content/uploads/2020/09/cala-pagliai-isole-tremiti-1200x796.jpg',
                    title: 'Isole Tremiti',
                    description: 'Isole Tremiti Description',
                    price4h: '900',
                    price6h: '1200',
                    priceNight: '2000',
                    brand: 'La Vinci Yacht'
                },
                {
                    where: 'Gallipoli',
                    img: 'https://www.dltviaggi.it/immagine/28190/w_854-h_569/gallipoli.jpg',
                    title: 'Gallipoli',
                    description: 'Gallipoli Description',
                    price4h: '900',
                    price6h: '1200',
                    priceNight: '2000',
                    brand: 'La Vinci Yacht'
                }
            ],
        };
    },
    computed: {
        filteredPortfolioCards() {
            if (this.activeLink === 'Discover All') {
                return this.storeData.datasPortfolioCards;
            }
            else {
                return this.storeData.datasPortfolioCards.filter(card => card.where === this.activeLink);
            }
        }
    },
    methods: {
        clickChangeLink(link) {
            this.activeLink = link;
        }
    },
    components: { AppCardPort }
}
</script>

<style lang="scss" scoped>
.active {
  color: rgb(0, 0, 0);
  background-color: #fff;
}


</style>
