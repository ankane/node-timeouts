function connectHost() {
  return '10.255.255.1';
}

function connectUrl() {
  return 'http://' + connectHost();
}

function readHost() {
  return '127.0.0.1';
}

function readPort() {
  return 4567;
}

function readHostAndPort() {
  return readHost() + ':' + readPort();
}

function readUrl() {
  return 'http://' + readHostAndPort();
}

module.exports = {connectHost, connectUrl, readHost, readPort, readHostAndPort, readUrl};
