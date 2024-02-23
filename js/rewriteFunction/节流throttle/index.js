/**
 * 节流：当事情触触发过一次之后，再过一段时间才能挨次触发。
 * 技能冷却中, 在技能进入cd的时候不能使用技能。
 */
function throttle (fn, time) {
    let timer = null
    return function(...arg) {
        if (timer) return null
        fn.call(undefined, ...arg)
        
        timer = setTimeout(() => {
            timer = null
        }, time)
    }
}