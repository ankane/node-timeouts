const helper = require('./helper');
const { Client } = require('@elastic/elasticsearch')

test('connect', async () => {
  expect.assertions(1);
  const client = new Client({node: helper.connectUrl(), requestTimeout: 1000, maxRetries: 0})
  await client.search({}).catch(e => expect(e.message).toMatch('Request timed out'));
});

test('read', async () => {
  expect.assertions(1);
  const client = new Client({node: helper.readUrl(), requestTimeout: 1000, maxRetries: 0})
  await client.search({}).catch(e => expect(e.message).toMatch('Request timed out'));
});
