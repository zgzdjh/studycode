/**
 * 发布订阅模式，它其实是一种对象间一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到状态改变的通知
 */
/**
 * 问题3：好像是一种设计模式，问问老师这个东西的必要性和有没有相关的课程，水平嘛能应付面试就好，一脸懵状态，怎么还有设计模式这种东西
 */

let crop = {} 
crop.list = []
crop.on = function (fn) {
    this.list.push(fn)
}
crop.emit = function () {
    this.list.forEach(cb => {
        cb.apply(this, arguments)
    })
}