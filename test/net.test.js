const helper = require('./helper');
const net = require('net');

test('connect', done => {
  expect.assertions(1);

  const socket = new net.Socket();
  socket.setTimeout(1000);
  socket.on('timeout', () => {
    socket.destroy();
    expect(true).toBeTruthy();
    done();
  });
  socket.connect(80, helper.connectHost());
});

test('read', done => {
  expect.assertions(1);

  const socket = new net.Socket();
  socket.setTimeout(1000);
  socket.on('timeout', () => {
    socket.destroy();
    expect(true).toBeTruthy();
    done();
  });
  socket.connect(helper.readPort(), helper.readHost());
});
