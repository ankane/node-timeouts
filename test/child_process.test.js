const helper = require('./helper');
const { execSync } = require('child_process');

test('timeout', () => {
  expect(() => {
    execSync('sleep 10', {timeout: 1000});
  }).toThrow('ETIMEDOUT');
});
