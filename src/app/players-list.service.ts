import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Player } from './player.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PlayersListService {

  socket: SocketIOClient.Socket;
  players: Array<Player>;
  started: boolean = false;

  constructor(private routes: Router) {
    // this.socket = io.connect('http://localhost:3000');
  this.socket = io.connect();
  }

  onLogin(username){
    console.log('connected: '+this.socket.id);
    this.socket.emit('addPlayer', {
      id: this.socket.id,
      username: username,
      status: 'not started',
      score: 0
    });

    console.log('emmitted : ' + JSON.stringify({
      id: this.socket.id,
      username: username,
      status: 'not started',
      score: 0
    }));
  }

  setPlayers(data){
    this.players = data;
  }


}
