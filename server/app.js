const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = new express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log("New user connected!");

  socket.emit("newEmail", {
    from: 'mike@example.com',
    text: 'Hey, what\'s going on?',
    createdAt: 123
  });

  socket.emit("newMessage", {
    from: "Tom",
    text: "Hey, it's yo boi, uhhhh, skinny penis.",
    createdAt: 123
  });

  socket.on('createMessage', (globalMessage) => {
    console.log('New message: ', globalMessage);
  });

  socket.on("createEmail", (newEmail) => {
    console.log('createEmail', newEmail);
  });

  socket.on("disconnect", () => {
    console.log("The user has disconnected!");
  })
});

server.listen(port, () => {
  console.log("The server has started!");
})
