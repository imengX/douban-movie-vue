<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import home from './container/home/home.vue'

export default {
  name: 'app',
  components: {
    home
  }
}
</script>

<style lang="scss">
::-webkit-scrollbar {
  display: none;
}
</style>
