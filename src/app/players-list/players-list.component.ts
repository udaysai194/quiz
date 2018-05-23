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
  constructor( private playersListService: PlayersListService,
  private routes: Router) { }

  ngOnInit() {
      this.playersListService.socket.on('players',(data) => {
      this.playersListService.players = data;
      this.players = this.playersListService.players;
    });

    this.playersListService.socket.on('letsStart', () => {
      this.routes.navigate(['game-play']);
    });
  }

  onStart(){
    this.playersListService.players.forEach(element => {
      if (element.id == this.playersListService.socket.id) {
        element.status = 'started';
        this.playersListService.socket.emit('started', this.playersListService.players);
      }
    });
  }

}
