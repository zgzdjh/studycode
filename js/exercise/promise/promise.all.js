Promise.myAll = function(list) {
  // 用数组记录结果
  let result = []
  let counter = 0
  // 基于promise进行封装
  return new Promise(function(resolve, reject) {
    list.map((promise,index) => {
      promise.then((res) => {
        result[index] = res
        counter = counter + 1

        if (counter === list.length) {
          resolve(result)
        }
      }, (err)=>{
        reject(err)
      })
    })
  })
}