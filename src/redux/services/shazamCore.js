import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'cf6da4aa00msh9ccedf595b82216p11a27fjsn4f732100ecdc');
            headers.set('X-RapidAPI-Host', 'shazam.p.rapidapi.com');

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: ()=>'/charts/track'}),
        getSongDetails: builder.query({ query: ({songid})=>`/songs/get-details?key=${songid}`}),
        getSongRelated: builder.query({ query: ({ songid }) => `/songs/get-related-artist?key=${songid}`}),
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
} = shazamCoreApi;