import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; 

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '6e009c2a9amsh074604bd5f4bf85p1222d5jsne72d4a262676'
}

const baseUrl = "https://coinranking1.p.rapidapi.com"

const createRequest = (url) => ({ url, headers: cryptoApiHeaders }); 

export const cryptoApi = createApi({
  reducerPath: 'createApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/coins')
    })
  })
});

export const {
  useGetCryptosQuery, 
} = cryptoApi; 




/* var options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/stats',
  headers: {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'SIGN-UP-FOR-KEY'
  }
};

*/
