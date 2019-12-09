<template>
  <!-- 头部 -->
  <div class="des-header clearfix">
    <!-- 左侧 -->
    <div class="des-header-left clearfix">
      <img class="des-logo" src="../../../assets/images/logo.png" />
      <div class="des-nav">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">模块商资源</template>
            <el-menu-item index="2-1">供应商名录</el-menu-item>
            <el-menu-item index="2-2">新供应商公示</el-menu-item>
            <el-menu-item index="2-3">行业资质校核</el-menu-item>
            <el-menu-item index="2-4">资质列表</el-menu-item>
            <el-menu-item index="2-5">供应商绩效</el-menu-item>
            <el-menu-item index="2-6">打标签</el-menu-item>
            <el-menu-item index="2-7">信用等级</el-menu-item>
            <el-menu-item index="2-8">策略变更</el-menu-item>
            <el-menu-item index="2-9">保证金</el-menu-item>
            <el-menu-item index="2-10">V码管理</el-menu-item>
            <el-menu-item index="2-11">经营风险</el-menu-item>
            <el-menu-item index="2-12">平台规则</el-menu-item>
            <el-menu-item index="2-12">需求统计</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">需求招标</template>
            <el-menu-item index="3-1">公开需求发布</el-menu-item>
            <el-menu-item index="3-2">定向需求发布</el-menu-item>
            <el-menu-item index="3-3">衍生需求发布</el-menu-item>
            <el-menu-item index="3-4">公开需求列表</el-menu-item>
            <el-menu-item index="3-5">定向需求列表</el-menu-item>
            <el-menu-item index="3-6">衍生需求列表</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">价格配额</template>
            <el-menu-item index="4-1">招标价格</el-menu-item>
            <el-menu-item index="4-2">招标配额</el-menu-item>
            <el-menu-item index="4-3">同料不同价</el-menu-item>
            <el-menu-item index="4-4">购销联动</el-menu-item>
            <el-menu-item index="4-5">原材料联动</el-menu-item>
            <el-menu-item index="4-6">日常数据管理</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">看单打印</template>
            <el-menu-item index="5-1">T+13周预测</el-menu-item>
            <el-menu-item index="5-2">T+2周真单</el-menu-item>
            <el-menu-item index="5-3">T-1看单</el-menu-item>
            <el-menu-item index="5-4">T看单</el-menu-item>
            <el-menu-item index="5-5">不良品看单</el-menu-item>
            <el-menu-item index="5-6">T售后备货</el-menu-item>
            <el-menu-item index="5-7">看单差异</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">对账结算</template>
            <el-menu-item index="6-1">贴息录入</el-menu-item>
            <el-menu-item index="6-2">索赔数据</el-menu-item>
            <el-menu-item index="6-3">付款预算</el-menu-item>
            <el-menu-item index="6-4">往来对账</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <ul class="des-nav" style="display:none">
        <li class="active">
          <a href="#">首页</a>
        </li>
        <li></li>
        <li>
          <a href="#">供应商资源</a>
        </li>
        <li>
          <a href="#">需求招标</a>
        </li>
        <li>
          <a href="#">价格配额</a>
        </li>
        <li>
          <a href="#">看单打印</a>
        </li>
        <li>
          <a href="#">对账结算</a>
        </li>
      </ul>
    </div>
    <!-- 右侧 -->
    <div class="des-header-right">
      <ul>
        <li class="dex-admininfo">
          <img src="../../../assets/images/user.png" />
          <p>admin</p>
        </li>
        <li class="des-index-icon">
          <img src="../../../assets/images/close.png" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {  
  name: 'navBar',
  data(){
    return {
      //ifShowChildNav: false
    }
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
