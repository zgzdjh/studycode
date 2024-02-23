// 之前用*表示所有，但是应该用\s\S表示所有字符，反正这个东西对于现在的我来说就是一种尝试！
const REG = /<script>([\s\S]+?)<\/script>/

module.exports = function(source) {
    const __source = source.match(REG)
    console.log('== imooc-loader running ==')
    console.log(__source)
    // 只有这种形式的代码才是js代码，webpack就是把其他类型的文件打包成js文件，只要变成js，他就不会报错！
    console.log(__source[1])
    console.log(source)
    console.log('== imooc-loader running ==')
    // 这可能是loader的一种固定的返回方式
    return __source && __source[1] ? __source[1] : source;
}

// 单独测试这个模块的时候，就是他是主模块
if (require.main === module) {
  const source = `<script>
  export default {
    a: 1,
    b: 2,
  }
</script>`
const match = source.match(REG);
console.log(match)
}