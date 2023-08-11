import {

  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';

import counterReducer from './features/counterSlice';
import rickAndMortyReducer from './features/rickAndMortySlice';

import { characterSlice } from './services/characterSlice';
import { locationSlice } from './services/locationSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';



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
      locationSlice.middleware,
    ),
  // devTools: import.meta.env.MODE === 'development',
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
