/*ng g module app-routing --flat --module=app */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CrearHeroeComponent } from './crear-heroe/crear-heroe.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'heroes', component: HeroesComponent },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'heroes/:id', component: HeroDetailComponent},
  {path: 'crear-hero', component: CrearHeroeComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
