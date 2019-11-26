/**
 * Created by Administrator on 2018/4/22.
 */
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  console.log("Bto:",to," Bfrom:",from)
  next();
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
