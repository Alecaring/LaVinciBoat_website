<script>
import AppHeader from './components/_Header/AppHeader.vue';

export default {
  components: { AppHeader }
}
</script>

<template>
  <div>
    <AppHeader />
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped></style>