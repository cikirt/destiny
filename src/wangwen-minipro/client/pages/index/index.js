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
    nextMargin: '90px',
    cBookId: "add",
    booklist: [],
    chapterCount: 0,
    wordCount: 0,
    chapterList: []
  },
  onShow: function (options) {
    // 每次界面重新打开时都从存储直接读取
    // TODO 优化成首次才读文件 后续都直接通过app.js 内存增删查改对象 
    var self = this
    wx.getStorage({
      key: "booklist",
      success: function (res) {
        self.data.booklist = res.data
        if (self.data.booklist.length > 0) {
          self.setData({ nextMargin: '90px' })
        } else {
          self.setData({ nextMargin: '0px' })
        }
        self.data.booklist.forEach(function (itm, index, array) {

          self.data.booklist[index].bookclass = self.getBookClass(itm.booktype)
        })
        self.setData({ booklist: self.data.booklist })
        // 获取滑块所在的id 获取章节列表  和章节统计信息
        if (self.data.cBookId == "add" && self.data.booklist.length>0) {
          self.data.cBookId = self.data.booklist[0].id
          self.setData({ cBookId: self.data.cBookId })
        }
        var chapterList = self.getChapterList(self.data.cBookId)
        if (chapterList) {
          self.setData({ chapterCount: chapterList.chapterCount })
          self.setData({ wordCount: chapterList.wordCount })
          self.setData({ chapterList: chapterList.chapterList })
        }
      }
    })
  },
  onLoad: function () {
  },
  bookChange: function (e) {

    var self = this
    this.setData({
      cBookId: e.detail.currentItemId
    })
    console.log(this.data.cBookId)
    var chapterList = self.getChapterList(self.data.cBookId)
    if (chapterList) {
      self.setData({ chapterCount: chapterList.chapterCount })
      self.setData({ wordCount: chapterList.wordCount })
      self.setData({ chapterList: chapterList.chapterList })
    } else {
      self.setData({ chapterCount: 0 })
      self.setData({ wordCount: 0 })
      self.setData({ chapterList: [] })
    }
  },
  getChapterList: function (bookid) {
    if (bookid === "add") {
      return {
        chapterCount: 0,
        wordCount: 0,
        chapterList: [
        ]
      }
    } else {
      return {
        chapterCount:8,
        wordCount: 8999877,
        chapterList: [
          { id: 1, index: 1, title: 'oooo' },
          { id: 122, index: 2, title: '什么情况，这一章是' },
          { id: 133, index: 3, title: '什么情况，这一章是' },
          { id: 144, index: 4, title: '什么情况，这一章是' },
          { id: 155, index: 5, title: '什么情况，这一章是' },
          { id: 166, index: 6, title: '什么情况，这一章是' },
          { id: 177, index: 7, title: '什么情况，这一章是' },
          { id: 188, index: 8, title: '什么情况，这一章是' }]
      }
    }
    
  },
  gotoChapterEdit: function (e) {
    console.log("??", this.data.cBookId)
    if (this.data.cBookId === "add") {
      wx.showToast({
        title: '请先创建作品',
        icon: 'none',
        duration: 2000
      });
    } else {
      wx.navigateTo({
        url: '../../pages/chapteredit/chapteredit'
      })
    }
  },
  gotoChapterList: function (e) {
    console.log("??", this.data.cBookId)
    if (this.data.cBookId === "add") {
      wx.showToast({
        title: '请先创建作品',
        icon: 'none',
        duration: 2000
      });
    } else {
      wx.navigateTo({
        url: '../../pages/chapterlist/chapterlist?param1=345'
      })
    }
  },
  getBookClass: function (booktype) {
    console.log(booktype)
    switch (booktype) {

      case "0":
        return 'book_color_1'
      case "1":
        return 'book_color_2'
      default:
        return 'book_color_3'
    }
  },
  gotoBookEdit: function (e) {
    var app = getApp()
    // Get the global data and change it.
    app.currentBook = e.currentTarget.dataset.itm
    wx.navigateTo({
      url: '../../pages/bookedit/bookedit?param1=345'
    })
  },
  gotoBookAdd: function (e) {
    wx.navigateTo({
      url: '../../pages/bookadd/bookadd?param1=345'
    })
  },
  gotoBookOutLine: function (e) {
    wx.navigateTo({
      url: '../../pages/bookoutline/bookoutline?param1=345'
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
