import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  /*@Input() hero: Hero;*/
  hero: Hero;
  constructor(
    private activeRoute: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  ngOnInit() {
    this.getHero();
  }
  getHero(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.heroService.getHeroById(id).subscribe(hero => {
      this.hero = hero;
      console.log(`el hero detail es  ${this.hero}`);
      console.log(this.hero);
    });
  }
  goBack() {
    this.location.back();
  }
  save(): void {
    this.heroService.updateHero(this.hero)
    .subscribe(() => this.goBack());
  }

}
