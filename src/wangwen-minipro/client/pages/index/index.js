//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({

  data: {
    indicatorDots: false,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 250,
    toView: 'first',
    scrollTop: 0,
    book: '红楼梦',
    booklist: []
  },
  onLoad: function () {
    var self = this
    // wx.setStorage({
    //   key: "booklist",
    //   data: [{name:"红楼梦",id:1,desc:"描述1"},{name:"三国演义",id:2,desc:"描述2"}]
    // })
    try {
      wx.setStorageSync("booklist", [{ name: "红楼梦", id: 1, desc: "描述1", class: 'book_color_1' },
        { name: "三国演义", id: 2, desc: "描述2", class: 'book_color_2' }])
      wx.getStorage({
        key: "booklist",
        success: function (res) {
          console.log(res.data)
          self.setData({ booklist: res.data })
        }
      })
    } catch (e) {
    }

  },
  bookChange: function (e) {
    console.log(e)
    this.setData({
      book: e.detail.currentItemId
    })
  },
  gotoChapterEdit: function (e) {
    wx.navigateTo({
      url: '../../pages/chapteredit/chapteredit?param1=4'
    })
  },
  gotoChapterList: function (e) {
    wx.navigateTo({
      url: '../../pages/chapterlist/chapterlist?param1=345'
    })
  },
  gotoBookEdit: function (e) {
    wx.navigateTo({
      url: '../../pages/bookedit/bookedit?param1=345'
    })
  },
  gotoBookAdd: function (e) {
    wx.navigateTo({
      url: '../../pages/bookadd/bookadd?param1=345'
    })
  },
  open: function () {
    wx.showActionSheet({
      itemList: ['编辑', '删除'],
      success: function (res) {
        if (!res.cancel) {
          console.log(res.tapIndex)
        }
      }
    });
  }

})
