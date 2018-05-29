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
  questionNumber: number = 0;
  question: Question;
  answer: string = '';
  time: number = 15;
  timer: any;
  score: number = 0;
  togglebtn1: boolean;
  togglebtn2: boolean;
  togglebtn3: boolean;
  togglebtn4: boolean;
  constructor(private playersListService: PlayersListService,
              private questionsListService: QuestionsListService,
              private routes: Router) {

  }

  ngOnInit() {
    this.question = this.questionsListService.questions[this.questionNumber];
    this.timer = setInterval(() => {
      --this.time;
      if (this.time === 0) {
        if (this.questionNumber === 9) {
          clearInterval(this.timer);
          this.playersListService.socket.emit('updateScore', this.score);
          this.routes.navigate(['scorecard']);
        }else{
          if (this.answer == this.question.ans) {
            this.score = this.score+1;
          }else{
            this.score = this.score;
          }
          this.time = 10;
          ++this.questionNumber;
          this.question = this.questionsListService.questions[this.questionNumber];
          this.togglebtn1 = false;
          this.togglebtn2 = false;
          this.togglebtn3 = false;
          this.togglebtn4 = false;
          this.answer = '';
        }
      }
    }, 1000);
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
