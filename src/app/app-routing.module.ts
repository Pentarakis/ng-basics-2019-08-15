import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './basic-layout/dashboard/dashboard.component';
import { CharacterListComponent } from './character/character-list/character-list.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'characters', component: CharacterListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
