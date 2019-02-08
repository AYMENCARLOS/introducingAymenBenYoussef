import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  providers : [HeroService],
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  editHero : Hero;


  constructor(private heroesService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroesService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  edit(hero:Hero):void{
    this.editHero = hero;
  }

  add(name:string):void {
    this.editHero = undefined;
    name = name.trim();
    if(!name) { return;}

    // The server will generate the id for this new hero
    const newHero: Hero = { name } as Hero;
    this.heroesService.addHero(newHero)
      .subscribe(hero => this.heroes.push(hero));
  }

  delete(hero:Hero):void{
    this.heroes = this.heroes.filter(h => h!==hero);
    this.heroesService.deleteHero(hero.id).subscribe();

  }
}
