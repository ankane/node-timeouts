const helper = require('./helper');
const http = require('http');

test('connect', done => {
  expect.assertions(1);

  const req = http.get(helper.connectUrl(), {timeout: 1000});
  req.on('timeout', () => req.destroy());

  req.on('error', (err) => {
    expect(err.message).toMatch('socket hang up');
    done();
  });

  req.end();
});

test('read', done => {
  expect.assertions(1);

  const req = http.get(helper.readUrl(), {timeout: 1000});
  req.on('timeout', () => req.destroy());

  req.on('error', (err) => {
    expect(err.message).toMatch('socket hang up');
    done();
  });

  req.end();
});
