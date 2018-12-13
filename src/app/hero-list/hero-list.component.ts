import { HeroService } from './../hero.service';
// import { HEROES } from './../mock-heroes';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
import { MassageService } from '../massage.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService, private ms: MassageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.ms.add(`HeroList: ${hero.name} is clicked!` );
    this.selectedHero = hero;
  }

  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(xxx => {
        this.ms.add('HeroList: Heroes is fetched!');
        this.heroes = xxx;
      });
  }

  newHero(no: string, name: string) {
    no = no.trim();
    name = name.trim();
    if (!no || !name) { return; }
    this.heroService.createHero({ no, name } as Hero)
    .subscribe(hero => this.heroes.push(hero));
  }

  delete(id: string) {
    this.heroService.deleteHero(id)
      .subscribe(_ => this.heroes = this.heroes.filter(h => h.id !== id));
  }
}
