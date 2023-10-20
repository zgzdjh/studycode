let string = '16:00:00'

newStringOne = string.slice(0, -3)
newStringTwo = string.slice(0, 3)

/**
 * 感觉这个slice，如果出现负数的话，就相当于在这个字符串前面再合并一个进行取值。
 * 上面代码相当于减去16:00:0016:00:00从中间到左边三个，剩下的东西。
 */

/**
 * 如果只传入一个数，表示截取第几位
 * 如果传入两个数，第一个数靠近原点，第二个可以为负
 *  如果为正数，表示截取到这个位数的字符串
 *  如果为负数，表示去掉从后往前数的字符串后剩下的内容
 */

console.log(newStringOne)
console.log(newStringTwo)
console.log(string.slice(0, -3))