import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayersListService } from '../players-list.service';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {
  players: Array<Player>;
  constructor(private playersListService: PlayersListService) {}

  ngOnInit() {
    this.players = this.playersListService.players;
    this.playersListService.socket.on('scorecard', (players)=> {
      this.players = players;
    });
    this.playersListService.socket.on('sendData', (data)=> {
      this.players = data;
    });
  }

  refreshScore(){
    this.playersListService.socket.emit('getData');
  }

}
