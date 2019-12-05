export default arr => {
  let min
  let tmp
  for (let i = 0; i < arr.length; i++) {
    min = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      // 注意这里的比较， 赋值最小， 换值
      if (arr[j] < min) {
        tmp = min
        min = arr[j]
        arr[j] = tmp
      }
    }
    // 把最小值放入到前面
    arr[i] = min
  }
  return arr
}
