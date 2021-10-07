const helper = require('./helper');
const mysql = require('mysql');

test('connect', done => {
  expect.assertions(1);

  const connection = mysql.createConnection({
    host: helper.connectHost(),
    connectTimeout: 1000
  });

  connection.connect(function(e) {
    if (e) {
      expect(e.message).toMatch('ETIMEDOUT')
    }
    done();
  });
});

test.skip('read', done => {
  expect.assertions(1);

  const connection = mysql.createConnection({
    host: helper.readHost(),
    port: helper.readPort()
  });

  connection.query({sql: 'SELECT 1', timeout: 1000}, function (e, results, fields) {
    if (e) {
      expect(e.message).toMatch('ETIMEDOUT')
    }
    done();
  });
});
