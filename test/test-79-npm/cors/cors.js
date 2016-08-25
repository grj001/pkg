'use strict';

var cors = require('cors');
var req = { method: 'OPTIONS', headers: { } };
var res = { headers: {}, setHeader: function (name, value) {
  this.headers[name] = value;
}, end: function () {
  if (res.headers['Access-Control-Allow-Origin'] === '*') {
    console.log('ok');
  }
} };

var middleware = cors();
middleware(req, res);
