var WebSocketServer = require('websocket').server;
var http = require('http');
var fs = require('fs').promises;

let indexFile;

var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(200);
    response.end(indexFile);
});

fs.readFile(__dirname + "/index.html")
    .then(contents => {
        indexFile = contents;
        console.log(contents);
        server.listen(8080, function() {
          console.log((new Date()) + ' Server is listening on port 8080');
        });
    })
    .catch(err => {
        console.error(`Could not read index.html file: ${err}`);
        process.exit(1);
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
wsServer.on('request', function(request) {
  let websiteRequest = false;
  if (request.requestedProtocols.includes("website")) websiteRequest = true;

  let controllerRequest = false;
  if (request.requestedProtocols.includes("controller")) controllerRequest = true;

  if (!originIsAllowed(request.origin)) {
    // Make sure we only accept requests from an allowed origin
    request.reject();
    console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
    return;
  }
    
  var connection = request.accept('echo-protocol', request.origin);
  if (controllerRequest) controllerConnection = connection;

  console.log((new Date()) + ' Connection accepted.');
  connection.on('message', function(message) {
    if (websiteRequest) {
      keyInputs.push(message);
      controllerConnection.send(message.utf8Data);
    }
  });
  connection.on('close', function(reasonCode, description) {
    console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
  });
});