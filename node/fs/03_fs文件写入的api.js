const fs = require('fs')

const content = 'hello world, my name is coderwhy'

fs.writeFile('./node/fs/ccc.txt', content, {
  encoding: 'utf-8'
}, (err) => {
  if (err) {
    console.log('写入文件错误:', err)
  } else {
    console.log('写入文件成功')
  }
})