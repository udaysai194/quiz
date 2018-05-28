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
  timer: number = 10;
  question: Question;
  questionNumber: number = 0;
  answer: string = '';
  togglebtn1: boolean;
  togglebtn2: boolean;
  togglebtn3: boolean;
  togglebtn4: boolean;
  loop: any;
  score: number = 0;
  constructor(private playersListService: PlayersListService,
              private questionsListService: QuestionsListService,
              private routes: Router) {

  }

  ngOnInit() {
    this.question = this.questionsListService.questions[this.questionNumber];
    this.loop = setInterval( () =>{
      if (this.timer == 0) {
        this.timer = 10;
        this.togglebtn1 = false;
        this.togglebtn2 = false;
        this.togglebtn3 = false;
        this.togglebtn4 = false;
        if (this.question.ans === this.answer) {
          this.score = this.score+1;
          this.playersListService.socket.emit('score', this.score);
        }else{
          this.score = this.score;
          this.playersListService.socket.emit('score', this.score);
        }
        this.questionNumber = this.questionNumber+1;
        this.question = this.questionsListService.questions[this.questionNumber];
        if(this.questionNumber == 3){
          this.routes.navigate(['scorecard']);
          this.playersListService.socket.emit('finished', false);
          this.playersListService.socket.disconnect();
          clearInterval(this.loop);
        }
      } else {
        this.timer = this.timer-1;
      }
    },1000);
  }

  selectedAnswer(ans){
    this.answer = ans;
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
