const helper = require('./helper');
const dns = require('dns').promises;

test('connect', () => {
  expect.assertions(1);

  const resolver = new dns.Resolver({timeout: 1000, tries: 1});
  resolver.setServers([helper.connectHost()]);
  return resolver.resolve4('example.com').catch(e => expect(e.message).toMatch('ETIMEOUT'));
});

// uses UDP
test('read', () => {
  expect.assertions(1);

  const resolver = new dns.Resolver({timeout: 1000, tries: 1});
  resolver.setServers([helper.readHost() + ':4568']);
  return resolver.resolve4('example.com').catch(e => expect(e.message).toMatch('ETIMEOUT'));
});
