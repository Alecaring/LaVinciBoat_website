<script>
export default {
    data() {
        return {
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
        }
    },
}
</script>

<template>
    <div class="containerFeaturedWork">
        <div class="containerTopFeatWork">
            <h2>Portfolio</h2>
            <router-link to="/portfolio"><span href="">View All</span></router-link>
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
</template>

<style lang="scss" scoped></style>