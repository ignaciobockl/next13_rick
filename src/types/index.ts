export interface CharacterType {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: OriginType;
  location: LocationType;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}

export interface CharactersType {
  info: InfoType;
  results: Array<CharacterType>;
}

interface InfoType {
  count: number;
  next: string;
  pages: number;
  prev: null;
}

interface LocationType {
  name: string;
  url: string;
}

interface OriginType {
  name: string;
  url: string;
}
