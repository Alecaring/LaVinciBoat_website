<script>
export default {
    data() {
        return {
            currentIndex: 0,
            changeWordsArray: [],
        };
    },
    computed: {
        currentWord() {
            return this.changeWordsArray[this.currentIndex] || { name: '' };
        },
    },
    methods: {
        updateWordsArray() {
            this.changeWordsArray = [
                { name: this.$t('words.exclusivity'), super: '®' },
                { name: this.$t('words.elegance'), super: '®' },
                { name: this.$t('words.prestige'), super: '®' },
                { name: this.$t('words.sophistication'), super: '®' },
                { name: this.$t('words.comfort'), super: '®' },
                { name: this.$t('words.luxury'), super: '®' },
                { name: this.$t('words.adventure'), super: '®' },
                { name: this.$t('words.unforgettable'), super: '®' },
                { name: this.$t('words.customized'), super: '®' },
                { name: this.$t('words.excellence'), super: '®' }
            ];
        },
        nextWord() {
            this.currentIndex = (this.currentIndex + 1) % this.changeWordsArray.length;
        },
        changeLanguage(lang) {
            this.$i18n.locale = lang;  // Cambia la lingua
            this.updateWordsArray();   // Aggiorna l'array delle parole
        },
    },
    mounted() {
        this.updateWordsArray(); // Inizializza l'array alla prima monta
        this.wordInterval = setInterval(this.nextWord, 2000);
    },
    beforeDestroy() {
        clearInterval(this.wordInterval);
    }
}
</script>

<template>
    <div class="containerBanner">
        <h2>
            {{ $t('messaggioBannerHome1') }} <br>
            {{ $t('messaggioBannerHome2') }} <br>
            <transition name="fade" mode="out-in">
                <span class="word-slider" :key="currentWord.name">
                    {{ currentWord.name }}
                </span>
            </transition>
        </h2>
    </div>
</template>

<style lang="scss" scoped>
.word-slider {
    display: inline-block;
  min-width: 100%; /* Imposta una larghezza minima per evitare cambiamenti di layout */
  white-space: nowrap; /* Impedisce che il testo vada a capo */
  transition: opacity 1s ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-in-out;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
