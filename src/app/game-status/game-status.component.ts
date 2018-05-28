import { Component, OnInit } from '@angular/core';
import { PlayersListService } from '../players-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-status',
  templateUrl: './game-status.component.html',
  styleUrls: ['./game-status.component.css']
})
export class GameStatusComponent implements OnInit {
  
  constructor(private playersListService: PlayersListService,
              private routes: Router) { }

  ngOnInit() {
    
  }

}
