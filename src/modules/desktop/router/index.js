import Vue from 'vue'
import Router from 'vue-router'
import Desktop from '../views/desktop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect:'/desktop'
    },
    { 
      path: '/login', 
      component: () => import('../views/login'),
      name: '登录', 
      hidden: true
    },
    {
      path: '/desktop',
      name: 'desktop',
      component: Desktop 
    }
  ]
})
