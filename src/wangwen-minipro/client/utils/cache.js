const setCache = (key, data) => {
  var app = getApp()
  // 1.修改内存数据
  app.cache[key] = data

 // 2.异步保存到本地
  wx.setStorage({
    key: key,
    data: data
  })
  // 3.TODO 异步保存到云端

}

const getCache = (key,next) => {
  var app = getApp()
  var data = app.cache[key]
  if (app.cache[key]){
    // 1.
    next(data);
  }
  data =wx.getStorage({
    key: key,
    success: function(res) {
      // 2.
      next(res.data)
    },
    fail:function(){
      // 3.TODO 从云端获取
    }
  })
}


module.exports = { setCache, getCache }
