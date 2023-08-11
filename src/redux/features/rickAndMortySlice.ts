import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CharactersType, LocationsType } from '../../types/index';
import { locationsAdapter } from '@/adapters/locationAdapter';
import { CharactersAdapterResponseType, LocationsAdapterResponseType } from '@/adapters/types';

const infoInitialState = {
  nextPage: null,
      prevPage: null,
      quantity: 0,
      totalPages: 0,

};

const dataInitialState = {
  data: [],
  pagination: infoInitialState ,
};

interface InitialStateType {
  character: CharactersAdapterResponseType;
  location: LocationsAdapterResponseType;
}

const initialState: InitialStateType = {
  character: dataInitialState,
  location: dataInitialState,
};

export const rickAndMortySlice = createSlice({
  name: 'rickAndMortyApi',
  initialState,
  reducers: {
    setAllCharacters: (state, action: PayloadAction<CharactersType>) => {
      state.character = action.payload;
    },
    setAllLocations: (state, action: PayloadAction<LocationsType>) => {
      state.location = locationsAdapter(action.payload);
    },
  },
});

export const { setAllCharacters, setAllLocations } = rickAndMortySlice.actions;

export default rickAndMortySlice.reducer;
