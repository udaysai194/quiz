import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayersListService } from './players-list.service';
import { LoginComponent } from './login/login.component';
import { FullComponent } from './full/full.component';
import { GamePlayComponent } from './game-play/game-play.component';
import { QuestionsListService } from './questions-list.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlayersListComponent,
    LoginComponent,
    FullComponent,
    GamePlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [PlayersListService,QuestionsListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
