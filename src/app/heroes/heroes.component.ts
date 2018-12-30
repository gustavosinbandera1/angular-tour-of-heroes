import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  router = Router;
  heroes = new MatTableDataSource<Hero>();
  displayedColumns: string[] = ['firstName', 'lastName', 'city', 'actions'];

  constructor(private _heroService: HeroService, private location: Location) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
   this.getHeroes();
  }

  getHeroes(): void {
    this._heroService.getHeroes().subscribe(heroes => {
      this.heroes = new MatTableDataSource<Hero>(heroes);
      this.heroes.paginator = this.paginator;
    });
  }

  deleteHeroe(id: string): void {
    this._heroService.deleteHero(id).subscribe(data => {
      console.log('despues de eliminar esto llego:');
      console.log(data);
      this.location.go('/dashboard');
    });
  }

  crearHeroe(heroe: Hero): void {
    this._heroService.addHero(heroe).subscribe(data => {
      console.log('se creo el heroe');
      console.log(data);
    });
  }



}
