var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var cors = require('cors');

var port = process.env.PORT || 8080;
var players = [];
var started = false;
var timer;
var time = 31;

app.use(cors());

app.use(express.static(path.join(__dirname, "dist")));

//socket connection
io.on('connection', (socket) => {
    //sending status of the game
    io.sockets.emit('gameStatus', started);
    //
    socket.on('finished', (data)=>{
        started = data;
        io.sockets.emit('gameStatus', started);
        clearInterval(timer);
    });
    if(players.length < 4){
        socket.emit('full',false);
        socket.on('userData', (data)=>{
            players.push(data);
            io.sockets.emit('players', players);
        });
    }else{
        //if sockets are full
        socket.emit('full',true);
        socket.disconnect();
    }
    //updating status to start
    socket.on('started', (data) => {
        players = data;
        io.sockets.emit('players', players);
        let count = 0;
        players.forEach(element => {
            if (element.status == 'started') {
                count = count+1;
                if(count == players.length){
                    io.sockets.emit('letsStart', started);
                    started = true;

                    //starting timer
                    timer = setInterval(()=>{
                        if (time !== -1) {
                            io.sockets.emit('timer', time);
                                time = time-1;
                        }
                            }, 1000);
                }
            }
        });
    })
    //scorecard
    socket.on('score', (score)=>{
        players.forEach(obj => {
            if(obj.id === socket.id){
                obj.score = score;
                io.sockets.emit('scorecard', players);
            }
        });
    })
    //send data
    socket.on('getData',() => {
        socket.emit('sendData', players);
    });
    //if socket closed the connection
    socket.on('disconnect', () => {
        const arr = players.filter(obj => obj.id !== socket.id);
        players = arr;
        io.sockets.emit('players', players);
        socket.disconnect();
    })
}); 

//
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//listen to port
server.listen(port, () => {
  console.log("Listening on port " + port);
});