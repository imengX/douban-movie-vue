<template>
  <div class="footer">
    <div class="info">
      <img src="./logo.png" width="48">
      <div class="info-content">
        <strong>豆瓣</strong>
        <div>我们的精神角落</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style lang="scss" scoped>
.footer {
	padding: 0 0 20px;
	margin-top: 50px;
	margin-bottom: 30px;
	text-align: center;
	font-size: 15px;
  .info {
    margin: 0 auto 15px;
  	overflow: hidden;
  	text-align: left;
  	font-size: 14px;
  	display: inline-block;
  	color: #111;
    img {
      float: left;
    	margin-right: 12px;
    }
    .info-content {
      overflow: hidden;
      strong {
        font-size: 24px;
      	font-weight: 400;
      	line-height: 28px;
      }
      div {
        white-space: pre;
      	line-height: 20px;
      }
    }
  }
}
</style>
