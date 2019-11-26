import Vue from 'vue'
import Router from 'vue-router'

// const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '@/components/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/login',
  //   name: 'login',
  //   hidden: true
  // },
  {
    path: '',
    component: Layout,
    redirect: '/functionalArea/functionalArea'
  },
  { path: '/login', component: () => import('../views/login'), name: '登录', hidden: true },
  { path: '/404', component: () => import('../views/errorPage/404'), hidden: true },
  { path: '/401', component: () => import('../views/errorPage/401'), hidden: true },
  // 报表
  {
    path: '/functionalArea',
    component: Layout,
    meta: { title: 'functionalArea', icon: 'el-icon-user-solid' },
    children: [
      {
        path: 'functionalArea',
        name: '功能区',
        component: () => import('../views/functionalArea/functionalArea'),
        meta: { title: '功能区', icon: 'el-icon-user-solid' }
      }
    ]
  },
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    name: 'permission',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '任务调度',
      icon: 'el-icon-s-data',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [{
      path: 'page',
      component: () => import('../views/permission/page'),
      name: '任务发布',
      meta: {
        title: '任务发布',
        icon: 'el-icon-s-data',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }, {
      path: 'directive',
      component: () => import('../views/permission/directive'),
      name: '任务列表',
      meta: {
        title: '任务列表',
        icon: 'el-icon-s-data',
        // if do not set roles, means: this page does not require permission
      }
    },{
      path: 'aa',
      component: () => import('../views/permission/directive'),
      name: '任务分析 ',
      meta: {
        title: '任务分析',
        icon: 'el-icon-s-data',
        // if do not set roles, means: this page does not require permission
      }
    }]
  },
  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    name: 'errorPages',
    meta: {
      title: '系统管理',
      icon: 'el-icon-s-data'
    },
    children: [
      { 
        path: '401', 
        component: () => import('../views/errorPage/401'), 
        name: 'page401', 
        meta: { title: 'page401',  icon: 'el-icon-s-data'}
      },
      { 
        path: '404', 
        component: () => import('../views/errorPage/404'), 
        name: 'page404', 
        meta: { title: 'page404', icon: 'el-icon-s-data'}
      }
    ]
  },
  // 错误日志
  {
    path: '/errorLog',
    component: Layout,
    hidden: true,

    children: [
      {
        path: 'errorLog',
        name: 'errorLog',
        component: () => import('../views/errorLog/errorLog'),
        meta: { title: 'Errorlog', icon: 'errorLog' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }]
