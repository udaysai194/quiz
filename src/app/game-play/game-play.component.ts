import { Component, OnInit } from '@angular/core';
import { PlayersListService } from '../players-list.service';
import { Question } from './question.model';
import { QuestionsListService } from '../questions-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements OnInit {
  question = {
    question: ' Which acts like a fastest Switching device ? ',
    opt1: 'MOSFET',
    opt2: 'SCR',
    opt3: 'BT',
    opt4: 'P-N',
    ans: 'opt1'
  };
  togglebtn1: boolean;
  togglebtn2: boolean;
  togglebtn3: boolean;
  togglebtn4: boolean;
  constructor(private playersListService: PlayersListService,
              private questionsListService: QuestionsListService,
              private routes: Router) {

  }

  ngOnInit() {
  }

  selectedAnswer(ans){
    if (ans === 'opt1') {
      this.togglebtn1 = true;
      this.togglebtn2 = false;
      this.togglebtn3 = false;
      this.togglebtn4 = false;
    }else if (ans === 'opt2') {
      this.togglebtn2 = true;
      this.togglebtn1 = false;
      this.togglebtn3 = false;
      this.togglebtn4 = false;
    }else if (ans === 'opt3') {
      this.togglebtn3 = true;
      this.togglebtn1 = false;
      this.togglebtn2 = false;
      this.togglebtn4 = false;
    }else{
      this.togglebtn4 = true;
      this.togglebtn1 = false;
      this.togglebtn2 = false;
      this.togglebtn3 = false;
    }

  }

}
