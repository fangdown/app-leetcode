import maxrect from '../../code/stack/maxrect'

test(`maxrect`, () => {
  let arr = [
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0']
  ]
  expect(maxrect(arr)).toBe(6)
})
