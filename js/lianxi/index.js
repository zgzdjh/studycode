let string = '16:00:00'

string = string.slice(0, -3)
/**
 * 感觉这个slice，如果出现负数的话，就相当于在这个字符串前面再合并一个进行取值。
 * 上面代码相当于减去16:00:0016:00:00从中间到左边三个，剩下的东西。
 */

console.log(string)