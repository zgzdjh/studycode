/**
 * 浅拷贝：如果被拷贝的内容中有引用对象，以赋值形式将地址拷贝，即他们指向同一个地址，修改时元对象也会收到影响
 * 深拷贝：完全拷贝一个对象，修改时原对象不在受到任何影响
 */

let obj = {
    id: 1,
    name: 'andy',
    msg: {
        age: 18
    }
}

// 浅拷贝
let newObj = Object.assign({}, obj)
let newObj2 = {...obj}

// 深拷贝
function deepCopy(oldObj) {
    // 过滤特殊情况
    if (oldObj === null) return null
    if (typeof oldObj !== 'object') return oldObj
    if (oldObj instanceof RegExp) {
        return new RegExp(oldObj)
    }
    if (oldObj instanceof Date) {
        return new Date(oldObj)
    }
    
    // 不直接创建空对象的目的: 克隆的结果和之前保持相同所属类  问题2：这个是为了让他们的prototype保持一样嘛
    let newObj = new oldObj.constructor
    for (let k in oldObj) {
        if (oldObj.hasOwnProperty(k)) {
            newObj[k] = deepCopy(oldObj[k])
        }
    }
    return newObj
}
let newObj3 = deepCopy(obj)

// 还可以利用JSON
function deepClone(oldObj) {
    return JSON.parse(JSON.stringify(oldObj))
}
let newObj4 = deepClone(obj)

// console.log('assign', newObj)
// console.log('...', newObj2)
console.log('rewriteDeepCopy', newObj3)
// console.log('JSON', newObj4)

// obj.msg.age = 'wangyebin'

// console.log('assign', newObj)
// console.log('...', newObj2)
// console.log('rewriteDeepCopy', newObj3)
// console.log('JSON', newObj4)