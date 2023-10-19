function aaa() {
  let result = 0

  for (let i = 0; i < arguments.length; i++) {
    result = result + arguments[i]
  }

  return result
}

console.log(aaa(1,2,3,4))
console.log(aaa.length) // 说明函数有多少个参数的

function reflect(value) {
  return value
}

console.log(reflect.length)