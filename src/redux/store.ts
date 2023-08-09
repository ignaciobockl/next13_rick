import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import counterReducer from './features/counterSlice';

import { characterApi } from './services/characterApi';
import { locationApi } from './services/locationApi';

const rootReducer = combineReducers({
  counter: counterReducer,
  [characterApi.reducerPath]: characterApi.reducer,
  [locationApi.reducerPath]: locationApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      characterApi.middleware,
      locationApi.middleware
    ),
    // devTools: import.meta.env.MODE === 'development',
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
