import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayersListService } from '../players-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {
  players: Array<{
      id: string,
      username: string,
      score: number
    }>;
  count: number = 0;
  constructor(private playersListService: PlayersListService,
              private routes: Router) {}

  ngOnInit() {
    this.playersListService.socket.on('scoreCard', (data)=>{
      this.players = data;
    });
  }

  onExit(){
    this.playersListService.finished = false;
    this.playersListService.socket.close();
    this.routes.navigate(['login']);
  }

}
