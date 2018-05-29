import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersListComponent } from './players-list/players-list.component';
import { LoginComponent } from './login/login.component';
import { GamePlayComponent } from './game-play/game-play.component';
import { ScorecardComponent } from './scorecard/scorecard.component';

const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full' },
  { path:'players', component:PlayersListComponent },
  { path:'login', component:LoginComponent },
  { path:'game-play', component:GamePlayComponent },
  { path:'scorecard', component:ScorecardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
