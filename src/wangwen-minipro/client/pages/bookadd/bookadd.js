//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
Page({
  data: {
    book:{},
    showTopTips: false,
    wordCountDesc:0,
    radioItems: [
      { name: 'cell standard', value: '0' },
      { name: 'cell standard', value: '1', checked: true }
    ],
    checkboxItems: [
      { name: 'standard is dealt for u.', value: '0', checked: true },
      { name: 'standard is dealicient for u.', value: '1' }
    ],

    date: "2016-09-01",
    time: "12:01",

    countryCodes: ["+86", "+80", "+84", "+87"],
    countryCodeIndex: 0,

    booktypes: ["玄幻", "情色", "历史"],
    booktypeIndex: 0,

    accounts: ["微信号", "QQ", "Email"],
    accountIndex: 0,

    isAgree: true
  },
  showTopTips: function () {
    var that = this;
    this.setData({
      showTopTips: true
    });
    setTimeout(function () {
      that.setData({
        showTopTips: false
      });
    }, 3000);
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      radioItems: radioItems
    });
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);

    var checkboxItems = this.data.checkboxItems, values = e.detail.value;
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      checkboxItems: checkboxItems
    });
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  bindCountryCodeChange: function (e) {
    console.log('picker country code 发生选择改变，携带值为', e.detail.value);

    this.setData({
      countryCodeIndex: e.detail.value
    })
  },
  bindBooktypeChange: function (e) {
    this.setData({
      booktypeIndex: e.detail.value
    })
    this.data.book.booktype = e.detail.value
    this.setData({
      book: this.data.book
    })
  },
  bindAccountChange: function (e) {
    console.log('picker account 发生选择改变，携带值为', e.detail.value);

    this.setData({
      accountIndex: e.detail.value
    })
  },
  bindAgreeChange: function (e) {
    this.setData({
      isAgree: !!e.detail.value.length
    });
  },
  bindinputName: function (e) {
    this.data.book.name = e.detail.value
    this.setData({
      book: this.data.book
    });
  },
  bindinputDesc: function (e) {
    this.data.book.desc = e.detail.value
    this.setData({
      book: this.data.book
    });
    this.setData({
      wordCountDesc: this.data.book.desc.length
    });
    
    
  },
  bindCreate: function (e) {
    wx.showLoading({
      title: '作品创建中',
    })
    try {
      var value = wx.getStorageSync('booklist')
      console.log(value)
      if (value) {
        var itm = this.data.book
        value.push(itm)
        console.log(value)
        try {
          wx.setStorageSync('booklist', value)
        } catch (e) {
          console.log(e)
        }
      } else {
        value = [this.data.book]
        try {
          wx.setStorageSync('booklist', value)
        } catch (e) {
          console.log(e)
        }
      }
      wx.hideLoading()
      wx.showToast({
        title: '作品创建完成',
        icon: 'success',
        duration: 1000,
        complete: function () {
          setTimeout(function () {
            wx.navigateBack({
              delta: 1
            })
          }, 1000)

        }
      });

    } catch (e) {
      console.log(e)
      // Do something when catch error
      wx.hideLoading()
      wx.showToast({
        title: '作品创建失败'+e,
        icon: 'none',
        duration: 2000
      });
    }


  }
});