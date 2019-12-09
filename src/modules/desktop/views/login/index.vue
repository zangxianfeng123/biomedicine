<template>
  <div class="login-container pull-height" @keyup.enter.native="handleLogin">
    <div class="text-white wkb-login-header">
        <img src="../../assets/images/logo.png" alt="logo" />
    </div>
    <div class="wkb-login-mainbox">
      <div class="wkb-login-main">
        <p class="wkb-login-title">海尔生物医疗SRM系统</p>
        <!--<userLogin></userLogin>-->
        <el-tabs v-model="activeName" :stretch="true">
          <el-tab-pane name="user">
            <span slot="label" class="wkb-login-tabs-label">海尔用户登录</span>
            <userLogin></userLogin>
          </el-tab-pane>
          <el-tab-pane name="supplier">
            <span slot="label" class="wkb-login-tabs-label">供应商登录</span>
            <supplierLogin></supplierLogin>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

  </div>
</template>
<script>
import userLogin from './userlogin'
import supplierLogin from './supplierLogin'

export default {
  name: 'login',
  components: {
    userLogin,
    supplierLogin
  },
  data() {
    return {
      activeName: 'user'
    }
  },
}
</script>

<style lang="scss">
.login-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: 100vh;
  padding: 0 100px;
}
.login-container::before {
  z-index: -999;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/images/loginBgImg.jpg");
  background-size: cover;
}
.wkb-login-header{
  position: absolute;
  left: 0;
  top: 30px;
  width: 100%;
  padding: 0 100px;
}

.wkb-login-mainbox {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 30px 50px 25px 50px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 1px 1px 2px #eee;
}
.wkb-login-main {
  border-radius: 3px;
  box-sizing: border-box;
  background-color: #fff;
}
.wkb-code-wrapper{
  i {
    line-height: 32px;
  }
}
.wkb-login-title {
  margin: 0 0 20px;
  text-align: center;
  color: #005FA7;
  letter-spacing: 3px;
  font-size: 18px;
}
.wkb-login-submit {
  width: 100%;
  border-radius: 4px;
}
.wkb-login-form {
  margin: 10px 0;
  .el-form-item__content {
    width: 270px;
  }
  .el-form-item {
    margin-bottom: 8px;
  }
  .el-form-item__error{
    padding: 0;
  }
  .el-input {
    input {
      text-indent: 5px;
      border-color: #dcdcdc;
      border-radius: 3px;
    }
    .el-input__prefix {
      i {
        padding: 0 5px;
        font-size: 16px !important;
      }
    }
  }
  .el-input-group__append {
    border-left: 0;
    padding: 0;
    background: none;
    border: none;
  }
}
.wkb-insall-package{
  font-size: 13px;
  color: #0079FE;
  a:hover{
    text-decoration: underline;
  }
}
</style>