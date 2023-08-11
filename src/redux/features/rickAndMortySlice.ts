import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import {
  CharactersAdapterResponseType,
  LocationsAdapterResponseType,
} from '@/adapters/types';

const infoInitialState = {
  nextPage: null,
  prevPage: null,
  quantity: 0,
  totalPages: 0,
};

const dataInitialState = {
  data: [],
  pagination: infoInitialState,
};

interface InitialStateType {
  character: CharactersAdapterResponseType | null;
  location: LocationsAdapterResponseType | null;
}

const initialState: InitialStateType = {
  character: dataInitialState,
  location: dataInitialState,
};

export const rickAndMortySlice = createSlice({
  name: 'rickAndMortyApi',
  initialState,
  reducers: {
    setAllCharacters: (
      state,
      action: PayloadAction<CharactersAdapterResponseType | null>
    ) => {
      state.character = action.payload;
    },
    setAllLocations: (
      state,
      action: PayloadAction<LocationsAdapterResponseType | null>
    ) => {
      state.location = action.payload;
    },
  },
});

export const { setAllCharacters, setAllLocations } = rickAndMortySlice.actions;

export default rickAndMortySlice.reducer;
