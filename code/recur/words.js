// 30. 串联所有单词的子串
export default (str, words) => {
  let result = []
  let num = words.length
  let rang = (r, _arr) => {
    if (r.length === num) {
      result.push(r)
    } else {
      _arr.forEach((item, idx) => {
        let tmp = [].concat(_arr)
        tmp.splice(idx, 1)
        rang(r.concat(item), tmp)
      })
    }
  }
  console.log('result', result)
  rang([], words)
  return result.map(item => {
    return str.indexOf(item.join(''))
  }).filter(item => item !== -1)
}
