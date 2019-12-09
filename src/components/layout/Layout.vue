<template>
  <div class="app-wrapper">
    <div>
      <navbar></navbar>
    </div>
    
    <div class="main-container">
      <sidebar class="sidebar-container"></sidebar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'

export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
  },
  //mixins: [ResizeMixin],
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-wrapper {
    //@include clearfix;
    position: relative;
    min-height: 100vh;
    height: 100%;
    width: 100%;
  }
</style>
