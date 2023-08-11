
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const locationSlice = createApi({
  reducerPath: 'locationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/',
  }),
  endpoints: (builder) => ({
    getLocations: builder.query({
      query: () => 'location',
    }),
    getLocationById: builder.query({
      query: ({ id }) => `location/${id}`,
    }),
  }),
});

export const { useGetLocationsQuery, useGetLocationByIdQuery } = locationSlice;
