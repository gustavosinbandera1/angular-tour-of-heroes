import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Location } from '@angular/common';
export interface City {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-crear-heroe',
  templateUrl: './crear-heroe.component.html',
  styleUrls: ['./crear-heroe.component.css']
})
export class CrearHeroeComponent implements OnInit {
  selected: City; /*for selected option */
  cities: City[] = [  /*options for select */
    {value: 'Armenia', viewValue: 'Armenia.'},
    {value: 'Medellin', viewValue: 'Medellin.'},
    {value: 'Cali', viewValue: 'Cali.'},
    {value: 'Bogota', viewValue: 'Bogota.'}
  ];

  hero: Hero = { /*object Hero to interpolate with form */
    'firstName' : '',
     'lastName' : '',
     'city' : '',
     '_id': ''
  };

  constructor(private heroService: HeroService, private location: Location) { }

  ngOnInit() {
  }

  crearHeroe(hero: Hero): void {
    this.heroService.addHero(hero).subscribe((data) => {
      console.log('esto llego cuando se creo el heroe');
      console.log(data);
      this.location.back();
    });
  }

}
