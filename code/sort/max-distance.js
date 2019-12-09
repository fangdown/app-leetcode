// 相邻元素的最大差距
// export default arr => {
//   if (arr.length < 2) return 0
//   arr.sort()
//   let max = 0
//   for (let i = 0, len = arr.length, tmp; i < len - 1; i++) {
//     tmp = arr[i + 1] - arr[i]
//     if (tmp > max) {
//       max = tmp
//     }
//   }
//   return max
// }

// 优化版
export default arr => {
  if (arr.length < 2) return 0
  let max = 0
  let space = 0
  let len = arr.length - 1
  for (let i = len; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      }
    }
    if (i < len) {
      space = arr[i + 1] - arr[i]
      if (max < space) {
        max = space
      }
    }
  }
  // i为1时不会进入循环体需单独处理，考察点
  return Math.max(max, arr[1] - arr[0])
}
