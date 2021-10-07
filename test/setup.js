const dgram = require('dgram');
const net = require('net');

const server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    // console.log(data);
  });
});
server.listen(4567, '127.0.0.1');

const udpServer = dgram.createSocket('udp4');
udpServer.bind(4568, '127.0.0.1');

module.exports = async () => {
  global.__SERVER__ = server;
  global.__UDP_SERVER__ = udpServer;
};
