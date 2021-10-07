const helper = require('./helper');
const { Client } = require('pg');

test('connect', async () => {
  expect.assertions(1);
  const client = new Client({host: helper.connectHost(), connectionTimeoutMillis: 1000});
  await client.connect().catch(e => expect(e.message).toMatch('timeout expired'));
});

test('read', async () => {
  expect.assertions(1);
  const client = new Client({host: helper.readHost(), port: helper.readPort(), connectionTimeoutMillis: 1000});
  await client.connect().catch(e => expect(e.message).toMatch('timeout expired'));
});
