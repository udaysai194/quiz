import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Player } from './player.model';
import { Router } from '@angular/router';

@Injectable()
export class PlayersListService {

  socket: SocketIOClient.Socket;
  players: Array<Player>;
  started: boolean = false;
  
  // boolean1: boolean = false;

  constructor(private routes: Router) {
    // this.socket = io.connect('http://localhost:3000');
  //  this.socket = io.connect();
  }

  onLogin(username){
    this.socket = io.connect();

    this.socket.on('gameStatus',(data)=>{
      this.started = data;
    })
    
    this.socket.on('full', (data) => {
      if(data){
        this.routes.navigate(['full']); 
      }else{
        if(!this.started){
          this.socket.emit('userData', {
            id: this.socket.id,
            username: username,
            status: 'not started',
            score: 0
          });
          this.routes.navigate(['players']);
        }else{
          this.routes.navigate(['started']);
        }
      }
    });
  }

}
