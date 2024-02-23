function Person(name, age) {
    this.name = name;
    this.age = age;
}

let person1 = new Person('张三', 18);

console.log(person1)
/**
 * 创建一个obj
 * 将obj的__proto__指向构造函数的prototype
 * 执行构造函数并且指定obj为构造函数的this上下文
 */
function _new() {
    let [constructor, ...arg] = [...arguments]

    let obj = {}
    obj.__proto__ = constructor.prototype
    let result = constructor.call(obj, ...arg)

    return typeof result === 'object' ? result : obj   // 问题1，为什么不加这个就会返回undefined
}

let person2 = _new(Person, '李四', 30)
let person3 = _new(Person)

console.log(person2)
console.log(person3)