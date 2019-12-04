import flower from '../../code/array/flower'

test('flower([1, 0,0,0,1])', () => {
  expect(flower([1, 0, 0, 0, 1], 1)).toBe(true)
})
