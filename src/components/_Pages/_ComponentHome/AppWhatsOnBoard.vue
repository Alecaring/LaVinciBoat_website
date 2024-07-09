<script>
export default {
    data() {
        return {
            expandedCardFree: false,
            freeItems:
                [
                    { name: "Equipaggio Professionale (Capitano, Equipaggio di coperta, Cuoco/chef)", short: "Equipaggio", icon: "fas fa-user-check", included: true },
                    { name: "Pulizia giornaliera", short: "Pulizia", icon: "fas fa-broom", included: true },
                    { name: "Biancheria da letto e da bagno", short: "Biancheria", icon: "fas fa-bed", included: true },
                    { name: "Articoli da toeletta di alta qualità", short: "Toeletta", icon: "fas fa-soap", included: true },
                    { name: "Colazione, pranzo e cena", short: "Pasti", icon: "fas fa-utensils", included: true },
                    { name: "Snack e bevande analcoliche", short: "Snack", icon: "fas fa-coffee", included: true },
                    { name: "Acqua potabile", short: "Acqua", icon: "fas fa-water", included: true },
                    { name: "Attrezzatura per snorkeling", short: "Snorkeling", icon: "fas fa-mask", included: true },
                    { name: "Kayak e paddleboard", short: "Kayak", icon: "fas fa-kayak", included: true },
                    { name: "Giochi da tavolo e libri", short: "Giochi", icon: "fas fa-chess", included: true },
                    { name: "TV satellitare e sistema di intrattenimento", short: "Intrattenimento", icon: "fas fa-tv", included: true },
                    { name: "Trasferimenti da e per l'aeroporto", short: "Trasferimenti", icon: "fas fa-shuttle-van", included: true },
                    { name: "Wi-Fi a bordo", short: "Wi-Fi", icon: "fas fa-wifi", included: true },
                    { name: "Sistema di navigazione avanzato", short: "Navigazione", icon: "fas fa-compass", included: true },
                    { name: "Equipaggiamento di sicurezza completo", short: "Sicurezza", icon: "fas fa-life-ring", included: true }
                ],
            premiumItems:
                [
                    { name: "Pianificazione di itinerari personalizzati", short: "Itinerari", icon: "fas fa-map-marked-alt", included: false },
                    { name: "Prenotazione di ristoranti e eventi", short: "Prenotazioni", icon: "fas fa-calendar-alt", included: false },
                    { name: "Escursioni a terra organizzate", short: "Escursioni", icon: "fas fa-hiking", included: false },
                    { name: "Menu gourmet personalizzati", short: "Gourmet", icon: "fas fa-utensils", included: false },
                    { name: "Bevande alcoliche di alta qualità", short: "Bevande", icon: "fas fa-glass-martini-alt", included: false },
                    { name: "Champagne e vini pregiati", short: "Champagne", icon: "fas fa-wine-bottle", included: false },
                    { name: "Jetski e motoscafi", short: "Jetski", icon: "fas fa-water", included: false },
                    { name: "Immersioni subacquee con istruttore", short: "Immersioni", icon: "fas fa-swimmer", included: false },
                    { name: "Parasailing", short: "Parasailing", icon: "fas fa-parachute-box", included: false },
                    { name: "Attrezzatura per pesca sportiva", short: "Pesca", icon: "fas fa-fish", included: false },
                    { name: "Massaggi e trattamenti spa", short: "Spa", icon: "fas fa-spa", included: false },
                    { name: "Personal trainer e yoga", short: "Trainer", icon: "fas fa-dumbbell", included: false },
                    { name: "Sauna e jacuzzi", short: "Sauna", icon: "fas fa-hot-tub", included: false },
                    { name: "Organizzazione di feste e eventi a tema", short: "Eventi", icon: "fas fa-music", included: false },
                    { name: "Musica dal vivo e DJ", short: "Musica", icon: "fas fa-headphones", included: false },
                    { name: "Fotografo e videomaker a bordo", short: "Fotografo", icon: "fas fa-camera", included: false },
                    { name: "Traduttore personale", short: "Traduttore", icon: "fas fa-language", included: false },
                    { name: "Assistenza medica privata", short: "Medica", icon: "fas fa-user-md", included: false }
                ],
        }
    },
    methods: {
        changeWhatsOnBoars() {
            this.expandedCardFree = !this.expandedCardFree;
        }
    },
    computed: {
        limitedFreeItems() {
            return this.freeItems.slice(0, 5);
        },
        limitedpremiumItems() {
            return this.premiumItems.slice(0, 5);
        }
    },
}
</script>

<template>
    <div class="sectionWhatsOnBoard">
        <div class="titleContainer">
            <h3>Whats On Board</h3>
        </div>
        <div class="CardWhatsOnBoardContainer">
            <div @click="changeWhatsOnBoars" :class="expandedCardFree ? 'alessio' : 'antonio'"
                class="freeCardWhatsOnBoardContainer">
                <div :class="expandedCardFree ? 'containerTxtfreeCardWhatsOnBoard' : 'containerTxtfreeCardWhatsOnBoardClosed'"
                    v-for="item in limitedFreeItems">
                    <i :class="item.icon"></i>
                    <span v-if="expandedCardFree">{{ item.short }}</span>
                </div>
            </div>
            <div @click="changeWhatsOnBoars" :class="expandedCardFree === false ? 'alessio' : 'antonio'"
                class="PremiumCardWhatsOnBoardContainer">
                <div :class="expandedCardFree ? 'containerTxtfreeCardWhatsOnBoardClosed' : 'containerTxtfreeCardWhatsOnBoard'"
                    v-for="item in limitedpremiumItems">
                    <span v-if="expandedCardFree === false">{{ item.short }}</span>
                    <i :class="item.icon"></i>
                </div>
            </div>
        </div>
        <div class="ContainerWhatsOnBoardDiscover">
            <span>Discover all Services</span>
            <i class="fa-solid fa-arrow-right"></i>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>