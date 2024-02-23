/**
 * instanceof   mystring instanceof String
 * 能在实例的原型链中找到该构造函数的prototype属性所指向的原型对象，就返回true
 */
function _instanceof(left, right) {
    let proto = left.__proto__
    while(true) {
        if (proto === null) return false
        if (proto === right.prototype) return true
        proto = proto.__proto__
    }
}

let result = _instanceof('111', String)
console.log(result)