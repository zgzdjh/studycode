const express = require('express')
const userRouter = require('./router/userRouter')

// 创建app对象
const app = express()

// 让路由生效
app.use('/users', userRouter, (req, res, next) => {})

// 启动服务器
app.listen(9000, () => {
  console.log('express服务器启动成功~')
})
