import { Hero } from './../hero';
import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  constructor(private hs: HeroService,
              private route: ActivatedRoute,
              private location: Location) {}

  ngOnInit() {
    this.getHero();
  }

  getHero() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.hs.getHeroById(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack() {
    this.location.back();
  }

}
