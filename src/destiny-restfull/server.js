var express = require('express'),
  app = express(),
  port = process.env.PORT || 12048
var mongoose = require('mongoose')

//加载相关模型
var User = require('./api/models/user')


//加载解析中间件
var bodyParser = require('body-parser')
//连接mongodb
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/destiny')
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function(callback) {
  console.log('mmongo 连接成功!')
})

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type,Content-Length, Authorization, Accept,X-Requested-With,X-Token'
  )
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  if (req.method == 'OPTIONS') res.send(200) /*让options请求快速返回*/
  else next()
})

//加载路由
var routes = require('./api/routes/routes')
routes(app)

//处理异常请求
app.use(function(req, res) {
  res.status(404).send({
    url: req.originalUrl + ' not found'
  })
})

//启动监听
app.listen(port)

