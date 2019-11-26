<template>
  <div>
    <h1>{{firstCommonData}}</h1>
    <h2>这是a模块下受前端路由控制的子模块</h2>
    <div>这一块的内容才是受前端路由控制的</div>
    <a href="/b">跳转到b模块</a>
    <a href="javascript:void(0)" @click="myJump">跳转到b模块click</a>
    <!--<hello-world></hello-world>-->
  </div>
</template>

<script>
//import HelloWorld from '../../../components/HelloWorld'
import { mapState} from 'vuex';
export default {
  name: 'a-sub-module1',
  //components: {HelloWorld},
  data () {
    return {
    }
  },
  computed:{
    ...mapState('common',[
      'firstCommonData',
    ]),
  },
  methods: {
    myJump(){
      window.location.href="http://localhost:8086/b#/sub-module1"
    }
  },
  created () {}
}
</script>
<style scoped>
</style>
