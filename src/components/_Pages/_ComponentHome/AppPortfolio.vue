<script>
import { storeData } from '../../../store';
import AppCardPort from '../_Common/AppCardPort.vue';
export default {
    data() {
        return {
            storeData,
        };
    },
    components: { AppCardPort }
}
</script>

<template>
    <div class="containerFeaturedWork">
        <div class="containerTopFeatWork">
            <h2>Portfolio</h2>
            <router-link to="/portfolio"><span href="">View All</span></router-link>
        </div>
        <div class="containerFeaturedWorkSlider">
            <div class="cardsPortflolio" v-for="item in storeData.datasPortfolioCards" :key="item.title">




               <AppCardPort :img="item.img" :brand="item.brand" :price4h="item.price4h" :title="item.title"/>








            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>