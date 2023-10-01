const express = require('express')
const multer = require('multer')

// 创建app对象
const app = express()

// 上传文件，我们可以使用express提供的multer来完成：
const upload = multer({
  dest: './uploads'
})

// 上传单文件: singer方法
app.post('/avatar', upload.single('avatar') , (req, res, next) => {
  console.log(req.file)
  res.end('文件上传成功~')
})

// 启动服务器
app.listen(9000, () => {
  console.log('express服务器启动成功~')
})
