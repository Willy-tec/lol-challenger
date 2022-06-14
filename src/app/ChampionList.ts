import { Champion } from './Champion';

export interface ChampionList {
  type: string;
  format: string;
  version: string;
  data: {
    [name: string]: Champion;
  };
}
