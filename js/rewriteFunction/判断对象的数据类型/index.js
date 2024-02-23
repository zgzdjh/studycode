function isType(type, target) {
    return `[object ${type}]` === Object.prototype.toString.call(target)
}

// typeof instanceof Object.prototype.toString.call(obj) 三种判断数据类型方式