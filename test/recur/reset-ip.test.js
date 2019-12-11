import resetIP from '../../code/recur/reset-ip'

test(`resetIP`, () => {
  expect(resetIP('25511122211')).toEqual(['255.11.122.211', '255.111.22.211', '255.111.222.11'])
})
