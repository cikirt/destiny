
Page({
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '《红楼梦》'
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
  },
  gotoChapterEdit: function (e) {
    wx.navigateTo({
      url: '../../pages/chapteredit/chapteredit?param1=4'
    })
  },
});