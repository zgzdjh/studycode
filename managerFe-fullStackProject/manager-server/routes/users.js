/**
 * 用户管理模块
 */
const router = require('koa-router')()
const User = require('./../models/userSchema')
const util = require('./../utils/utils')
const jwt = require('jsonwebtoken')

router.prefix('/users')

router.post('/login',async (ctx)=>{
  try {
    const { userName,userPwd } = ctx.request.body;
    const res = await User.findOne({
      userName,
      userPwd
    }, 'userId userName userEmail state role deptId roleList')
    const allUseData = res._doc;
    const token = jwt.sign({
      data: allUseData,
    },'imooc',{ expiresIn: '1h' })
  
    if(res) {
      allUseData.token = token;
      ctx.body = util.success(allUseData)
    } else {
      ctx.body = util.fail("账号或密码不正确")
    } 
  } catch (error) {
    ctx.body = util.fail(error.msg)
  }
})

module.exports = router
