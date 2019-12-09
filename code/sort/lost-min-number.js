// export default arr => {
//   // 过滤非正正数
//   arr = arr.filter(item => item > 0)
//   // 判断是否为空
//   if (arr.length) {
//     arr.sort((a, b) => a - b)
//     // 非1开始
//     if (arr[0] !== 1) {
//       return 1
//     } else {
//       // 从左遍历，下一个元素和当前元素差值大于1，则当前值+1即为结果
//       for (let i = 0, len = arr.length; i < len; i++) {
//         if (arr[i + 1] - arr[i] > 1) {
//           return arr[i] + 1
//         }
//       }
//       // 边界情况， 连续的值，则最后一个值+1
//       return arr.pop() + 1
//     }
//   } else {
//     return 1
//   }
// }

// 优化
export default arr => {
  // 过滤非正正数
  arr = arr.filter(item => item > 0)
  // 使用选择排序，先拿到最小值，如果第一个元素不是1，则返回1
  for (let i = 0, len = arr.length - 1, min; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < min) {
        let c = min
        min = arr[j]
        arr[j] = c
      }
    }
    arr[i] = min
    if (i > 0) {
      if (arr[i] - arr[i - 1] > 1) {
        return arr[i - 1] + 1
      }
    } else {
      if (min !== 1) {
        return 1
      }
    }
  }
  // 判断数组是否为空
  return arr.length ? arr.pop() + 1 : 1
}
