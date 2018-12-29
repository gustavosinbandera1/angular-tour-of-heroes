import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {
private heroesUrl = 'http://localhost:3000/api/heroes';
  constructor(
    private _messageService: MessageService,
    private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    this._messageService.addMessage('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHeroById(id: string): Observable<Hero> {
    this._messageService.addMessage(`HeroService:  fetch hero id=${id}`);
    return this.http.get<Hero>(this.heroesUrl + `/${id}`);
  }
  private log(message: string) {
    this._messageService.addMessage(`HeroService: ${message}`);
  }

  /*add new Heroe to the server POST */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions);
  }
  updateHero(hero: Hero): Observable<any> {
    const url = `${this.heroesUrl}/${hero[0]._id}`;
    console.log('vamos a actualizar');
    return this.http.put(url, hero[0], httpOptions);
  }

  deleteHero(id: string): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<Hero>(url, httpOptions);
  }


}
