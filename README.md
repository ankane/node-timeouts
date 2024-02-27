# Node Timeouts

An unresponsive service can be worse than a down one. It can tie up your entire system if not handled properly. **All network requests should have a timeout.**

Here’s how to add timeouts for popular Node packages. **[All have been tested](test)**. The default is no timeout, unless otherwise specified. Enjoy!

Also available for [Ruby](https://github.com/ankane/the-ultimate-guide-to-ruby-timeouts), [Python](https://github.com/ankane/python-timeouts), [Go](https://github.com/ankane/go-timeouts), and [Rust](https://github.com/ankane/rust-timeouts)

[![Build Status](https://github.com/ankane/node-timeouts/actions/workflows/build.yml/badge.svg)](https://github.com/ankane/node-timeouts/actions)

## Packages

Standard library

- [child_process](#child_process)
- [dns](#dns)
- [http](#http)
- [net](#net)

NPM

- [axios](#axios)
- [cassandra-driver](#cassandra-driver)
- [got](#got)
- [mongodb](#mongodb)
- [mysql](#mysql)
- [pg](#pg)
- [redis](#redis)
- [@elastic/elasticsearch](#elasticelasticsearch)
- [@opensearch-project/opensearch](#opensearch-projectopensearch)

## Standard Library

### child_process

```javascript
exec(cmd, {timeout: 1000});
```

### dns

```javascript
new dns.Resolver({timeout: 1000});
```

### http

```javascript
http.request(url, {timeout: 1000});
```

### net

```javascript
const socket = new net.Socket();
socket.setTimeout(1000);
```

## NPM

### axios

```javascript
axios.get(url, {timeout: 1000});
// or
const instance = axios.create();
instance.defaults.timeout = 1000;
```

### cassandra-driver

```javascript
const client = new cassandra.Client({
  socketOptions: {
    connectTimeout: 1000,
    readTimeout: 1000
  }
});
```

### got

```javascript
await got(url, {timeout: 1000});
```

### mongodb

```javascript
const client = new MongoClient(uri, {
  connectTimeoutMS: 1000,
  socketTimeoutMS: 1000,
  serverSelectionTimeoutMS: 1000
});
```

### mysql

```javascript
const connection = mysql.createConnection({
  connectTimeout: 1000
});
```

Default: 10s connect timeout

### pg

```javascript
new Client({connectionTimeoutMillis: 1000});
```

### redis

```javascript
redis.createClient({connect_timeout: 1000});
```

### @elastic/elasticsearch

```javascript
new Client({requestTimeout: 1000});
```

Default: 30s

### @opensearch-project/opensearch

```javascript
new Client({requestTimeout: 1000});
```

Default: 30s

## Don’t see a library you use?

[Let us know](https://github.com/ankane/node-timeouts/issues/new). Even better, [create a pull request](https://github.com/ankane/node-timeouts/pulls) for it.

## Running the Tests

```sh
git clone https://github.com/ankane/node-timeouts.git
cd node-timeouts
npm install
```

To run all tests, use:

```sh
npm test
```

To run individual tests, use:

```sh
npm test test/http.test.js
```
