<template>
  <div class="card">
    <h1 class="title">{{ curMovie.title }}</h1>
    <div class="info">
      <div class="right">
        <img v-lazy="curMovie.images.large">
      </div>
      <div class="left">
        <p class="rating">
          <star class="rating-stars" v-if="curMovie.rating.average" :size="36" :score="curMovie.rating.average"/>
          <span v-if="!curMovie.rating.average">暂无评分</span>
        </p>
        <p class="meta">
          {{ meta }}
        </p>
      </div>
    </div>
    <div class="intro">
      <h2>{{ curMovie.title }}的剧情简介</h2>
      <p>{{ curMovie.summary }}</p>
    </div>
    <div class="celebrity">
      <h2>{{ curMovie.title }}的影人</h2>
      <ul class="items">
        <li class="item" v-for="item in celebrityItems">
          <img class="item-poster" v-lazy="item.avatars.large">
          <p class="item-title">{{ item.name }}</p>
          <span v-if="item.isDirector" style="color: #aaa; font-size: 12px">导演</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import star from '../../components/star/star'

export default {
  name: 'movieInfo',
  props: {
    curMovie: {
      type: Object
    }
  },
  computed: {
    meta () {
      const { directors, countries, year, genres, casts } = this.curMovie
      const array = []
      Array.prototype.push
        .call(array,
          genres.reduce((previous, current) => `${previous} / ${current}`),
          directors.map(value => `${value.name}(导演)`).join(' / '),
          casts.map(value => value.name).join(' / '),
          `${year}年(${countries.reduce((previous, current) => `${previous} / ${current}`)})上映`,
        )
      return array.join(' / ')
    },
    celebrityItems () {
      const { directors, casts } = this.curMovie
      directors.forEach((value) => {
        value.isDirector = true
      })
      casts.forEach((value) => {
        value.isDirector = false
      })
      return Array.prototype.concat.call(directors, casts)
    }
  },
  components: {
    star
  }
}
</script>

<style lang="scss" scoped>
.card {
  max-width: 650px;
  background: #fff;
  overflow-x: hidden;
  font-size: 15px;
  .title {
    margin: 30px 18px 5px;
    font-size: 24px;
    line-height: 32px;
    word-break: break-all;
    font-weight: normal;
  }
  .info {
    margin: 0 18px;
    position: relative;
    margin-bottom: 30px;
    overflow: hidden;
    .right {
      float: right;
      img {
        width: 100px;
      }
    }
    .left {
      margin-right: 100px;
      .rating-stars {
        font-size: 14px;
      }
      .meta {
        color: #494949;
        margin-top: 15px;
        padding-right: 24px;
        font-size: 14px;
        line-height: 1.6;
      }
    }
  }
  .intro {
    margin: 0 18px 30px 18px;
    h2 {
      color: #aaa;
      margin: 0 0 15px;
      font-size: 15px;
      font-weight: normal;
    }
    p {
      line-height: 22px;
      word-wrap: break-word;
      margin: 0;
      padding: 0;
    }
  }
  .celebrity {
    h2 {
      color: #aaa;
      margin: 0 0 15px 18px;
      font-size: 15px;
      font-weight: normal;
    }
    .items {
      font-size: 0;
    	white-space: nowrap;
    	overflow-x: auto;
    	-webkit-overflow-scrolling: touch;
      .item {
        display: inline-block;
      	vertical-align: top;
      	width: 100px;
      	text-align: center;
        margin-left: 0.48rem;
        &:first-child {
        	margin-left: 1.12rem;
        }
        &:last-child {
        	margin-right: 1.12rem;
        }
        .item-poster {
        	width: 100px;
          height: 142px;
        	overflow: hidden;
        	background-size: cover;
        	background-position: center;
        }
        .item-title {
        	display: block;
        	overflow: hidden;
        	white-space: nowrap;
        	text-overflow: ellipsis;
        	line-height: .94rem;
          max-width: 100%;
        	word-wrap: normal;
          font-size: 13px;
          font-weight: normal;
          padding: 8px 0 5px;
          color: #494949;
          text-align: center;
        }
      }
    }
  }
}
</style>
