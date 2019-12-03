
  <!-- 
    功能：首页-供应商
    作者：李玲
    时间：2019-12-03
  -->
<template>
  <div class="des-demo">
    <!-- 头部 -->
    <indexheader></indexheader>

    <div class="des-main clearfix">
      <!-- 左侧 -->
      <div class="des-main-left">
        <!-- 供应商 -->
        <div class="des-resource">
          <h3 class="des-column">
            <cite>&nbsp;</cite>供应商资源
          </h3>
          <ul class="clearfix">
            <li>
              <img src="../../assets/images/supplier-1.png" />
              <p>行业资质</p>
            </li>

            <li>
              <img src="../../assets/images/supplier-2.png" />
              <p>新供应商公示</p>
            </li>

            <li>
              <img src="../../assets/images/supplier-3.png" />
              <p>供应商绩效</p>
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
              <p>公开需求</p>
            </li>

            <li>
              <img src="../../assets/images/needs-2.png" />
              <p>定向需求</p>
            </li>

            <li>
              <img src="../../assets/images/needs-3.png" />
              <p>衍生需求</p>
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

        <!-- 价格配额-->
        <div class="des-resource">
          <h3 class="des-column">
            <cite>&nbsp;</cite>
            价格配额
          </h3>
          <ul class="clearfix">
            <li>
              <img src="../../assets/images/settle-1.png" />
              <p>发票管理</p>
            </li>
            <li>
              <img src="../../assets/images/settle-3.png" />
              <p>贴息标准申请</p>
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
        <suppliernews></suppliernews>
      </div>
    </div>

    <!-- 弹出层  用户信息 -->
    <div class="des-nav-body">
      <div class="des-nav-header">
        <h3>
          账户信息
          <a href="#">账户设置</a>
        </h3>
      </div>
      <div class="des-userinfo-body">
        <p>
          • 所在部门：
          <span>{{bumen}}</span>
        </p>

        <p>
          • 本次登录：
          <span>{{time}}</span>
        </p>

        <p>
          • 登录地区：
          <span>{{ip}}</span>
        </p>

        <p>
          • 上次登录：
          <span>{{beforetime}}</span>
        </p>
      </div>
    </div>

    <!-- 弹出层  经常访问 -->
    <div class="des-nav-body">
      <div class="des-nav-header">
        <h3>
          常用菜单
          <a href="#">菜单管理</a>
        </h3>
      </div>
      <div class="des-accessed-body">
        <ul class="clearfix">
          <li>管理员列表</li>
          <li>添加管理员</li>
          <li>订单列表</li>
          <li>用户管理</li>
          <li>交易统计</li>
          <li>账单管理</li>
          <li>专题列表</li>
          <li>部门管理</li>
        </ul>
      </div>
    </div>

    <!-- 弹出层  消息 -->
    <div class="des-nav-body">
      <div class="des-nav-header">
        <h3>系统信息</h3>
      </div>
      <div class="des-messages-body">
        <p>
          未读消息
          <span>
            (
            <cite>10</cite>)
          </span>
        </p>
        <p>
          已读消息
          <span>
            (
            <cite>10</cite>)
          </span>
        </p>
        <p>
          内部推送消息
          <span>
            (
            <cite>10</cite>)
          </span>
        </p>
      </div>
    </div>

    <!-- 底部 -->
    <indexfooter></indexfooter>

  </div>
</template>

<script>
import suppliernews from "./components/NewsSupplier";
import indexfooter from "./components/Footer";
import indexheader from "./components/Header";
export default {
  name: "desktop",
  data() {
    return {
      bumen: "销售部",
      time: "2019-12-03 14:36:21",
      ip: "广东省深圳市 (IP：183.14.135.1)",
      beforetime: "2017-07-03 14:36:21"
    };
  },
  components: {
    suppliernews,
    indexfooter,
    indexheader
  }
};
</script>



