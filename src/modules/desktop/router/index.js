import Vue from 'vue'
import Router from 'vue-router'
import Desktop from '../views/desktop/supplier'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'desktop',
      component: Desktop 
    }
  ]
})
