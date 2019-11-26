<template>
  <div class="navbar">
    <el-col class="wkb-navbar-logo-wrapper hidden-xs-only">
      <img class="wkb-navbar-logo" src="../../../assets/images/logo1.png" width="230" alt="logo" style="vertical-align: middle;" />
    </el-col>
    <el-col class="wkb-navbar-logo-mobile-wrapper hidden-sm-and-up">
      <img class="wkb-navbar-logo" src="../../../assets/images/logoSimple.png" alt="logo" style="vertical-align: middle;" />
    </el-col>
    <el-col :span="11" class="wkb-navbar-nav hidden-xs-only">

        <el-col :span="6" class="wkb-cmm-text-nowrap">
          <a href="javascript:void(0)" @mouseover="showChildNav" @mouseout="hideChildNav">
            产品竞争力
            <child-nav class="wkb-childnav" v-show="ifShowChildNav"/>
          </a>
          
        </el-col>
        <el-col :span="6" class="wkb-cmm-text-nowrap">
          <a href="javascript:void(0)">文档中心</a>
        </el-col>
        <el-col :span="6" class="wkb-cmm-text-nowrap">
          <a href="javascript:void(0)">研发年度预算</a>
        </el-col>
        <el-col :span="6" class="wkb-cmm-text-nowrap">
          <a href="javascript:void(0)">控制中心</a>
        </el-col>

    </el-col>
    <el-col class="wkb-navbar-setting">
      <div class="right-menu">
        <a href="javascript:void(0)" class="right-menu-item">admin</a>
        <span>|</span>
        <a href="javascript:void(0)" class="right-menu-item" @click="logout">退出</a>
      </div>
    </el-col>
  </div>
</template>

<script>
import ChildNav from './ChildNav'

export default {  
  name: 'navBar',
  data(){
    return {
      ifShowChildNav: false
    }
  },
  components:{
    ChildNav
  },
  methods: {
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()
      })
    },
    showChildNav(){
      this.ifShowChildNav = true;
    },
    hideChildNav(){
      this.ifShowChildNav = false;
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  background-color: #0076bd;
  color: #fff;
  font-size: 14px;
  .right-menu {
    float: right;
    height: 100%;
    &:focus {
      outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
  }
}
.wkb-navbar-logo-wrapper{
  width: 250px;
  .wkb-navbar-logo{
    margin-left: 14px;
  }
}
.wkb-navbar-logo-mobile-wrapper{
  width: 100px;
}
.wkb-navbar-nav{
  text-align: center;
  font-weight: bold;
  a{
    display: inline-block;
    width: 100%;
    height:100%;
  }
  a:hover{
    background-color: #035b90;
  }
}
.wkb-navbar-setting{
  float: right;
  width: 150px;
  a:hover{
    color: #9ecef5;
  }
}
.wkb-childnav{
  position: absolute;
  left: 210px;
  top:50px;
  z-index: 6;
}
</style>
