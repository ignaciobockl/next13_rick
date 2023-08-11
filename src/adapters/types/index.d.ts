import { LocationCharacterType, OriginType } from '@/types';

export interface CharacterAdapterResponseType {
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
  creationDate: string;
}
export interface CharactersAdapterResponseType {
  data: CharacterAdapterResponseType[] | [];
  pagination: {
    nextPage: string | null;
    prevPage: string | null;
    quantity: number;
    totalPages: number;
  };
}

export interface LocationAdapterResponseType {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Array<string>;
  url: string;
  creationDate: string;
}

export interface LocationsAdapterResponseType {
  data: LocationAdapterResponseType[] | [];
  pagination: {
    nextPage: string | null;
    prevPage: string | null;
    quantity: number;
    totalPages: number;
  };
}
