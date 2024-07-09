<script>
import { storeData } from '../../store.js';

export default {
  data() {
    return {
      storeData,
    }
  },
}
</script>

<template>
  <div :class="storeData.isActive === true ? 'none' : ''">
    about
  </div>
</template>

<style lang="scss" scoped>
  
</style>