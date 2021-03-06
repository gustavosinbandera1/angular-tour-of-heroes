/*import { RouterModule } from '@angular/router';*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { CrearHeroeComponent } from './crear-heroe/crear-heroe.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { WebsocketService } from './websocket.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    CrearHeroeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule /*add routes to the app*/,
    HttpClientModule,
    MaterialModule
  ],
  providers: [HeroService, WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
