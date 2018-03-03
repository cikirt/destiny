//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
  cache: new Map(),
  windowdata: {
    frontColor: "#ffffff",
    backgroundColor: "#004d40"
  },
  currentBook:{},
  onLaunch: function () {
    qcloud.setLoginUrl(config.service.loginUrl)
    var windowdata = this.windowdata
    wx.setNavigationBarColor({
      frontColor: windowdata.frontColor,
      backgroundColor: windowdata.backgroundColor,
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
  },
  onShow: function (options) {
    // Do something when show.
  },
  onHide: function () {
    // Do something when hide.
  },
  onError: function (msg) {
    console.log(msg)
  },
})