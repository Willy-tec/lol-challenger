import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  championListId?: string[];
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getChampionInfo();
  }
  getChampionInfo() {
    this.heroService
      .getFreeChampionList()
      .subscribe(
        (info) =>
          (this.championListId = info.freeChampionIds.map((el) => String(el)))
      );
  }
}
