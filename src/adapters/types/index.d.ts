import { LocationCharacterType, OriginType } from '@/types';

export interface AllCharactersAdapterResponseType {
  data: CharacterAdapterResponseType[] | [];
  pagination: {
    nextPage: string | null;
    prevPage: string | null,
    quantity: number,
    totalPages: number,
  }
}

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
