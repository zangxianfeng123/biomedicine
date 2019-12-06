<template>
<div class="app-container">
<p class="warn-content">
            <a href="https://dafrok.github.io/vue-baidu-map/#/zh/index" target="_blank">参考百度地图 Vue Baidu Map
            </a>
        </p>
</div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  data() {
    // }
    return {
      markers: []
    }
  },
  created() {
    this.SET_NEW_ROUTER()
  },
  methods:{
    ...mapMutations([
      'SET_NEW_ROUTER'
    ])
  }

}
</script>
<style>
.map {
  width: 100%;
  height: 800px;
}
</style>