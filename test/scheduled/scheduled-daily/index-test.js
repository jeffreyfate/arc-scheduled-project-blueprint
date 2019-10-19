const test = require('tape')
const {handler} = require('../../../src/scheduled/scheduled-daily/index')

test('index', async t => {
  handler({
    account: 'account number',
    time: 'timestamp',
    region: 'region',
    resources: 'current executing ARN',
  })

  t.ok(true)

  t.end()
})