import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IReqListParams, IResList, ITransaction, IUser } from '../server';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
  }),
  tagTypes: ['Users', 'User'],
  endpoints: (builder) => ({
    getUsers: builder.query<IResList<IUser>, IReqListParams>({
      query: (params) => ({
        url: 'user/list',
        method: 'GET',
        params,
      }),
      providesTags: () => ['Users'],
    }),

    getUserTransactions: builder.query<ITransaction[], string>({
      query: (id) => ({
        url: `user/${id}/transactions`,
        method: 'GET',
      }),
      providesTags: () => ['User'],
    }),
  }),
});
