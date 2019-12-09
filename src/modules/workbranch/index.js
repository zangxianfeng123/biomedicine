import Vue from 'vue'



import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
//import '../static/css/iconfont/1.0.0/index.css' /* icofont*/

// css
import '@/styles/index.scss' // global css

import './mock'

import './errorLog'


import App from './App'

import router from './router'

import store from './store'

// theme
//import { global } from '@/global/global'
/*import {
  loadStyle
} from './utils/util'
import {
  iconfontUrl,
  iconfontVersion
} from '@/config/env'*/

//import '@/icons' // icon

import './permission' // permission control

/*import * as filters from './filters' // global filters
// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})*/

//Vue.use(ElementUI, { locale })
/*iconfontVersion.forEach(ele => {
  loadStyle(iconfontUrl.replace('$key', ele))
})*/
Vue.use(ElementUI, {
  size: 'medium', // set element-ui default size
})


//global.changeTheme('default')

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  // template: '<App/>',
  // components: { App }
  render: h => h(App)
})
