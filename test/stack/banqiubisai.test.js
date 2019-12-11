import bqbs from '../../code/stack/banqiubisai'

test(`bqbs(['5', '2', 'C', 'D', '+'])`, () => {
  expect(bqbs(['5', '2', 'C', 'D', '+'])).toBe(30)
})
