import { login, logout, getInfo } from '../../api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { setStore, getStore, removeStore } from '@/utils/store'
const user = {
  state: {
    token: getToken('myToken') || undefined,
    name: getToken('name') || '',
    avatar: getToken('avatar') || '',
    roles: eval(getToken('roles')) || [],
    isLock: getStore({
      name: 'isLock'
    }) || false,
    lockPasswd: getStore({
      name: 'lockPasswd'
    }) || '',
    browserHeaderTitle: getStore({
      name: 'browserHeaderTitle'
    }) || 'NxAdmin'
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      setToken('myToken', token)
    },
    SET_NAME: (state, name) => {
      state.name = name
      setToken('name', name)
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
      setToken('avatar', avatar)
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
      setToken('roles', roles)
    },
    SET_AUTHROUTER: (state,authRouter) => {
      state.authRouter = authRouter
      setToken('authRouter',authRouter)
    },
    SET_LOCK_PASSWD: (state, lockPasswd) => {
      state.lockPasswd = lockPasswd
      setStore({
        name: 'lockPasswd',
        content: state.lockPasswd,
        type: 'session'
      })
    },
    /*SET_LOCK: (state, action) => {
      state.isLock = true
      setStore({
        name: 'isLock',
        content: state.isLock,
        type: 'session'
      })
    },
    CLEAR_LOCK: (state, action) => {
      state.isLock = false
      state.lockPasswd = ''
      removeStore({
        name: 'lockPasswd'
      })
      removeStore({
        name: 'isLock'
      })
    },*/
    SET_BROWSERHEADERTITLE: (state, action) => {
      state.browserHeaderTitle = action.browserHeaderTitle
    }

  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(res => {
          
          /*setToken('roles', res.roles[0])
          setToken('name', res.name)
          setToken('avatar', res.avatar)*/
          //console.log("res::::",res)
          commit('SET_TOKEN', res.token)
          commit('SET_ROLES', res.roles)
          commit('SET_NAME', res.name)
          commit('SET_AVATAR', res.avatar)
          //commit('SET_AUTHROUTER', res.authRouter)
          resolve(res)
        }).catch(error => {
            //alert("错没错？走没走？")走了
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          const data = response
          if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.roles)
          } else {
            reject('getInfo: roles must be a non-null array !')
          }
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          /*commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          commit('SET_NAME', '')
          commit('SET_AVATAR', '')*/
          
          removeToken('myToken')
          removeToken('name')
          removeToken('roles')
          removeToken('avatar')
          removeToken('sidebarStatus')
          //removeToken('authRouter')
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },
    // 动态修改权限
    ChangeRoles({ commit }, role) {
      return new Promise(resolve => {
        commit('SET_TOKEN', role)
        setToken(role)
        getInfo(role).then(response => {
          const data = response
          commit('SET_ROLES', data.roles)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          resolve()
        })
      })
    }
  }
}

export default user
