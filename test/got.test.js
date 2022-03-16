const helper = require('./helper');
const got = require('got');

test('connect', async () => {
  expect.assertions(1);
  await got(helper.connectUrl(), {timeout: 1000, retry: 0}).catch(e => expect(e.message).toMatch("Timeout awaiting 'request' for 1000ms"));
});

test('read', async () => {
  expect.assertions(1);
  await got(helper.readUrl(), {timeout: 1000, retry: 0}).catch(e => expect(e.message).toMatch("Timeout awaiting 'request' for 1000ms"));
});
