import { HEROES } from './../mock-heroes';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  hero: Hero = {
    id: 10,
    name: 'Washington'
  };
  heroes = HEROES;
  selectedHero: Hero;
  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
