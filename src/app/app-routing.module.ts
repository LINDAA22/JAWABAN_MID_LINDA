import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { TurnamentComponent } from './turnament/turnament.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const routes: Routes = [
{path:'Home' ,component:HomeComponent},
{path:'profil' ,component:ProfilComponent},
{path:'turnament' ,component:TurnamentComponent},
{path:'leaderboard' ,component:LeaderboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
