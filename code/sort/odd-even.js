export default arr => {
  // 正向排序
  arr.sort((a, b) => a - b)
  let odd = 1
  let even = 0
  let result = []
  // 奇数位存放奇数 偶数位存放偶数
  arr.forEach(item => {
    if (item % 2 === 0) {
      result[even] = item
      even += 2
    } else {
      result[odd] = item
      odd += 2
    }
  })
  return result
}
