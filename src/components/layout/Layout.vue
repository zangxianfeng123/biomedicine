<template>
  <div class="app-wrapper" :class="classObj">
    <sidebar class="sidebar-container"></sidebar>
    <div>
      <navbar></navbar>
    </div>
    
    <div class="main-container">
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation
      }
    },
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/modules/workbranch/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    min-height: 100vh;
    height: 100%;
    width: 100%;
  }
</style>
