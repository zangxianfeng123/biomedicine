const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  website: state => state.common.website,
  isLock: state => state.user.isLock,
  lockPasswd: state => state.user.lockPasswd,
  browserHeaderTitle: state => state.user.browserHeaderTitle,
  errorLogs: state => state.errorLog.logs

}
export default getters;
