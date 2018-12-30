import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  messages = [];
  connection;
  message;

  constructor(
    private _heroService: HeroService,
    private websocket: WebsocketService) { }

  ngOnInit() {
    this.getHeroes();
    this.connection = this.websocket.getMessages().subscribe(message => {
      this.messages.push(message);
    });
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  getHeroes(): void {
    this._heroService.getHeroes().subscribe(data => {
      this.heroes = data.slice(1, 5);
    });
  }
  sendMessage() {
    this.websocket.sendMessage(this.message);
    this.message = '';
  }
}
