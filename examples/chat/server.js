const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('we have a connection');
  socket.on('new message', (msg) => {
    console.log(msg);
    io.emit('receive-msg', msg);
  });
});

app.use(express.static(__dirname + '/public'));

http.listen('3000', function() {
    console.log('server on 3000');
});
