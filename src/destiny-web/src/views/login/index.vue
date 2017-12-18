<template>
<el-container>
  <el-header>
    <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">公共书架</el-menu-item>
  <el-menu-item index="2">联系我们</el-menu-item>
  <el-submenu index="3">
    <template slot="title">个人中心</template>
    <el-menu-item index="2-1">我的项目</el-menu-item>
    <el-menu-item index="2-2">登录</el-menu-item>
    <el-menu-item index="2-3">注销</el-menu-item>
  </el-submenu>
</el-menu>

  </el-header>
  <el-main>
 
 <div class="jumbotron jumbotron-codelines">
       <div class="container-lg  p-responsive position-relative{">
   <div class="d-md-flex flex-items-center gutter-md-spacious">
   <el-row>
  <el-col :span="14"><div class="grid-content bg-purple">
    多人协同写作，。。。。。。。。。。。。。
 
    </div></el-col>
  <el-col :span="10"><div class="grid-content bg-purple-light">
    <el-form class="card-box login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
      <el-form-item prop="username">
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="user" />
        </span>
        <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="邮箱" />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on"
          placeholder="密码" />
        <span class="show-pwd" @click="showPwd"><svg-icon icon-class="eye" /></span>
      </el-form-item>

      <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading" @click.native.prevent="handleLogin">登录</el-button>
      <!-- <el-button class="thirdparty-button" type="primary" @click="showDialog=true">打开第三方登录</el-button> -->
    </el-form>

    <el-dialog title="第三方验证" :visible.sync="showDialog">
      本地不能模拟，请结合自己业务进行模拟！！！<br/><br/><br/>
      邮箱登录成功,请选择第三方验证<br/>
      <social-sign />
    </el-dialog>
    </div></el-col>
</el-row>
</div></div>
</div>
 <div class="featurette ">
    <div class="container-lg p-responsive">
   <div >
   <el-row>
  <el-col :span="14"><div class="grid-content bg-purple">
 balabala
    </div>
    </el-col>
  <el-col :span="10"><div class="grid-content bg-purple-light">
  balabaall
    </div>
  </el-col>
</el-row>
</div></div>
</div>
  </el-main>
  <el-footer>Footer</el-footer>
</el-container>
  
</template>

<script>
import { isvalidUsername } from '@/utils/validate'
import socialSign from './socialsignin'

export default {
  components: { socialSign },
  name: 'login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能小于6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'writer',
        password: '1111111'
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword }
        ]
      },
      pwdType: 'password',
      loading: false,
      showDialog: false
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleOutlone() {
      this.$router.push({ path: '/' })
    },
    handleChapter() {
      this.$router.push({ path: '/' })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store
            .dispatch('LoginByUsername', this.loginForm)
            .then(() => {
              this.loading = false
              this.$router.push({ path: '/' })
              // this.showDialog = true
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    afterQRScan() {
      // const hash = window.location.hash.slice(1)
      // const hashObj = getQueryObject(hash)
      // const originUrl = window.location.origin
      // history.replaceState({}, '', originUrl)
      // const codeMap = {
      //   wechat: 'code',
      //   tencent: 'code'
      // }
      // const codeName = hashObj[codeMap[this.auth_type]]
      // if (!codeName) {
      //   alert('第三方登录失败')
      // } else {
      //   this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
      //     this.$router.push({ path: '/' })
      //   })
      // }
    }
  },
  created() {
    // window.addEventListener('hashchange', this.afterQRScan)
  },
  destroyed() {
    // window.removeEventListener('hashchange', this.afterQRScan)
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'src/styles/mixin.scss';
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.box-card {
  width: 480px;
}
/*media all*/
.container-lg {
  max-width: 1012px;
  s: auto;
  margin-left: auto;
}
/*@media all and (min-width:1280px)*/
.jumbotron {
  padding-top: 120px;
  padding-bottom: 120px;
}

/*media all*/
.jumbotron-codelines {
  color: rgba(255, 255, 255, 0.6);
  background: url('/gifs/dynamictable'), #2b3137;
  background-position: center 10%;
  background-size: cover;
}
/*media all*/
.position-relative {
  position: relative !important;
}
/*@media all and (min-width:1012px)*/
.featurette {
  padding-top: 80px;
  padding-bottom: 80px;
}

/*media all*/
.p-responsive {
  padding-right: 16px !important;
  padding-left: 16px !important;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 24px;
}

/*@media all and (min-width:768px)*/
.d-md-flex {
  display: -webkit-box !important;
  display: flex !important;
}
/*media all*/
.flex-items-center {
  -webkit-box-align: center !important;
  align-items: center !important;
}
/*@media all and (min-width:768px)*/
.gutter-md-spacious {
  margin-right: -24px;
  margin-left: -24px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 24px;
}

body > .el-container {
  margin-bottom: 40px;
}

.login-container {
  @include relative;
  height: 100vh;
  background-color: $bg;
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
    -webkit-text-fill-color: #fff !important;
  }
  input {
    background: transparent;
    border: 0px;
    -webkit-appearance: none;
    border-radius: 0px;
    padding: 12px 5px 12px 15px;
    color: $light_gray;
    height: 47px;
  }
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: $light_gray;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .thirdparty-button {
    position: absolute;
    right: 35px;
    bottom: 28px;
  }
}
</style>
