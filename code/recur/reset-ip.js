export default str => {
  // 存放结果
  let r = []
  let search = (cur, sub) => {
    // 边界条件
    if (cur.length === 4 && cur.join('') === str) {
      r.push(cur.join('.'))
    } else {
      // 正常逻辑处理
      for (let i = 0, tmp, len = Math.min(3, sub.length); i < len; i++) {
        tmp = sub.substr(0, i + 1)
        if (tmp < 256) {
          search(cur.concat(tmp), sub.substr(i + 1))
        }
      }
    }
  }
  search([], str)
  return r
}
