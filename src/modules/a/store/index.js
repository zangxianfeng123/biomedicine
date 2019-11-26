import Vue from 'vue'
import Vuex from 'vuex'
//import app from './modules/app'
import common from './modules/common'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    //app,
    common,
  },
  //getters
})

export default store
