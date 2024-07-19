<script>
import { storeData } from '../../../store';
export default {
    props: {
        img: String,
        price4h: String,
        title: String,
        brand: String

    },
    data() {
        return {
            storeData,

        }
    },
}
</script>

<template>
        <img :src="img" alt="">
        <div class="card">
            <!-- sezione 1 -->
            <div class="cardHead">
                <div>
                    <p>A Partire Da:</p>
                    <span>€{{ price4h }}</span>
                </div>
            </div>
            <!-- sezione 2 -->
            <div class="cardFirstSection">
            </div>
            <!-- sezione 3 -->
            <div class="cardSecondeSection">
                <span>{{ title }}</span>
            </div>
            <!-- sezione 4 -->
            <div class="cardFooter">
                <p>{{ brand }}</p>
            </div>
        </div>
</template>

<style lang="scss" scoped></style>