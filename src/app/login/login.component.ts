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
  username = '';
  password = '';
  constructor(private routes: Router,
              private playersListService: PlayersListService) { }

  ngOnInit() {

  }

  onSubmit(){
    this.playersListService.socket = io.connect();
    this.playersListService.socket.on('full', (data) => {
      if(data){
        this.routes.navigate(['full']); 
      }else{
        this.playersListService.socket.emit('userData', {
          id: this.playersListService.socket.id,
          username: this.username,
          password: this.password
        });
        this.routes.navigate(['players']);
      }
    });
  }
}
