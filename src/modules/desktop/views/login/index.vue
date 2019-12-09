<template>
  <div class="login-container pull-height" @keyup.enter.native="handleLogin">
    <div class="text-white wkb-login-header">
        <img src="../../assets/images/logo.png" alt="logo" />
    </div>
    <div class="wkb-login-mainbox">
      <div class="wkb-login-main">
        <p class="wkb-login-title">欢迎登录</p>
        <userLogin></userLogin>
      </div>
    </div>

  </div>
</template>
<script>
import userLogin from './userlogin'
export default {
  name: 'login',
  components: {
    userLogin
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
  background-image: url("../../assets/images/logo-new.png");
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

.wkb-login-main > p {
  color: #76838f;
}
.wkb-login-title {
  margin: 0 0 20px;
  text-align: center;
  color: #555;
  letter-spacing: 3px;
  font-size: 21px;
}
.wkb-login-submit {
  margin-top: 20px;
  width: 100%;
  border-radius: 28px;
}
.wkb-login-form {
  margin: 10px 0;
  .el-form-item__content {
    width: 270px;
  }
  .el-form-item {
    margin-bottom: 14px;
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
  font-size: 14px;
  color: #666;
  a:hover{
    text-decoration: underline;
  }
}
</style>