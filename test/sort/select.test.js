import select from '../../code/sort/select'

test(`select[2, 1, 5, 6]`, () => {
  expect(select([2, 1, 5, 6])).toEqual([1, 2, 5, 6])
})
