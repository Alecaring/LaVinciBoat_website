<script>
export default {
    data() {
        return {
            currentIndex: 0,

            changeWordsArray:
                [
                    { name: 'Exclusivity', super: '®' },
                    { name: 'Elegance', super: '®' },
                    { name: 'Prestige', super: '®' },
                    { name: 'Sophistication', super: '®' },
                    { name: 'Comfort', super: '®' },
                    { name: 'Luxury', super: '®' },
                    { name: 'Adventure', super: '®' },
                    { name: 'Unforgettable', super: '®' },
                    { name: 'Customized', super: '®' },
                    { name: 'Excellence', super: '®' }
                ],
        }
    },
    computed: {
        currentWord() {
            return this.changeWordsArray[this.currentIndex];
        },
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
    <div class="containerBanner">
        <h2>
            Design Trip <br>
            for Timeless <br>
            <transition name="fade" mode="out-in">
                <span class="word-slider" :key="currentWord.name">
                    {{ currentWord.name }}
                </span>
            </transition>
        </h2>
    </div>
    
</template>

<style lang="scss" scoped></style>