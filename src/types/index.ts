import { createSlice } from "@reduxjs/toolkit";

interface CharacterType {
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
    results: Array<CharacterType>;
}

interface LocationType {
  name: string;
  url: string;
}

interface OriginType {
  name: string;
  url: string;
}
