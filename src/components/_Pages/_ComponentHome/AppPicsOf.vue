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
        <div class="containerFeaturedWorkSlider">
            <div v-for="item in FeaturedWorkArray" class="FeatWorkCards">
                <img :src="item.img" alt="">
            </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quia ullam quibusdam excepturi aspernatur quia
            ullam quibusdam excepturi aspernatur.
        </p>
        <div class="contenitorUnderCollabBottomDescription">
            <span>Let's Talk</span>
            <i class="fa-solid fa-arrow-right"></i>
        </div>
    </div>
</template>

<style lang="scss"scoped></style>