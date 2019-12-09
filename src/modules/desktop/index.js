/**
 * Created by Administrator on 2018/4/22.
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css

import './styles/index.scss'
import '@/styles/index.scss'
Vue.use(ElementUI) //使用elementUI

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log("to:",to," from:",from)
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
