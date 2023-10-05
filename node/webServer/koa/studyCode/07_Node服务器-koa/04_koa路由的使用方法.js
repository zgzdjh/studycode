const Koa = require('koa')
const userRouter = require('./router/userRouter')
// const KoaRouter = require('@koa/router')

// 创建服务器app
const app = new Koa()

// 3.让路由中的中间件生效
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

// 启动服务器
app.listen(6000, () => {
  console.log('koa服务器启动成功~')
})