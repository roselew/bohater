import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService: HeroService) { }
  
    heroes: Hero[];
    getHeroes(): void {
      this.heroService.getHeroesSlowly()
        .then(heroes => this.heroes = heroes.slice(1,5));
    }
   
    ngOnInit(): void {
      this.getHeroes();
    }
  
}
