import router from './router'
import store from './store'
//import NProgress from 'nprogress' // Progress 进度条
//import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import { getToken } from '@workbranch/utils/auth' // 验权
import {
  setTitle
} from '@workbranch/utils/util' // 设置浏览器头部标题

// permission judge function
function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true // admin permission passed directly
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login','/helloworld','/leftmenu'] // 不重定向白名单

router.beforeEach((to, from, next) => {
  //NProgress.start()
  if (getToken('myToken')) {
    // 设置浏览器头部标题
    const browserHeaderTitle = to.name
    store.commit('SET_BROWSERHEADERTITLE', {
      browserHeaderTitle: browserHeaderTitle
    })

    if (to.path === '/login') {
      next({ path: '' })
    } else {
      let roles = store.getters.roles;
      if (roles.length === 0) {//如果：有token但是无roles（角色）信息时，退出登录
        
        store.dispatch('LogOut').then(()=>{
            next({ path:'/login' })
        })
        
      }
      else if(store.getters.addRouters.length == 0){ //刷新页面后asyncRouter变为空 重新获取权限路由
        //store.dispatch('InitRoutes',store.getters.authRouter).then(()=>{
          //alert(to.path)
          store.dispatch('GenerateRoutes', roles).then(() => { // 根据roles权限生成可访问的路由表
            router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
            next({ ...to, replace: true })
          })
        //})
        

      } else {
            console.log("roles111:",store.getters.roles)
            console.log("addRouters:",store.getters.addRouters)
            
            // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
            /*if (hasPermission(store.getters.roles, to.meta.roles)) {
                next()//
            } else {
                next({ path: '/401', replace: true, query: { noGoBack: true }})
            }*/
            next();
      }
    }
  } else {
    // 设置浏览器头部标题
    //alert("nnnono!")
    const browserHeaderTitle = to.name
    //console.log("to.name::",to.name)
    store.commit('SET_BROWSERHEADERTITLE', {
      browserHeaderTitle: browserHeaderTitle
    })
    //console.log("browserHeaderTitle::",store.state)
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      //NProgress.done()
    }
  }
})

router.afterEach(() => {
  //NProgress.done() // 结束Progress
  setTimeout(() => {
    const browserHeaderTitle = store.getters.browserHeaderTitle
    setTitle(browserHeaderTitle)
  }, 0)
})
