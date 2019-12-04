import  grayCode from '../../code/array/gray-code'

test(`grayCode(2)`, () => {
  expect(grayCode(2)).toEqual(['00', '01', '11', '10'])
})
