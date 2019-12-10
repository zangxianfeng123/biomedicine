<template>
  <div class="app-container">
    <Breadcrumb/>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb.vue'
export default {
  components:{
    Breadcrumb
  },
  data() {
    return {
      markers: []
    }
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