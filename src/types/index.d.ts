import { InfoType } from './globalTypes';

export interface CharacterType {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: OriginType;
  location: LocationCharacterType;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}

export interface CharactersType {
  info: InfoType;
  results: Array<CharacterType>;
}

export interface LocationType {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Array<string>;
  url: string;
  created: string;
}
interface LocationCharacterType {
  name: string;
  url: string;
}

export interface LocationsType {
  info: InfoType;
  results: Array<LocationType>;
}

interface OriginType {
  name: string;
  url: string;
}
