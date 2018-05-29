var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = process.env.PORT || 4000;
var players = [];
var count = 0;
var scoreCard = [];

//using angular dist
app.use(express.static(path.join(__dirname, "dist")));

//socket connection
io.on('connection', (socket) => {
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
        count = players.length;
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

    //update score
    socket.on('updateScoreCard', (data)=>{
        scoreCard.push(data);
        io.sockets.emit('scoreCard', scoreCard);
    });

    socket.on('disconnect', () => {
        let arr = players.filter(obj => obj.id !== socket.id);
        players = arr;
        let arr2 = scoreCard.filter(obj => obj.id !== socket.id);
        scoreCard = arr2;
        io.sockets.emit('scoreCard', scoreCard);
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