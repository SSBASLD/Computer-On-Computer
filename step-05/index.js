'use strict';

var os = require('os');
var nodeStatic = require('node-static');
var http = require('http');
var socketIO = require('socket.io');

var fileServer = new(nodeStatic.Server)('./index.html');  
var app = http.createServer(function(req, res) {
  fileServer.serve(req, res);
}).listen(8080);
