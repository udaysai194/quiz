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
    this.playersListService.socket.on('updateScores', (data)=>{
      console.log('in score card before assign: '+JSON.stringify(data));
      this.players = data;
      console.log('in score card after assign: '+JSON.stringify(this.players));
      
      setTimeout(() => {
        this.playersListService.socket.close();
      }, 20);
    });
  }

}
