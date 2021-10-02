const helper = require('./helper');
const { Client } = require('pg');

test('connect', async () => {
  expect.assertions(1);
  const client = new Client({host: helper.connect_host(), connectionTimeoutMillis: 1000});
  await client.connect().catch(e => expect(e.message).toMatch('timeout expired'));
});

test('read', async () => {
  expect.assertions(1);
  const client = new Client({host: helper.read_host(), port: helper.read_port(), connectionTimeoutMillis: 1000});
  await client.connect().catch(e => expect(e.message).toMatch('timeout expired'));
});
