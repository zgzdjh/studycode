const express = require('express')

const app = express()

// 直接使用express提供给我们的中间件
// 它解析传入的 JSON 请求并将解析的数据放入 req.body
app.use(express.json())

// 注册两个实际请求的中间件
// 案例一: 用户登录的请求处理 /login post => username/password
app.post('/login', (req, res, next) => {
  console.log(req.body)
  res.end('Hello World')
})

// 案例二: 注册用户的请求处理 /register post => username/password
app.post('/register', (req, res, next) => {
  console.log(req.body)
})

app.listen(9000, () => {
  console.log('express服务器启动成功~')
})
