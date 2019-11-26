<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <!--<logo :isCollapse="isCollapse"></logo>-->
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      text-color="#444"
      active-text-color="#0076bd"
    >
      <sidebar-item :routes="permission_routers"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
//import logo from './logo'
export default {
  components: { SidebarItem, /*logo*/ },
  computed: {
    ...mapGetters([
      'sidebar',
      'permission_routers'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
