const fs = require('fs');

fs.readFile('./node/fs/aaa.txt', {
  encoding: 'utf-8'
}, (err, data) => {
  if (err) {
    console.log(err)
    return
  }

  console.log(data)
})

// fs.promises.readFile('./node/fs/aaa.txt', {
//   encoding: 'utf-8'
// }).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })