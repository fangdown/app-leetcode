const combPhone = (str) => {
  // 建立电话号码键盘映射
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  // 把输入字符串按单字符分隔变成数组，234=>[2,3,4]
  let num = `${str}`.split('')
  let code = []
  // 保存键盘映射后的字母内容，如 23=>['abc','def']
  num.forEach(n => code.push(map[n]))
  console.log('code', code)
  let comb = (arr) => {
    // 临时变量用来保存前两个组合的结果
    let tmp = []
    // 最外层的循环是遍历第一个元素，里层的循环是遍历第二个元素
    for (let i = 0; i < arr[0].length; i++) {
      for (let j = 0; j < arr[1].length; j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    // 核心，删除签名2个元素， 插入临时变量结果
    arr.splice(0, 2, tmp)
    if (arr.length > 1) {
      comb(arr)
    }
    return arr[0]
  }
  return comb(code)
}
// let result = combPhone('2345')
// console.log('result', result)
export default combPhone
