var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = process.env.PORT || 4000;
var players = [];
var started = false;
var timer;
var time = 31;

//using angular dist
app.use(express.static(path.join(__dirname, "dist")));

//socket connection
io.on('connection', (socket) => {
    console.log('connected '+socket.id);
    socket.on('addPlayer', (data)=>{
        players.push(data);
        console.log('after pushing data '+ JSON.stringify(players));
        io.sockets.emit('playersList', players);
    });
    socket.on('onStart', (data)=>{
        players = data;
        io.sockets.emit('playersList', players);
        let countStatus = 0;
        players.forEach((obj,index) => {
            if(obj.status === 'started'){
                countStatus = countStatus+1;
                if (countStatus === players.length) {
                    io.sockets.emit('startGame');
                }
            }
        });
    })


})

//for routing in app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//listen to port
server.listen(port, () => {
  console.log("Listening on port " + port);
});