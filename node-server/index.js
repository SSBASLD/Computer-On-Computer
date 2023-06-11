var WebSocketServer = require('websocket').server;
var http = require('http');
var fs = require('fs').promises;

var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(200);
    response.end();
});

server.listen(8080, function() {
  console.log((new Date()) + ' Server is listening on port 8080');
});

wsServer = new WebSocketServer({
    httpServer: server,
    // You should not use autoAcceptConnections for production
    // applications, as it defeats all standard cross-origin protection
    // facilities built into the protocol and the browser.  You should
    // *always* verify the connection's origin and decide whether or not
    // to accept it.
    autoAcceptConnections: false
});

function originIsAllowed(origin) {
  // put logic here to detect whether the specified origin is allowed.
  return true;
}

let keyInputs = [];
let controllerConnection;
let websiteConnection;

let websiteConnections = {};
let controllerConnections = {};

wsServer.on('request', function(request) {
  let websiteRequest = false;
  if (request.requestedProtocols.includes("website")) {
    websiteRequest = true;
    console.log(request.requestedProtocols);
  }

  let controllerRequest = false;
  if (request.requestedProtocols.includes("controller")) {
    controllerRequest = true;
  }

  if (!originIsAllowed(request.origin)) {
    // Make sure we only accept requests from an allowed origin
    request.reject();
    console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
    return;
  }
    
  let uid = request.requestedProtocols[2];
  var connection = request.accept('echo-protocol', request.origin);
  if (controllerRequest) {
    controllerConnections[request.requestedProtocols[2]] = connection;
  } else if (websiteRequest) {
    websiteConnections[request.requestedProtocols[2]] = connection;
  } 

  console.log((new Date()) + ' Connection accepted.');
  connection.on('message', function(message) {
    if (websiteRequest) {
      console.log(uid);
      keyInputs.push(message);
      if (controllerConnection != null) {
        controllerConnection.send(message.utf8Data);
      } else {
        websiteConnection.send("Controller Application Not Started");
      }
    }
  });
  connection.on('close', function(reasonCode, description) {
    console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
  });
});