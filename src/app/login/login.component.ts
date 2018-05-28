import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as io from 'socket.io-client';
import { PlayersListService } from '../players-list.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  constructor(private routes: Router,
              private playersListService: PlayersListService) { }

  ngOnInit() {

  }

  onSubmit(){
   this.playersListService.onLogin(this.username);
   this.routes.navigate(['players']);
  }
}
