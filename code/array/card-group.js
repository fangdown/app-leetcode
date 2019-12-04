// 卡牌分组
const cardGroup = (arr) => {
  arr.sort((a, b) => a - b)
  // 先设置一个最大值
  let min = Number.MAX_SAFE_INTEGER
  let dst = []
  let result = true
  // 0 1 => [1,1]
  // 2 3 => [2, 2]
  // 2 4=> [2,2,2]
  // 2 5 => [2,2,2,2]
  for (let i = 0, tmp = [], len = arr.length; i < len; i++) {
    tmp.push(arr[i])
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        tmp.push(arr[j])
        // 存在最后一个值是连续的
        if (j === len - 1) {
          i = j
          dst.push([].concat(tmp))
          tmp = []
          break
        }
      } else {
        // 最大值如果大于tmp的长度，则把min设置改值，这样能保证min是最小的
        if (min > tmp.length) {
          min = tmp.length
        }
        dst.push([].concat(tmp))
        tmp = []
        i = j - 1
        break
      }
    }
    // 存在最后一个值无法被加入到dst中
    if (i === arr.length - 1 && tmp.length) dst.push([].concat(tmp))
  }
  result = dst.every(v => v.length % min === 0)
  return result
}
console.log(cardGroup([1, 1, 2, 2, 2, 2]))
export default cardGroup
