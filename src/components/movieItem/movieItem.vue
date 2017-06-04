<template>
  <router-link :to="`/subject/${detail.id}`">
    <div class="item-poster" v-lazy:background-image="detail.images.large"></div>
    <span class="item-title">{{ detail.title }}</span>
    <div class="item-rating">
      <div class="rank">
        <star class="rating-stars" v-if="detail.rating.average" :size="24" :score="detail.rating.average"/>
        <span v-if="!detail.rating.average">暂无评分</span>
      </div>
    </div>
  </router-link>
</template>

<script>
import star from '../star/star'

export default {
  name: 'movieItem',
  props: {
    detail: {
      type: Object
    }
  },
  components: {
    star
  }
}
</script>

<style scoped>
.item-poster {
	width: 100%;
	overflow: hidden;
	background-size: cover;
	background-position: center;
}

.item-poster:before {
	content: "";
	float: left;
	margin-top: 142.85714%;
}

.item-title {
	display: block;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	line-height: .94rem;
  max-width: 100%;
	text-overflow: ellipsis;
	word-wrap: normal;
  font-size: 13px;
  font-weight: normal;
  padding: 5px 0 0;
  color: #494949;
  text-align: center;
}

.item-rating {
	color: #aaa;
	line-height: .94rem;
	margin-top: .2rem;
	font-size: .72rem;
  text-align: center;
}

.rating-stars {
  font-size: 12px;
}
</style>
