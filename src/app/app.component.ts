import { Component, OnInit } from '@angular/core';
import { PlayersListService } from './players-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private playersListService: PlayersListService) {
   
  }

  ngOnInit() {


   }


}
