// import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MassageService } from './massage.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { utils } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  url = 'http://10.1.230.73:2403/heroes';
  constructor(private ms: MassageService, private http: HttpClient) { }

  log(m: string) {
    this.ms.add(m);
  }

  getHeroes(): Observable<Hero[]> {
    this.log('HeroService: fetching heroes...');
    return this.http.get<Hero[]>(this.url);
  }

  getHeroById(id: string): Observable<Hero> {
    this.log(`HeroService: fetching hero by ${id}`);
    return this.http.get<Hero>(`${this.url}/${id}`);
  }

  updateHero(hero: Hero): Observable<Hero> {
    this.log(`HeroService: update hero...`);
    return this.http.put<Hero>(`${this.url}/${hero.id}`, hero);
  }

  getTopHeroes(): Observable<Hero[]> {
    this.log(`Heroservice: fetching top heroes...`);
    return this.http.get<Hero[]>(`${this.url}?isTop=true`);
  }

  createHero(hero: Hero): Observable<Hero> {
    this.log(`HeroService: new a hero....`);
    return this.http.post<Hero>(this.url, hero);
  }

  deleteHero(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

}
