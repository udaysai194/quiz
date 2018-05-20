import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  socket: SocketIOClient.Socket;
  players: Array<string>;
  boolean1: boolean = false;

  constructor() {
   // this.socket = io.connect('http://localhost:3000');
   this.socket = io.connect();
  }

  ngOnInit() {

      this.socket.on('players',(data)=> {
        this.players = data;
      });

      this.socket.on('disconnect',(data) => {
        this.boolean1 = true;
      })
      
   }


}
