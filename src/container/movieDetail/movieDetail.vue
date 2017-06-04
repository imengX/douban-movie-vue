<template>
  <div>
    <loading v-if="loadingFlag"/>
    <div class="movie-detail" v-if="!loadingFlag">
      <headers/>
      <movieInfo :curMovie="curMovie"/>
      <footers/>
    </div>
  </div>
</template>

<script>
import headers from '../../components/header/header.vue'
import footers from '../../components/footer/footer.vue'
import movieInfo from '../../components/movieInfo/movieInfo.vue'
import loading from '../../components/loading/loading.vue'

import { subject } from '../../router/server'

export default {
  name: 'movieDetail',
  data () {
    return {
      curMovie: {},
      loadingFlag: true
    }
  },
  created () {
    let id = this.$route.params.id
    Promise.all([
      subject(id)
    ]).then((curMovie) => {
      this.curMovie = curMovie[0]
      this.loadingFlag = false
      console.log(this.curMovie)
    })
  },
  components: {
    headers,
    footers,
    movieInfo,
    loading
  }
}
</script>

<style lang="scss" scoped>
.movie-detail {
  padding-top: 47px;
  max-width: 650px;
  background: #fff;
  margin: 0 auto;
  overflow-x: hidden;
}
</style>
