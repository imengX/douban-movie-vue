<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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

<style>
</style>
