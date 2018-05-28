import { Component, OnInit } from '@angular/core';
import { PlayersListService } from '../players-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-status',
  templateUrl: './game-status.component.html',
  styleUrls: ['./game-status.component.css']
})
export class GameStatusComponent implements OnInit {
  time: number;
  button: boolean;
  constructor(private playersListService: PlayersListService,
              private routes: Router) { }

  ngOnInit() {
    this.playersListService.socket.on('timer',(time)=>{
      this.time = time;
      if(time == 0){
        this.button = true;
      }
    });
  }

  onNewGame(){
    this.routes.navigate(['login']);
  }

}
