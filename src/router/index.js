import Vue from 'vue'
import Router from 'vue-router'
import home from '../container/home/home'
import more from '../container/more/more'
import movieDetail from '../container/movieDetail/movieDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/more/:title',
      component: more
    },
    {
      path: '/subject/:id',
      component: movieDetail
    }
  ]
})
