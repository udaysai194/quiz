import { Component, OnInit } from '@angular/core';
import { PlayersListService } from '../players-list.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  msg: string = '';
  constructor(private playersListService: PlayersListService) { }

  ngOnInit() {
    this.playersListService.name.subscribe((data) => {
      this.msg = 'Hi! '+data;
    });
  }

}
