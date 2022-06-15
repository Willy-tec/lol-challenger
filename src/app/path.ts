const path = {
  api_url: 'https://euw1.api.riotgames.com',
  api_path: '/lol/platform/v3/champion-rotations',
  riot_api: '?api_key=RGAPI-5d8df3b8-1bf7-4dab-8caa-c0bfeddf4400',
  dragon_url: 'https://ddragon.leagueoflegends.com/api/',
  raw_dragon_url:
    'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/fr_fr/v1/champions/',
  base_icon_url:
    'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/',
  hud_url:
    'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/',
};

export const Free_Champion_Url = path.api_url + path.api_path + path.riot_api;

export const dragon_champion_url = (id: string) =>
  path.raw_dragon_url + id + '.json';

export const champion_icon_url = (id: string) =>
  path.base_icon_url + id + '.png';
export const passive_icon_url = (str: string): string => path.hud_url + str;
