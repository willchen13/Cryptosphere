import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const crytpoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '2300e317b5msh31d46ea8f9e2536p14b5c2jsn08718bf5e7f4'
}

const baseUrl = 'https://api.coinranking.com/v2'

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endPoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/exchanges')
        })
    })

})