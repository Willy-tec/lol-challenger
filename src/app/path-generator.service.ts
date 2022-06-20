import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PathGeneratorService {
  riot_base = 'https://euw1.api.riotgames.com';
  riot_freechamp = '/lol/platform/v3/champion-rotations';
  riot_api = '?api_key=RGAPI-8bcf56f9-d48b-410d-9f0f-801f35755247';
  rdragon_base_url =
    'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/';
  champ_path = 'fr_fr/v1/champions/';
  icon_path = 'default/v1/champion-icons/';
  spell_path = 'default/assets/characters/';
  constructor() {}

  getFreeChampionUrl = () =>
    this.riot_base + this.riot_freechamp + this.riot_api;
  getDetailChampionUrl = (id: string) =>
    this.rdragon_base_url + this.champ_path + id + '.json';
  getAvatarUrl = (id: string) =>
    this.rdragon_base_url + this.icon_path + id + '.png';
  getSpellUrl(str: string) {
    let path = str
      .split('/')
      .slice(5)
      .map((name) => name.toLowerCase())
      .join('/');
    return this.rdragon_base_url + this.spell_path + path;
  }
}

// TODO Replace strange function by URL Object and method
