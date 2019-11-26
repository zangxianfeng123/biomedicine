import { asyncRouterMap, constantRouterMap } from '@workbranch/router'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.indexOf(role) >= 0)
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(asyncRouterMap, roles) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

/* 得到正确的路由 */
function eachRouter(authR, routerMap){
  for( var index in authR){
    for( var i in routerMap){
      
      if(authR[index].name == routerMap[i].name){
        
        routerMap[i].meta.roles = authR[index].roles

        if(authR[index].children && authR[index].children.length && routerMap[i].children){
					eachRouter(authR[index].children,routerMap[i].children)
        }
      }
      
    }
    
  }
  return routerMap
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
      console.log('state.routers', state.routers)
    }
  },
  actions: {
    InitRoutes({commit,state}, authRouter){
      return new Promise((resolve,reject) => {
       
        eachRouter(authRouter, asyncRouterMap)
        
        resolve()
      })
    },
    GenerateRoutes({ commit }, roles) {

      return new Promise(resolve => {
        let accessedRouters
        if (roles.indexOf('admin') >= 0) {
          console.log('admin>=0')
          accessedRouters = asyncRouterMap
        } else {
          console.log('admin<0')
          accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
        }
        console.log('accessedRouters', accessedRouters)
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })

      /*return new Promise(resolve => {
        const { roles } = data
        let accessedRouters
        if (roles.indexOf('admin') >= 0) {
          console.log('admin>=0')
          accessedRouters = asyncRouterMap
        } else {
          console.log('admin<0')
          accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
          // accessedRouters = ''
          // accessedRouters = asyncRouterMap
        }
        console.log('accessedRouters', accessedRouters)
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })*/
    }
  }
}

export default permission
