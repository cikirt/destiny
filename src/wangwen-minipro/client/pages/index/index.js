//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: false,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 250,
    toView: 'red',
    scrollTop: 100,
    book:'红楼梦'
  },
  bookChange: function (e) {
    console.log(e)
    this.setData({
      book: e.detail.currentItemId
    })
  },

})
