const path = {
  api_url: 'https://euw1.api.riotgames.com',
  api_path: '/lol/platform/v3/champion-rotations',
  riot_api: '?api_key=RGAPI-5d8df3b8-1bf7-4dab-8caa-c0bfeddf4400',
  dragon_url: 'https://ddragon.leagueoflegends.com/api/',
  raw_dragon_url:
    'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/fr_fr/v1/champions/',
};

export const Free_Champion_Url = path.api_url + path.api_path + path.riot_api;

export const dragon_champion_url = (id: string) =>
  path.raw_dragon_url + id + '.json';