const helper = require('./helper');
const dns = require('dns').promises;

test('connect', () => {
  expect.assertions(1);

  const resolver = new dns.Resolver({timeout: 1000, tries: 1});
  resolver.setServers([helper.connect_host()]);
  return resolver.resolve4('example.com').catch(e => expect(e.message).toMatch('ETIMEOUT'));
});

// uses UDP
test.skip('read', () => {
  expect.assertions(1);

  const resolver = new dns.Resolver({timeout: 1000, tries: 1});
  resolver.setServers([helper.read_host_and_port()]);
  return resolver.resolve4('example.com').catch(e => expect(e.message).toMatch('ETIMEOUT'));
});
