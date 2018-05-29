import { Component, OnInit, Input } from '@angular/core';
import { PlayersListService } from '../players-list.service';
import { Player } from '../player.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  players: Array<Player>;
  selfClass: boolean = false;
  visibleStartBtn: boolean = false;
  constructor( private playersListService: PlayersListService,
  private routes: Router) { }

  ngOnInit() {
    this.playersListService.socket.on('playersList', (data)=>{
      this.players = data;
      this.playersListService.setPlayers(data);
      this.players.forEach(obj => {
        if(obj.id === this.playersListService.socket.id){
          this.selfClass = true;
        }
      });
      if (this.players.length > 1) {
        this.visibleStartBtn = true;
      }
    });

    this.playersListService.socket.on('startGame', ()=>{
      setTimeout(() => {
        if (!this.playersListService.finished) {
          this.routes.navigate(['game-play']);
        }
      }, 500);
    });

  }

  onStart(){
      this.players.forEach((obj,index) => {
        let status;
        if(obj.id === this.playersListService.socket.id){
          obj.status = 'started';
          this.playersListService.socket.emit('onStart', this.players);
        }
      });
  }

}
