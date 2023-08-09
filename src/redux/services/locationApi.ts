import { HYDRATE } from 'next-redux-wrapper'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const locationApi = createApi({
  reducerPath: 'locationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/',
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: (builder) => ({
    getLocations: builder.query({
      query: () => 'location',
    }),
    getLocationById: builder.query({
      query: ({ id }) => `location/${id}`,
    }),
  }),
});

export const { useGetLocationsQuery, useGetLocationByIdQuery } = locationApi;
