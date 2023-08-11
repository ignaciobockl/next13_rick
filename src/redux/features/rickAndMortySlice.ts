import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CharactersType, LocationsType } from '../../types/index';

const infoInitialState = {
  count: 0,
  pages: 0,
  next: '',
  prev: null,
};

const dataInitialState = {
  info: infoInitialState,
  results: [],
};

interface InitialStateType {
  character: CharactersType;
  location: LocationsType;
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
      state.location = action.payload;
    },
  },
});

export const { setAllCharacters, setAllLocations } = rickAndMortySlice.actions;

export default rickAndMortySlice.reducer;
