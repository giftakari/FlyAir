

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath:"flightResponse",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004' }),
    endpoints: (builder) => ({
        fetchData: builder.query({
            query: () => 'CatalogProductOfferingsResponse',
        }),
    }),
});

export const { useFetchDataQuery } = api;


