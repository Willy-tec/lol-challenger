import { Component, Input, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  @Input() id: string;
  champion: any;
  constructor(private heroService: HeroService) {
    this.id = '';
  }
  ngOnInit(): void {
    this.getHero(this.id);
  }
  getHero(id: string) {
    this.heroService
      .getChampion(id)
      .subscribe((champ) => (this.champion = champ));
  }
}
