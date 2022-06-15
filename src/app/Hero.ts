export interface Hero {
  alias: string;
  banVoPath: string;
  chooseVoPath: string;
  id: number;
  name: string;
  passive: {
    name: string;
    abilityIconPath: string;
    abilityVideoPath: string;
    abilityVideoImagePath: string;
    description: string;
  };
  playstyleInfo: {
    damage: number;
    durability: number;
    crowdControl: number;
    mobility: number;
    utility: number;
  };
  recommendedItemDefaults: [];
  roles: string[];
  shortBio: string;
  skins: Skin[];
  spells: Spell[];
  squarePortraitPath: string;
  stingerSfxPath: string;
  tacticalInfo: {
    style: number;
    difficulty: number;
    damageType: string;
  };
  title: string;
}
// TODO complete skin interface
export interface Skin {}
export interface Spell {
  name: string;
  range: number[];
  spellKey: string;
  abilityIconPath: string;
  description: string;
}
