import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MassageService } from './massage.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private ms: MassageService) { }

  getHeroes(): Observable<Hero[]> {
    this.ms.add('HeroService: fetching heroes...');
    return of(HEROES);
  }

  getHeroById(id: number): Observable<Hero> {
    this.ms.add(`HeroService: fetching hero by ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
