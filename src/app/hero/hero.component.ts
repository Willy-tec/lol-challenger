import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';
import { champion_icon_url, passive_icon_url } from '../path';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  @Input() id: string;
  hero?: Hero;
  img_path: string = '';
  passive_icon_path: string = '';
  constructor(private heroService: HeroService) {
    this.id = '';
  }
  ngOnInit(): void {
    this.getHero(this.id);
  }
  getHero(id: string) {
    this.heroService.getChampion(id).subscribe((champ) => {
      console.log(champ);
      this.hero = champ;
      this.img_path = champion_icon_url(id);
      let test =
        champ.passive.abilityIconPath
          .split('/')
          .slice(5)
          .map((name) => name.toLowerCase())
          .join('/') || '';
      console.log(test);
      this.passive_icon_path = passive_icon_url(test);
    });
  }
  formatPathForIcon() {}
}
