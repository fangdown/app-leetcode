import words from '../../code/recur/words'

test(`words`, () => {
  expect(words('barfoothefoobarman', ['foo', 'bar'])).toEqual([9, 0])
})
