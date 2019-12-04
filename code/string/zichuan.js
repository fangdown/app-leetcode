
const zichuan = (str) => {
  let r = []
  let match = (str) => {
    let j = str.match(/^(0+|1+)/)[0]
    let o = (j[0] ^ 1).toString().repeat(j.length)
    let reg = new RegExp(`^(${j}${o})`)
    if (reg.test(str)) {
      return RegExp.$1
    }
    return ''
  }
  for (let i = 0; i < str.length - 1; i++) {
    let result = match(str.slice(i))
    if (result) {
      r.push(result)
    }
  }
  return r
}

export default zichuan
