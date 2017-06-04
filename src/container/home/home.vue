<template>
  <div>
    <loading v-if="loadingFlag"/>
    <div class="home" v-if="!loadingFlag">
      <headers/>
      <ul>
        <li class="section" v-for="(item, index) in homeData">
          <header class="clearfix">
            <h2 class="title">{{item.title}}</h2>
            <span>
              <router-link :to="`/more/${item.title}`" class="more">更多</router-link>
            </span>
          </header>
          <ul class="items">
            <li class="item" v-for="(movie, index) in item.subjects">
              <movieItem :detail="movie" :key="movie.id"/>
            </li>
          </ul>
        </li>
      </ul>
      <footers/>
    </div>
  </div>
</template>

<script>
import headers from '../../components/header/header.vue'
import footers from '../../components/footer/footer.vue'
import movieItem from '../../components/movieItem/movieItem.vue'
import loading from '../../components/loading/loading.vue'

import {hotMovie, commingSoon, top250} from '../../router/server'

export default {
  name: 'home',
  data () {
    return {
      homeData: [],
      loadingFlag: true
    }
  },
  created () {
    Promise.all([
      top250(8, 0),
      hotMovie(8, 0),
      commingSoon(8, 0)
    ]).then((homeData) => {
      this.homeData = homeData
      this.loadingFlag = false
      console.log(homeData)
    })
  },
  components: {
    headers,
    footers,
    movieItem,
    loading
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding-top: 47px;
  max-width: 650px;
  background: #fff;
  margin: 0 auto;
  overflow-x: hidden;
  .section {
    margin: 0;
  	overflow: hidden;
  	background-color: #fff;
    &:first-child {
      padding-top: 10px;
    }
    header {
      padding: 0 1.12rem;
      .title {
        display: inline-block;
      	min-width: 4em;
      	margin-bottom: 0;
      	font-size: 18px;
      	color: #111;
      	padding-left: 0;
      	padding-bottom: 0;
      	font-size: 1.06rem;
        font-weight: normal;
      }
      a {
        float: right;
      	font-size: .9rem;
      	line-height: 1.5rem;
      }
    }
    .items {
    	padding: 15px 0 30px 0;
    	font-size: 0;
    	white-space: nowrap;
    	overflow-x: auto;
    	-webkit-overflow-scrolling: touch;
      &>* {
        font-size: .94rem;
      	white-space: normal;
      }
      .item {
      	display: inline-block;
      	vertical-align: top;
      	width: 100px;
      	text-align: center;
        margin-left: 0.48rem;
        &:first-child {
          margin-left: 1.12rem
        }
        &:last-child {
          margin-right: 1.12rem
        }
      }
    }
  }
}
</style>
