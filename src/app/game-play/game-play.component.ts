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
  time: number = 12;
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
      console.log(this.time+' before');
      console.log(this.time+' after');
      this.time--;
      if (this.time === 0) {
          console.log('main score : '+this.score);
          console.log('main time : '+this.time);
          console.log('main question : '+this.questionNumber);
        if (this.answer === this.question.ans) {
          console.log('score'+this.score);
          this.score++;
        }
        if (this.questionNumber > 9) {
          clearInterval(this.timer);
          this.playersListService.finished = true;
          console.log('finished');
          this.playersListService.addToScoreCard(this.score);
          this.routes.navigate(['scorecard']);
        }else{
          console.log(' score : '+this.score);
          console.log(' time : '+this.time);
          console.log(' question : '+this.questionNumber);
          this.time = 12;
          this.answer = '';
          this.questionNumber++;
          this.question = this.questionsListService.questions[this.questionNumber];
          this.togglebtn1 = false;
          this.togglebtn2 = false;
          this.togglebtn3 = false;
          this.togglebtn4 = false;
          console.log('af score : '+this.score);
          console.log('af time : '+this.time);
          console.log('af question : '+this.questionNumber);
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
