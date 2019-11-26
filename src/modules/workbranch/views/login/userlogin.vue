<template>
  <div>
    <el-form class="wkb-login-form" status-icon :rules="loginRules" ref="loginForm" :model="loginForm" label-width="0">
      <el-form-item prop="username">
        <el-input size="small" @keyup.enter.native="handleLogin" v-model="loginForm.username" auto-complete="off" placeholder="请输入用户名">
          <i slot="prefix" class="el-icon-user"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input size="small" @keyup.enter.native="handleLogin" :type="passwordType" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码">
          <i class="el-icon-view el-input__icon" slot="suffix" @click="showPassword"></i>
          <i slot="prefix" class="el-icon-lock"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="code" class="wkb-code-wrapper">
        <el-input size="small" @keyup.enter.native="handleLogin" v-model="loginForm.code" auto-complete="off" placeholder="请输入验证码">
          <i slot="prefix" class="el-icon-edit-outline" style=""></i>
          <template slot="append">
            <a href="javascript:void(0)">
              <img src="../../assets/images/logoSimple.png" width="80" height="32"/>
            </a>
          </template>
        </el-input>
      </el-form-item>
      <el-checkbox v-model="checked">记住密码</el-checkbox>
      <el-form-item>
        <el-button type="primary" size="small" @click.native.prevent="handleLogin" class="wkb-login-submit">登录</el-button>
      </el-form-item>
    </el-form>
    <p class="wkb-cmm-text-center wkb-insall-package"><a href="javascript:void(0)">浏览器安装包</a></p>
  </div>
</template>

<script>
import { isvalidUsername } from '@workbranch/utils/validate';
import { Message } from 'element-ui';
export default {
  name: 'userlogin',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validateCode = (rule, value, callback) => {
      let inputCode = value.toLowerCase();
      let currCode = this.code.value.toLowerCase()
      if (inputCode !== currCode) {
        this.loginForm.code = ''
        callback(new Error('请输入正确的验证码'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '123456',
        code:'FFFF'
      },
      checked: false,
      code: {
        src: '',
        value: 'FFFF',
        len: 4,
        type: 'text'
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
        ],
          code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 4, max: 4, message: '验证码长度为4位', trigger: 'blur' },
          { required: true, trigger: 'blur', validator: validateCode }
        ]
      },
      passwordType: 'password'
    }
  },
  created() {
  },
  mounted() {},
  computed: {
  },
  props: [],
  methods: {
    showPassword() {
      this.passwordType === ''
        ? (this.passwordType = 'password')
        : (this.passwordType = '')
    },
    /*handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          console.log('this.loginForm:',this.loginForm)
          this.$store.dispatch('Login', this.loginForm).then(res => {
            this.$router.push({ path: '/dashboard/dashboard' })
          })
          
        }
      })
    },*/
    handleLogin() {
          //var _this = this;
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            console.log("this.loginForm:",this.loginForm)
            
            this.$store.dispatch('Login', this.loginForm).then(res => {
              let authRouter = res.authRouter
              //this.$store.dispatch('InitRoutes', authRouter).then((asyncRouterMap)=>{
                //console.log("currentAsyncRouterMap:::routerMap::", asyncRouterMap)
                let roles = this.$store.getters.roles;
                this.$store.dispatch('GenerateRoutes', roles).then(() => { // 根据roles权限生成可访问的路由表
                    this.$router.addRoutes(this.$store.getters.addRouters) // 动态添加可访问路由表
                    this.$router.push({ path: '/functionalArea/functionalArea' })
                })
              //})
            }).catch(err => {
                console.log(err);
                Message.error('用户名或密码错误！请重新登录');
                this.$router.replace({ path: '/login' })
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
  }
}
</script>
<style>
</style>
