import { Component, OnInit } from '@angular/core';
import { PlayersListService } from '../players-list.service';
import { Question } from './question.model';
import { QuestionsListService } from '../questions-list.service';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements OnInit {
  timer: number = 10;
  question: Question;
  questionNumber: number = 0;
  constructor(private playersListService: PlayersListService,
              private questionsListService: QuestionsListService) {

  }

  ngOnInit() {
    this.question = this.questionsListService.questions[this.questionNumber];
    this.questionNumber = this.questionNumber+1;
    setInterval( () =>{
      if (this.timer == 0) {
        this.timer = 10;
        if(this.questionNumber == 9){
          this.questionNumber = 0;
        } else {
          this.question = this.questionsListService.questions[this.questionNumber];
          this.questionNumber = this.questionNumber+1;
        }
      } else {
        this.timer = this.timer-1;
      }
    },1000);
  }

}
