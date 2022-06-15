import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';
// import { champion_icon_url, passive_icon_url } from '../path';
import { PathGeneratorService } from '../path-generator.service';

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
  constructor(
    private heroService: HeroService,
    private pathGen: PathGeneratorService
  ) {
    this.id = '';
  }
  ngOnInit(): void {
    this.getHero(this.id);
  }
  getHero(id: string) {
    this.heroService.getChampion(id).subscribe((champ) => {
      this.hero = this.formatPath(champ);
      this.img_path = this.pathGen.getAvatarUrl(id);
    });
  }
  formatPath(champ: Hero): Hero {
    champ.passive.abilityIconPath = this.pathGen.getSpellUrl(
      champ.passive.abilityIconPath
    );
    champ.spells.forEach((spell) => {
      spell.abilityIconPath = this.pathGen.getSpellUrl(spell.abilityIconPath);
    });
    return champ;
  }
}
