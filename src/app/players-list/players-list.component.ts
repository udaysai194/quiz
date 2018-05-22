import { Component, OnInit, Input } from '@angular/core';
import { PlayersListService } from '../players-list.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  players: Array<Player>;
  constructor( private playersListService: PlayersListService ) { }

  ngOnInit() {
    this.playersListService.socket.on('players',(data) => {
      this.playersListService.players = data;
      this.players = this.playersListService.players;
    })
  }

}
