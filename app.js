var express = require('express')
var bodyParser = require('body-parser')
var router = require('./router')

var app = express()
app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

app.engine('html', require('express-art-template'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 把路由容器挂载到 app 服务中
app.use(router)


app.listen(5000, function () {
	console.log('express app is running...')
})
module.exports = app