const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const { addUser, getUser, removeUser } = require('./users');

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

io.on('connection', (socket) => {
  console.log(`${socket.id} connected`);

  socket.on('join-room', (data) => {
    const user = addUser({ id: socket.id, ...data });
    socket.join(user.room);
    socket.broadcast.to(user.room).emit('new-message', {
      sender: null,
      body: `${user.username} joined the room!`,
      sentAt: new Date(),
    });
  });

  socket.on('send-message', (text) => {
    const user = getUser(socket.id);
    const data = {
      body: text,
      sender: user.username,
      sentAt: new Date(),
    };
    io.to(user.room).emit('new-message', data);
  });

  socket.on('disconnect', () => {
    console.log(`${socket.id} disconnected`);

    const user = removeUser(socket.id);
    socket.broadcast.to(user.room).emit('new-message', {
      sender: null,
      body: `${user.username} left the room!`,
      sentAt: new Date(),
    });
  });
});
