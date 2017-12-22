<template>
  <el-container>
    <el-header style="background-color:#24292e">
      <el-row>
        <el-col :span="2">a</el-col>
        <el-col :span="11" justify="center">
          <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#24292e" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="1">
              <i class="el-icon-setting"></i></el-menu-item>
            <el-menu-item index="2">公共书架</el-menu-item>
            <el-menu-item index="3">联系我们</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="10" justify="center">
          <el-form :inline="true" style="padding-top: 10px;" :model="formInline" class="demo-form-inline">
            <el-form-item>
              <el-input v-model="formInline.user" placeholder="搜索"></el-input>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="1">d</el-col>
      </el-row>
    </el-header>
    <el-main>
      <div style="margin:-20px;">
        <el-row class="jumbotron-codelines" style="padding:60px;">
          <el-col :span="3"></el-col>
          <el-col :span="15" class='bg-text-primary'>
            <h1>功能概述</h1>
            <p align="left">
              用户:作家||读者<br/>
              作家在不同的作品有不同的角色：作品所有者 作品编辑 作品自由撰稿人<br/>
              作品所有者:创建作品，大纲，角色设定，章节 审批角色设定 审批章节 等<br/>
              作品编辑: 可对各个模块提修改意见<br/>
              自由撰稿人:可对大纲设定等提意见 可根据大纲自由撰稿，提交章节，角色设定<br/>
            </p>
          </el-col>
          <el-col :span="3">
            <el-card class="box-card">
              <el-form class="card-box login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
                <el-form-item prop="username">
                  <el-col :span="4"><span class="svg-container svg-container_login">
                        <svg-icon icon-class="user" />
                      </span></el-col>
                  <el-col :span="16">
                    <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="邮箱" /></el-col>
                  <el-col :span="4"></el-col>
                </el-form-item>
                <el-form-item prop="password">
                  <el-col :span="4"> <span class="svg-container">
                        <svg-icon icon-class="password" />
                      </span></el-col>
                  <el-col :span="16">
                    <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on" placeholder="密码" /></el-col>
                  <el-col :span="4"><span class="show-pwd" @click="showPwd"><svg-icon icon-class="eye" /></span></el-col>
                </el-form-item>
                <el-col :span="10">
                  <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading" @click.native.prevent="handleLogin">登录</el-button>
                </el-col>
                <el-col :span="10" :offset="4">
                  <el-button class="thirdparty-button" type="success" @click="showDialog=true">第三方登录</el-button>
                </el-col>
              </el-form>
              <el-dialog title="第三方验证" :visible.sync="showDialog">
                暂不支持<br/><br/><br/> 邮箱登录成功,请选择第三方验证
                <br/>
                <social-sign />
              </el-dialog>
            </el-card>
          </el-col>
          <el-col :span="3"></el-col>
        </el-row>
        <el-row class="border-top" style="padding:60px;background-color:#f5f7fa;">
          <el-steps :active="4" align-center>
            <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
            <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
            <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
            <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
          </el-steps>
        </el-row>
        <el-row class="border-top" style="padding:60px;background-color:#f5f7fa;">
          <el-col :span="3"></el-col>
          <el-col :span="15" class='bg-text-primary'>
            <p>为什么呢，测试是上司是生死是是是</p>
          </el-col>
          <el-col :span="3">
            <p>为什么呢，测试是上司是生死是是是</p>
          </el-col>
          <el-col :span="3"></el-col>
        </el-row>
      </div>
    </el-main>
    <el-footer style="background-color:#eee">
      <p>Posted by: Cikir <a href="mailto:someone@example.com">someone@example.com</a>.</p>
    </el-footer>
  </el-container>
</template>

<script>
import { isvalidUsername } from '@/utils/validate'
import socialSign from './socialsignin'
export default {
  components: {
    socialSign
  },
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
      formInline: {
        user: '',
        region: ''
      },
      loginForm: {
        username: 'writer',
        password: '1111111'
      },
      loginRules: {
        username: [
          {
            required: true,
            trigger: 'blur',
            validator: validateUsername
          }
        ],
        password: [
          {
            required: true,
            trigger: 'blur',
            validator: validatePassword
          }
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
      this.$router.push({
        path: '/'
      })
    },
    handleChapter() {
      this.$router.push({
        path: '/'
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store
            .dispatch('LoginByUsername', this.loginForm)
            .then(() => {
              this.loading = false
              this.$router.push({
                path: '/'
              })
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
  width: 300px;
}
.border-top {
  border-top: 1px #e1e4e8 solid !important;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
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
  color: rgba(12, 12, 12, 0.6);
  background: url('http://destiny-1254002014.cosbj.myqcloud.com/timg.jpg?sign=X7ePePYiOcN4RMKbQdrhuk2pRe5hPTEyNTQwMDIwMTQmaz1BS0lENDJwVHdFdDZIR2lPeU1UWk81Qjh1aE1wOXhjQnNqaVYmZT0xNTE2NDM1NDk1JnQ9MTUxMzg0MzQ5NSZyPTE0MTY4NDMzMjUmZj0vdGltZy5qcGcmYj1kZXN0aW55'),
    #2b3137;
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
  .bg-text-primary {
    background-color: #303133;
  }
  .demo-color-box {
  }
}
</style>
