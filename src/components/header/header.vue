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

<style scoped>
.nav {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	z-index: 9999;
	background: #fff
}

.nav li,.nav ul {
	margin: 0;
	padding: 0;
	list-style: none
}

.nav a {
	text-decoration: none
}

.nav-primary {
	border-bottom: 1px solid #f3f3f3;
	-webkit-box-pack: justify;
	justify-content: space-between;
	-webkit-box-align: center;
	align-items: center;
	padding: 0 18px;
	background: #fff;
	height: 47px;
	box-sizing: border-box;
	display: -webkit-box;
	display: flex
}

.nav-primary>* {
	white-space: nowrap
}

.nav-primary h1 {
	margin: 0;
	padding: 0;
	color: #00b600;
	width: 46px;
	display: inline-block;
  font-weight: normal;
}

.nav-primary nav li,.nav-primary nav>* {
	display: inline-block
}

.nav-primary nav>* {
	vertical-align: middle
}

.nav-primary nav li {
	font-size: 15px;
	margin-right: 19px
}
</style>
