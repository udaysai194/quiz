var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = 4000;
var players = [];

app.use(express.static(path.join(__dirname, "dist")));

//socket connection
io.on('connection', (socket) => {
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
                    io.sockets.emit('letsStart');
                }else{

                }
            } else {
                
            }
        });

    })

    

    //if socket closed the connection
    socket.on('disconnect', () => {
        const arr = players.filter(obj => obj.id !== socket.id);
        players = arr;
        io.sockets.emit('players', players);
        socket.disconnect();
    })

}); 



//listen to port
server.listen(port, () => {
  console.log("Listening on port " + port);
});