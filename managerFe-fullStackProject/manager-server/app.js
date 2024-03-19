const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const users = require('./routes/users')
const router = require('koa-router')()
const log4js = require('./utils/log4js')
const jwt = require('jsonwebtoken')
const koajwt = require('koa-jwt')
const util = require('./utils/utils')

// error handler
onerror(app)

// 加载数据库
require('./config/db')

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger，这个就是中间键？
app.use(async (ctx, next) => {
  // 服务端日志，方便前端请求查看
  log4js.info(`get params:${JSON.stringify(ctx.request.query)}`)
  log4js.info(`post params:${JSON.stringify(ctx.request.body)}`)
  // 这个小小的next表示所有app.use的东西都加载一遍，非常简洁，如果没有koajwt就不会401，所以这个catch检测的就是koajwt的东西
  await next().catch((err) => {
    if(err.status =='401') {
      ctx.status = 200;
      ctx.body=util.fail('Token认证失败', util.CODE.AUTH_ERR0R)
    } else {
      throw err
    }
  })
})
app.use(koajwt({secret:'imooc'}).unless({
  path:[/^\/api\/users\/login/]
}))

// routes
router.prefix("/api")

router.get('/leave/count',(ctx)=> {
  // const token = ctx.request.headers.authorization.split('')[1];
  // const payload = jwt.verify(token,'imooc')
  ctx.body = body;
})

router.use(users.routes(), users.allowedMethods())
app.use(router.routes(), router.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
