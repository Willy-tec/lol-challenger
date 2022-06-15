import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChampionInfo } from './ChampionInfo';

import { Hero } from './Hero';
import { PathGeneratorService } from './path-generator.service';
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(
    private http: HttpClient,
    private pathGen: PathGeneratorService
  ) {}
  getFreeChampionList() {
    return this.http.get<ChampionInfo>(this.pathGen.getFreeChampionUrl());
  }
  getChampion(id: string) {
    return this.http.get<Hero>(this.pathGen.getDetailChampionUrl(id));
  }
}

// TODO Gestion des erreurs
