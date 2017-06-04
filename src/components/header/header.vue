<template>
  <header class="nav">
    <div class="nav-primary">
      <a href="/">
        <h1>豆瓣</h1>
      </a>
      <nav>
        <ul>
          <li style="color: #2384E8;">电影频道</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'header'
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	z-index: 9999;
	background: #fff;
  .nav-primary {
    border-bottom: 1px solid #f3f3f3;
  	justify-content: space-between;
  	align-items: center;
  	padding: 0 18px;
  	background: #fff;
  	height: 47px;
  	box-sizing: border-box;
  	display: flex;
    &>* {
      white-space: nowrap;
    }
    h1 {
      margin: 0;
    	padding: 0;
    	color: #00b600;
    	width: 46px;
    	display: inline-block;
      font-weight: normal;
    }
    nav {
      &>* {
        display: inline-block;
        vertical-align: middle;
      }
      li {
        display: inline-block;
        font-size: 15px;
      }
    }
  }
}
</style>
