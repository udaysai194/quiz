import { Injectable } from '@angular/core';
import { Question } from './game-play/question.model';

@Injectable()
export class QuestionsListService {
  questions: Array<Question>;

  constructor() {
    this.questions = [
        {
          question: ' Which is the best assistant in todays world? ',
          opt1: 'Cortana',
          opt2: 'Ok Google',
          opt3: 'Siri',
          opt4: 'Alexa'
        },
        {
          question: ' Who is the present PRESIDENT of INDIA ? ',
          opt1: 'APJ ABDUL KALAM',
          opt2: 'ARAVIND KEJRIWAL',
          opt3: 'PAWAN KALYAN',
          opt4: 'RAMNATH KOVIND'
        },
        {
          question: ' Which is the best water world in HYD? ',
          opt1: 'Ocean park',
          opt2: 'Mount oppera',
          opt3: 'Wonderla',
          opt4: 'Jalavihar'
        },
        {
          question: ' Which acts like a fastest Switching device ? ',
          opt1: 'MOSFET',
          opt2: 'SCR',
          opt3: 'BT',
          opt4: 'P-N'
        },
        {
          question: 'What is the future of the software world? ',
          opt1: 'A.I',
          opt2: 'J.S',
          opt3: 'i/o',
          opt4: 'SQL'
        },
        {
          question: ' Who is the Captain of Women indian cricket team? ',
          opt1: 'Smrithi Mandhana',
          opt2: 'Mithali raj',
          opt3: 'shikha pandey',
          opt4: 'Veda krishnamurthy'
        },
        {
          question: ' What is the lates version in MIUI? ',
          opt1: 'V9.2.3.0LXIMIEK',
          opt2: '7.11.16',
          opt3: 'V9.55.0.NDKMIFA',
          opt4: 'V9.5.5.15.0.ODGCNFA'
        },
        {
          question: 'Who is the fastest runner in the world? ',
          opt1: 'Asaf powell',
          opt2: 'Tyson Gay',
          opt3: 'Ussain Boult',
          opt4: 'Yohan BLake'
        },
        {
          question: ' Who is the Cheapest sold player in IPL?',
          opt1: 'A S Kathuria',
          opt2: 'Ankit Sharma',
          opt3: 'Mitchell Santner',
          opt4: 'Andrew Tye'
        },
        {
          question: 'The percentage doesnot evaluate the heights of the person this quote said by the.....? ',
          opt1: 'William shakespreare',
          opt2: 'Newton',
          opt3: 'Sesank Govindaraju',
          opt4: 'Charles Dickens'
        },
        {
          question: ' Who is known as 360 degrees player in the cricket world? ',
          opt1: 'MSD',
          opt2: 'Mithali raj',
          opt3: 'ABD',
          opt4: 'Virat Kohli'
        },
        {
          question: ' Which Add got best Advertisment award since 2015 ? ',
          opt1: 'Hotstar',
          opt2: 'Airtel',
          opt3: 'Cricbuzz',
          opt4: 'Imperial Blue'
        },
        {
          question: ' What is the next generation of INTEL core proccesor? ',
          opt1: '6th Gen',
          opt2: '7th Gen',
          opt3: '8th Gen',
          opt4: '9th Gen'
        },
        {
          question: ' Which Country is famous for cotton? ',
          opt1: 'USA',
          opt2: 'INDIA',
          opt3: 'CHINA',
          opt4: 'PAKISTAN'
        },
        
    ]   
  }

}