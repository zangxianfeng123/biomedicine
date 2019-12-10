import { constantRouterMap, anotherRouterMap } from '@workbranch/router'

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
      //console.log('state.routers', state.routers)
    },
    SET_NEW_ROUTER:(state, routers) => {
      state.routers = anotherRouterMap
    },
  },
}

export default permission
