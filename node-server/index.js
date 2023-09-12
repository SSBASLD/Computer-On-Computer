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

const heartbeat = (ws) => {
  ws.isAlive = true
}

const ping = (ws) => {
  // do some stuff
}

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

let connections = [];

wsServer.on('request', function(request) {
  let websiteRequest = false;
  if (request.requestedProtocols.includes("website")) {
    websiteRequest = true;
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

  request.socket.isAlive = true;
  request.socket.on('pong', () => { heartbeat(socket) });

  connections.push(request.socket);

  if (controllerRequest) {
    controllerConnections[uid] = connection;
  } else if (websiteRequest) {
    websiteConnections[uid] = connection;
  } 

  console.log((new Date()) + ' Connection accepted.');
  connection.on('message', function(message) {
    if (websiteRequest) {
      keyInputs.push(message);
      if (controllerConnections[uid] != null) {  
        controllerConnections[uid].send(message.utf8Data);
      } else {
        websiteConnections[uid].send("Error: Controller Application Not Started");
      }
    }
  });
  connection.on('close', function(reasonCode, description) {
    console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
  });
});

const interval = setInterval(() => {
  connections.forEach((ws) => {
     if (ws.isAlive === false) {
          return ws.terminate()
      }

      console.log(ws);

      ws.isAlive = false
      ws.ping(() => { ping(ws) })
  })
}, 30000)