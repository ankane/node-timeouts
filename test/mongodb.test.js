const helper = require('./helper');
const { MongoClient } = require('mongodb');

test('connect', async () => {
  expect.assertions(1);
  const client = new MongoClient('mongodb://' + helper.connectHost(), {
    connectTimeoutMS: 1000,
    serverSelectionTimeoutMS: 1000
  });
  await client.connect().catch(e => expect(e.message).toMatch('connection timed out'));
});

test('read', async () => {
  expect.assertions(1);
  const client = new MongoClient('mongodb://' + helper.readHostAndPort(), {
    connectTimeoutMS: 1000,
    socketTimeoutMS: 1000,
    serverSelectionTimeoutMS: 1000
  });
  await client.connect().catch(e => {
    expect(e.message).toMatch('Server selection timed out');
  });
});
