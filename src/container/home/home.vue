<template>
  <div class="home">
    <headers/>
    <div class="page">
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
    </div>
    <footers/>
  </div>
</template>

<script>
import headers from '../../components/header/header.vue'
import footers from '../../components/footer/footer.vue'
import movieItem from '../../components/movieItem/movieItem.vue'

import {hotMovie, commingSoon, top250} from '../../router/server'

export default {
  name: 'home',
  data () {
    return {
      homeData: []
    }
  },
  created () {
    Promise.all([
      top250(8, 0),
      hotMovie(8, 0),
      commingSoon(8, 0)
    ]).then((homeData) => {
      // 成功则commit后台接口的数据，并把NET_ERROR的数据置空，并把加载中的状态置为false。
      this.homeData = homeData
      console.log(homeData)
    })
  },
  components: {
    headers,
    footers,
    movieItem
  }
}
</script>

<style scoped>
.page {
  padding-top: 47px;
  max-width: 650px;
  background: #fff;
  margin: 0 auto;
  overflow-x: hidden;
}

.section {
	margin: 0;
	overflow: hidden;
	background-color: #fff;
}

.section:first-child {
	padding-top: 10px;
}

.section h2 {
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

.section header {
	padding: 0 1.12rem;
}

.section header a {
	float: right;
	font-size: .9rem;
	line-height: 1.5rem;
}

.items {
  border-bottom: 1px solid #F2F2F2;
	padding: 15px 0 43px 0;
	font-size: 0;
	white-space: nowrap;
	overflow-x: auto;
	-webkit-overflow-scrolling: touch;
  margin-bottom: -1.12rem;
}

.items>* {
	font-size: .94rem;
	white-space: normal;
}

.item {
	display: inline-block;
	vertical-align: top;
	width: 100px;
	text-align: center;
  margin-left: 0.48rem;
}

.item:first-child {
	margin-left: 1.12rem
}

.item:last-child {
	margin-right: 1.12rem
}
</style>
