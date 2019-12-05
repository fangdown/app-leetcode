// 2, 1, 5, 6
export default (arr) => {
  for (let i = arr.length - 1, tmp; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      // 避免在第二个循环里定义tmp
      tmp = arr[j]
      //  不是 if (arr[j] > arr[j + 1]) {
      if (arr[j] > arr[j + 1]) {
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  return arr
}
