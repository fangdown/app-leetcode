import zichuan from '../../code/string/zichuan'

test(`zichuan(00110011)`, () => {
  expect(zichuan('00110011')).toEqual(['0011', '01', '1100', '10', '0011', '01'])
})
