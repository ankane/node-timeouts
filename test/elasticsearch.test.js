const helper = require('./helper');
const { Client } = require('@elastic/elasticsearch')

test('connect', async () => {
  expect.assertions(1);
  const client = new Client({node: helper.connect_url(), requestTimeout: 1000, maxRetries: 0})
  await client.search({}).catch(e => expect(e.message).toMatch('Request timed out'));
});

test('read', async () => {
  expect.assertions(1);
  const client = new Client({node: helper.read_url(), requestTimeout: 1000, maxRetries: 0})
  await client.search({}).catch(e => expect(e.message).toMatch('Request timed out'));
});
