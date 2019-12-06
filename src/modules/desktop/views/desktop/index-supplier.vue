
  <!-- 
    功能：首页-供应商
    作者：李玲
    时间：2019-12-03
  -->
<template>
  <div class="des-demo">
    <!-- <indexheader></indexheader> -->
    <div class="des-header clearfix">
      <!-- 左侧 -->
      <div class="des-header-left clearfix">
        <img class="des-logo" src="../../assets/images/logo.png" />
        <div class="des-nav">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
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
            <router-link to="List">供应商资源</router-link>
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
          <li class="dex-admininfo" @click="showCont">
            <img src="../../assets/images/user.png" />
            <p>admin</p>
          </li>
          <!-- 
        <li class="des-index-icon"><img src="../../assets/images/home.png" /></li>
        <li class="des-index-icon" @click="showNav" ><img src="../../assets/images/nav.png" /></li>
          <li class="des-index-icon" @click="showMes"><img src="../../assets/images/messages.png" /> <span class="des-number">50</span></li>-->
          <li class="des-index-icon">
            <img src="../../assets/images/close.png" />
          </li>
        </ul>
      </div>
    </div>

    <div class="des-main clearfix">
      <!-- 左侧 -->
      <div class="des-main-left">
        <!-- 供应商 -->
        <div class="des-resource">
          <h3 class="des-column">
            <cite>&nbsp;</cite>模块商资源
          </h3>
          <ul class="clearfix">
            <router-link to="HaierList">
              <li>
                <img src="../../assets/images/resource-1.png" />
                <p>供应商名录</p>
              </li>
            </router-link>

            <li>
              <img src="../../assets/images/resource-2.png" />
              <p>新供应商公示</p>
            </li>

            <li>
              <img src="../../assets/images/resource-3.png" />
              <p>行业资质校核</p>
            </li>

            <li>
              <img src="../../assets/images/resource-4.png" />
              <p>资质列表</p>
            </li>

            <li>
              <img src="../../assets/images/resource-5.png" />
              <p>供应商绩效</p>
            </li>
            <li>
              <img src="../../assets/images/resource-6.png" />
              <p>打标签</p>
            </li>

            <li>
              <img src="../../assets/images/resource-7.png" />
              <p>信用等级</p>
            </li>
            <li>
              <img src="../../assets/images/resource-8.png" />
              <p>策略变更</p>
            </li>
            <li>
              <img src="../../assets/images/resource-9.png" />
              <p>保证金</p>
            </li>
            <li>
              <img src="../../assets/images/resource-10.png" />
              <p>V码管理</p>
            </li>
            <li>
              <img src="../../assets/images/resource-11.png" />
              <p>经营风险</p>
            </li>
            <li>
              <img src="../../assets/images/resource-12.png" />
              <p>平台规则</p>
            </li>
            <li>
              <img src="../../assets/images/resource-13.png" />
              <p>需求统计</p>
            </li>
          </ul>
        </div>

        <!-- 用户需求 -->
        <div class="des-resource">
          <h3 class="des-column">
            <cite>&nbsp;</cite>用户需求
          </h3>
          <ul class="clearfix">
            <li>
              <img src="../../assets/images/needs-1.png" />
              <p>公开需求发布</p>
            </li>

            <li>
              <img src="../../assets/images/needs-2.png" />
              <p>定向需求发布</p>
            </li>

            <li>
              <img src="../../assets/images/needs-3.png" />
              <p>衍生需求发布</p>
            </li>

            <li>
              <img src="../../assets/images/needs-4.png" />
              <p>公开需求列表</p>
            </li>

            <li>
              <img src="../../assets/images/needs-5.png" />
              <p>定向需求列表</p>
            </li>
            <li>
              <img src="../../assets/images/needs-6.png" />
              <p>衍生需求列表</p>
            </li>
          </ul>
        </div>

        <!-- 价格配额-->
        <div class="des-resource">
          <h3 class="des-column">
            <cite>&nbsp;</cite>
            价格配额
          </h3>
          <ul class="clearfix">
            <li>
              <img src="../../assets/images/quota-1.png" />
              <p>招标价格</p>
            </li>
            <li>
              <img src="../../assets/images/quota-2.png" />
              <p>招标配额</p>
            </li>

            <li>
              <img src="../../assets/images/quota-3.png" />
              <p>同料不同价</p>
            </li>

            <li>
              <img src="../../assets/images/quota-4.png" />
              <p>购销联动</p>
            </li>

            <li>
              <img src="../../assets/images/quota-5.png" />
              <p>原材料联动</p>
            </li>

            <li>
              <img src="../../assets/images/quota-6.png" />
              <p>日常数据管理</p>
            </li>
          </ul>
        </div>

        <!-- 看单打印-->
        <div class="des-resource">
          <h3 class="des-column">
            <cite>&nbsp;</cite>
            看单打印
          </h3>
          <ul class="clearfix">
            <li>
              <img src="../../assets/images/print-1.png" />
              <p>T+13周预测</p>
            </li>
            <li>
              <img src="../../assets/images/print-2.png" />
              <p>T+2周真单</p>
            </li>

            <li>
              <img src="../../assets/images/print-3.png" />
              <p>T-1看单</p>
            </li>

            <li>
              <img src="../../assets/images/print-4.png" />
              <p>T看单</p>
            </li>

            <li>
              <img src="../../assets/images/print-5.png" />
              <p>不良品看单</p>
            </li>

            <li>
              <img src="../../assets/images/print-6.png" />
              <p>T售后备货</p>
            </li>

            <li>
              <img src="../../assets/images/print-7.png" />
              <p>看单差异</p>
            </li>
          </ul>
        </div>

        <!-- 对账结算-->
        <div class="des-resource">
          <h3 class="des-column">
            <cite>&nbsp;</cite>
            对账结算
          </h3>
          <ul class="clearfix">
            <li>
              <img src="../../assets/images/settle-1.png" />
              <p>贴息录入</p>
            </li>
            <li>
              <img src="../../assets/images/settle-2.png" />
              <p>索赔数据</p>
            </li>

            <li>
              <img src="../../assets/images/settle-3.png" />
              <p>付款预算</p>
            </li>

            <li>
              <img src="../../assets/images/settle-4.png" />
              <p>往来对账</p>
            </li>
          </ul>
        </div>
      </div>

      <!-- 右侧 -->
      <div class="des-main-right">
        <rightnews></rightnews>
      </div>
    </div>

    <!-- 底部 -->
    <indexfooter></indexfooter>
  </div>
</template>

<script>
import rightnews from "./components/News";
import indexfooter from "./components/Footer";
import indexheader from "./components/Header";
export default {
  name: "desktop",
  data() {
    return {
      activeIndex: "1",
      showUpdate: -1,
      show: false,
      showNavget: false,
      showMessage: false,
      bumen: "销售部",
      time: "2019-12-03 14:36:21",
      ip: "广东省深圳市 (IP：183.14.135.1)",
      beforetime: "2017-07-03 14:36:21"
    };
  },
  components: {
    rightnews,
    indexfooter,
    indexheader
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    showCont() {
      console.log("dfsd");
      this.show = !this.show;
    },
    showNav() {
      console.log("showNav");
      this.showNavget = !this.showNavget;
    },
    showMes() {
      console.log("showMes");
      this.showMessage = !this.showMessage;
    },
    hover: function(index) {
      console.log(index);

      //这里的逻辑该怎么写呢

      //如何判断我鼠标经过的是第几个，让他对应的v-show变为true呢？

      this.showUpdate = index;
    }
  }
};
</script>


