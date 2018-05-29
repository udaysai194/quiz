var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = process.env.PORT || 4000;
var players = [];
var noOfPlayers = 0;
var checkNumber = 0;


//using angular dist
app.use(express.static(path.join(__dirname, "dist")));

//socket connection
io.on('connection', (socket) => {
    noOfPlayers = noOfPlayers+1;
    console.log('connected '+socket.id);
    //add players
    socket.on('addPlayer', (data)=>{
        players.push(data);
        io.sockets.emit('playersList', players);
    });
    //on starting game
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
    });
    socket.on('updateScore', (data)=>{
        players.forEach(obj => {
            if (socket.id === obj.id) {
                obj.score = data;
                checkNumber = checkNumber+1;
                io.sockets.emit('updateScores', players);       
            }
        });
    });

    socket.on('disconnect', () => {
        noOfPlayers = noOfPlayers-1;
        let arr = players.filter(obj => obj.id !== socket.id);
        players = arr;
        console.log('disconnected' + socket.id);
        socket.disconnect();
        io.sockets.emit('playersList', players);
        
    });



})

//for routing in app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//listen to port
server.listen(port, () => {
  console.log("Listening on port " + port);
});