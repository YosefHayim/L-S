const express = require("express");
const socketio = require("socket.io");

const app = express();
app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(9000);

const io = socketio(expressServer);

io.on("connection", (socket) => {
  console.log(`${socket.id}: has connected.`);

  // socket.on("newMessageToServer", (data) => {
  // });
  io.emit("welcome", "Welcome to the server.");
});
