const fs = require('fs')

fs.open('./node/fs/bbb.txt', (err, fd) => {
  if (err) {
    console.log('打开文件错误:'. err)
    return
  }

  console.log('文件描述符:', fd)

  // 查询文件的统计数据（stats）
  fs.fstat(fd, (err, stats) => {
    if (err) return null
    console.log(stats)

    // 方法用于异步关闭给定的文件描述符，从而清除与之关联的文件。这将允许文件描述符重用于其他文件。
    fs.close(fd)
  })
})