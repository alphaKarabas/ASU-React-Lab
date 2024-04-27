// Файл CommentsApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const CommentsApi = createApi({
  reducerPath: 'CommentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("JWT_Token");
      console.log(token);
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      headers.set('Content-Type', 'application/json');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => {
        return {
          url: `/api/comments`,
        };
      },
    }),
  }),
});

export const { useGetCommentsQuery } = CommentsApi;
