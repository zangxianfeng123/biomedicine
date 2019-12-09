<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <!--<logo :isCollapse="isCollapse"></logo>-->
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      text-color="#444"
      active-text-color="#fff"
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
      'permission_routers'
    ]),
  }
}
</script>
