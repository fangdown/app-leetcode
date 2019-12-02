
// export default (str) => {
//   let arr = str.split(' ')
//   let result = arr.map(item => {
//     return item.split('').reverse().join('')
//   })
//   return result.join(' ')
// }

// 优雅写法
// export default (str) => {
//   return str.split(' ').map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

// 更多方法
// export default (str) => {
//   return str.split(/\s/g).map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

export default (str) => {
  return str.match(/[\w']+/g).map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}
