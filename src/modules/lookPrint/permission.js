import router from './router'
import store from './store'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' 
import {setTitle} from '@/utils/util'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  if (getToken('myToken')) {
    const browserHeaderTitle = to.name
    store.commit('SET_BROWSERHEADERTITLE', {
      browserHeaderTitle: browserHeaderTitle
    })

    if (to.path === '/login') {
      next({ path: '' })
    } else {
      next();
    }
  } else {
    const browserHeaderTitle = to.name
    store.commit('SET_BROWSERHEADERTITLE', {
      browserHeaderTitle: browserHeaderTitle
    })
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach(() => {
  setTimeout(() => {
    const browserHeaderTitle = store.getters.browserHeaderTitle
    setTitle(browserHeaderTitle)
  }, 0)
})
