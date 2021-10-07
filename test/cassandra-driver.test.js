const helper = require('./helper');
const cassandra = require('cassandra-driver');

test('connect', () => {
  expect.assertions(1);

  const client = new cassandra.Client({
    contactPoints: [helper.connectHost()],
    socketOptions: {connectTimeout: 1000}
  });

  return client.execute('SELECT 1').catch(e => expect(e.message).toMatch('Connection timeout'));
});

test('read', () => {
  expect.assertions(1);

  const client = new cassandra.Client({
    contactPoints: [helper.readHostAndPort()],
    socketOptions: {readTimeout: 1000}
  });

  return client.execute('SELECT 1').catch(e => expect(e.message).toMatch('did not reply before timeout'));
});
