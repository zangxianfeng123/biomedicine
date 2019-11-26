<template>
  <div id="app">
    <h2>{{message}}</h2>
    <!--<h1>{{storeMsg}}</h1>-->
    <router-view/>
  </div>
</template>

<script>
//import rootStore from '../../store'
export default {
  name: 'App',
  data () {
    return {
      message: 'a模块的内容'
    }
  },
  /*computed:{
    storeMsg(){
      return rootStore.getters.rootStoreMsg
    }
  }*/
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
