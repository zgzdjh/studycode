function Fn(){
  var a = 12
  this.getName = function(){
      console.log('private getName')
  }
}

Fn.prototype.getName = function (){
    console.log('public getName')
}

var fn = new Fn()
var fn1 = new Fn()
// 1，2
console.log(fn.a) // 没有用this，不会写到prototype里面
console.log(fn.getName()) // public getName
// 3，4，5
console.log(fn.getName === fn1.getName) // true => false
console.log(fn.__proto__.getName === fn1.__proto__.getName) // true
console.log(fn.__proto__.getName === Fn.prototype.getName) // false => true
//6，7
console.log(fn.hasOwnProperty === Object.prototype.hasOwnProperty) // false => true
console.log(fn.constructor === Fn) // true

// 等学完面向对象精要，再回来理解