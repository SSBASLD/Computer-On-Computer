
const WebSocket = require("ws");

const server = new WebSocket.Server({ port: '3000' });

console.log(server);

server.on('connection', (socket) => {
  socket.send("wassup");

  console.log("hi");
  socket.onmessage = ({ data }) => {
    console.log('Message from server ', data);
  };
});