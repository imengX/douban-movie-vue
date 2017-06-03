<template lang="html">
  <ul class="items">
    <li class="item" v-for="(movie, index) in list.subjects">
      <movieItem :detail="movie" :key="movie.id"/>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'more'
}
</script>

<style scoped>
</style>
