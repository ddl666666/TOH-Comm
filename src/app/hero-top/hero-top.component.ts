import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-top',
  templateUrl: './hero-top.component.html',
  styleUrls: ['./hero-top.component.css']
})
export class HeroTopComponent implements OnInit {
  topHeroes: Hero[] = [];
  constructor(private hs: HeroService) { }

  ngOnInit() {
    this.getTopHeroes();
  }

  getTopHeroes() {
    this.hs.getHeroes()
      .subscribe(heroes => this.topHeroes = heroes.slice(1, 5));
  }

}
