import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersListComponent } from './players-list/players-list.component';
import { LoginComponent } from './login/login.component';
import { FullComponent } from './full/full.component';
import { GamePlayComponent } from './game-play/game-play.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { GameStatusComponent } from './game-status/game-status.component';

const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full' },
  { path:'players', component:PlayersListComponent },
  { path:'login', component:LoginComponent },
  { path:'full', component:FullComponent },
  { path:'game-play', component:GamePlayComponent },
  { path:'scorecard', component:ScorecardComponent },
  { path:'started', component:GameStatusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
