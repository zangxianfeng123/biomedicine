import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import getters from './getters'
import permission from './modules/permission'
//import tagsView from './modules/tagsView'
import errorLog from './modules/errorLog'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    //app,
    user,
    permission,
    errorLog
  },
  getters
})

export default store
