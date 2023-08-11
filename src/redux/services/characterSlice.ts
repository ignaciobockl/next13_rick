import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const characterSlice = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/',
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: () => 'character',
    }),
    getCharacterById: builder.query({
      query: ({ id }) => `character/${id}`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } =
  characterSlice;
