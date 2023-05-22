var WebSocketServer = require('websocket').server;
var http = require('http');
var fs = require('fs').promises;

let indexFile;

var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(200);
    response.end(indexFile);
});

let userData = JSON.parse(localStorage.getItem('userData'));


let username = localStorage.getItem(localStorage.getItem('currentAccount'));
let password = userData[username];

indexFile = `<!DOCTYPE html>
<html>
<body>

<h1>${username}</h1>
<p>${password}</p>

</body>
</html>
`;
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