const helper = require('./helper');
const redis = require('redis');

test('connect', done => {
  const client = redis.createClient({host: helper.connectHost(), connect_timeout: 1000});
  client.on('error', function(error) {
    client.stream.destroy();
    done();
  });
});
