import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChampionInfo } from './ChampionInfo';
import { ChampionList } from './ChampionList';
import { dragon_champion_url, Free_Champion_Url } from './path';
import { Champion } from './Champion';
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Access-Control-Request-Headers': '*',
  //     'X-Riot-Token': 'RGAPI-5d8df3b8-1bf7-4dab-8caa-c0bfeddf4400',
  //   }),
  // };

  constructor(private http: HttpClient) {}
  getFreeChampionList() {
    // const url = this.api_url + this.api_path;
    return this.http.get<ChampionInfo>(Free_Champion_Url);
  }
  getChampion(id: string) {
    // return this.http.get<ChampionList>('/assets/champion.json').subscribe(data => data.data);
    return this.http.get<ChampionList>(dragon_champion_url(id));
  }
}
