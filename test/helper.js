function connect_host() {
  return '10.255.255.1';
}

function connect_url() {
  return 'http://' + connect_host();
}

function read_host() {
  return '127.0.0.1';
}

function read_port() {
  return 4567;
}

function read_host_and_port() {
  return read_host() + ':' + read_port();
}

function read_url() {
  return 'http://' + read_host_and_port();
}

module.exports = {connect_host, connect_url, read_host, read_port, read_host_and_port, read_url};
