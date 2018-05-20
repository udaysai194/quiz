var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = 3000;
var players = [];

app.use(express.static(path.join(__dirname, "dist")));


//socket connection

io.on('connection', (socket) => {
    if(players.length < 5){
        players.push(socket.id);
        socket.emit('players', players);
        io.sockets.emit('players', players);
        socket.on('disconnect', () => {
            const i = players.indexOf(socket.id);
            players.splice(i,1);
            io.socket.emit('players', players);
        })
    }else{
        socket.disconnect();
        
    }

}); 



//listen to port
server.listen(port, () => {
  console.log("Listening on port " + port);
});