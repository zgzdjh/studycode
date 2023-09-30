const fs = require('fs');

fs.mkdir('./node/fs/why', (err) => {
  if (err) {
    console.log('新建文件夹错误', err)
  }
})

