<template>
  <div>
    <loading v-if="loadingFlag"/>
    <div class="more" v-if="!loadingFlag">
      <headers/>
      <h1>{{this.$route.params.title}}</h1>
      <ul class="grid">
        <li class="item" v-for="(movie, index) in moreData">
          <movieItem :detail="movie" :key="movie.id"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import headers from '../../components/header/header.vue'
import movieItem from '../../components/movieItem/movieItem.vue'
import loading from '../../components/loading/loading.vue'

import {hotMovie, commingSoon, top250} from '../../router/server'

const fetch = (title, count, start) => {
  switch (title) {
    case '正在上映的电影-北京': {
      return hotMovie(count, start)
    }
    case '即将上映的电影': {
      return commingSoon(count, start)
    }
    case '豆瓣电影Top250': {
      return top250(count, start)
    }
    default : {
      return new Promise((resolve, reject) => {
        reject('错误: 404')
      })
    }
  }
}

export default {
  name: 'more',
  data () {
    return {
      moreData: [],
      title: this.$route.params.title,
      loadingFlag: true, // 是否在加载
      requestFlag: false, // 是否请求接口
      scrollFlag: false // 是否在滑动
    }
  },
  created () {
    Promise.all([
      fetch(this.title, 18, 0)
    ]).then((moreData) => {
      this.moreData = moreData[0].subjects
      this.loadingFlag = false
      console.log(this.moreData)
    })
  },
  // methods: {
  //   // scrolling函数用于作函数节流,判断是否真正滑动
  //   scrolling () {
  //     // 判断是否正在滚动，如果是则返回
  //     if (this.scrollFlag) return
  //     this.scrollFlag = true
  //     setTimeout(() => {
  //       this.handleScroll()
  //       this.scrollFlag = false
  //     }, 20)
  //   },
  //   // 滚动加载电影信息
  //   handleScroll () {
  //     const { start, count, total } = this.moreData
  //     // 判断是否正在向后台请求数据中，如果是则返回
  //     if (this.requestFlag) return
  //     // 不同浏览器top展现会不一致
  //     let top = window.document.documentElement.scrollTop
  //     if (top === 0) {
  //       top = document.body.scrollTop
  //     }
  //     const clientHeight = document.getElementById('app').clientHeight
  //     const innerHeight = window.innerHeight
  //     const proportion = top / (clientHeight - innerHeight)
  //     // 但如果已把所有数据加载完毕了，则不请求
  //     if (proportion > 0.6 && (start + count) < total) {
  //       fetch(this.title, count, start)
  //       this.requestFlag = false
  //     }
  //   }
  // },
  components: {
    headers,
    movieItem,
    loading
  }
}
</script>

<style scoped>
.more {
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 47px;
  max-width: 650px;
  margin: 0 auto;
  overflow-x: hidden;
}

.more h1 {
  font-size: 24px;
  font-weight: normal;
  box-sizing: border-box;
  max-width: 660px;
  margin: 16px auto 6px auto;
  padding-left: 4%;
}

.more .grid {
  padding: 20px 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 660px;
  overflow: hidden;
  box-sizing: border-box;
}

.more .grid .item {
  float: left;
  box-sizing: border-box;
  width: 33.33333%;
  padding-left: 4%;
  padding-right: 4%;
  margin-bottom: 20px;
  overflow: hidden;
}
</style>
