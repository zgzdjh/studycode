function removeDup(arr) {
    let hashMap = {}
    let resultArr = []

    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i]
        if (!hashMap.hasOwnPropertys(temp)) {
            hashMap[temp] = true
            resultArr.push(temp)
        }
    }

    return resultArr
}

// 二
Array.from(new Set(arr))

// 三
let arr = [...new Set(arr)]
// [...new Set(arr)]