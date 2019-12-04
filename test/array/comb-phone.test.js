import combPhone from '../../code/array/comb-phone'

test('combPhone(234)', () => {
  expect(combPhone(234)).toEqual([
    'adg', 'adh', 'adi',
    'aeg', 'aeh', 'aei',
    'afg', 'afh', 'afi',
    'bdg', 'bdh', 'bdi',
    'beg', 'beh', 'bei',
    'bfg', 'bfh', 'bfi',
    'cdg', 'cdh', 'cdi',
    'ceg', 'ceh', 'cei',
    'cfg', 'cfh', 'cfi'
  ])
})
