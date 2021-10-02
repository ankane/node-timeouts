const helper = require('./helper');
const axios = require('axios');

test('connect', () => {
  expect.assertions(1);
  return axios.get(helper.connect_url(), {timeout: 1000}).catch(e => expect(e.message).toMatch('timeout of 1000ms exceeded'));
});

test('read', () => {
  expect.assertions(1);
  return axios.get(helper.read_url(), {timeout: 1000}).catch(e => expect(e.message).toMatch('timeout of 1000ms exceeded'));
});

test('connect defaults', () => {
  expect.assertions(1);
  const instance = axios.create();
  instance.defaults.timeout = 1000;
  return instance.get(helper.connect_url()).catch(e => expect(e.message).toMatch('timeout of 1000ms exceeded'));
});

test('read defaults', () => {
  expect.assertions(1);
  const instance = axios.create();
  instance.defaults.timeout = 1000;
  return instance.get(helper.read_url()).catch(e => expect(e.message).toMatch('timeout of 1000ms exceeded'));
});
