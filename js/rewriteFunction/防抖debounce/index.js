/**
 * 防抖：当持续触发事件的时候，一定时间内没有再触发事件，事件处理函数才会执行一次，如果设定时间到来之前，又触发了事件，就重新开始延时
 * 回城进度条结束，英雄才会回城（执行一个fn），如果中间被打断就得重新计时，再引导一段时间才能回去！
 */
function debounce(fn, time) {
    let timer = null
    return function(...arg) {
        if (timer !== null) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.call(undefined, ...arg)
            timer = null
        }, time)
    }
}