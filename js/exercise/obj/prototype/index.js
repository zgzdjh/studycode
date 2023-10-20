// 1. 通过create实现改变prototype指向

let fuObject = {
  sayHello() {
    console.log("Hello World")
  }
}

let x = Object.create(fuObject)

x.sayHello()

// 2. 通过构造函数改变prototype指向

function gouZaoHanShu(name) {
  this.name = name
}

// 这个与上面的内容等价
// let gouZaoHanShu = function (name) {
//   this.name = name
// }

let y = new gouZaoHanShu("wang")

console.log(y.name)
