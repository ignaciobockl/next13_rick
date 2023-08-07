import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './features/counterSlice'


export const store = configureStore({
    reducer: {
        counterReducer
        // [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer

    },
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(rickAndMortyApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;