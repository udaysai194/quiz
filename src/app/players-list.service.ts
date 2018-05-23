import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Player } from './player.model';

@Injectable()
export class PlayersListService {

  socket: SocketIOClient.Socket;
  players: Array<Player>;
  
  // boolean1: boolean = false;

  constructor() {
    // this.socket = io.connect('http://localhost:3000');
  //  this.socket = io.connect();

  }

}
