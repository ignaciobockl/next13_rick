import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import counterReducer from './features/counterSlice';
import rickAndMortyReducer from './features/rickAndMortySlice';

import { characterSlice } from './services/characterSlice';
import { locationSlice } from './services/locationSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  rickAndMortyApi: rickAndMortyReducer,
  [characterSlice.reducerPath]: characterSlice.reducer,
  [locationSlice.reducerPath]: locationSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      characterSlice.middleware,
      locationSlice.middleware
    ),
  // devTools: import.meta.env.MODE === 'development',
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
