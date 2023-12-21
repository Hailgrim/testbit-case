import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITransaction, IReqListParams, IResList, IUser } from '../../lib/types';

const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://test.gefara.xyz/api/v1/',
  }),
  tagTypes: ['Users', 'User'],
  endpoints: builder => ({

    getUsers: builder.query<IResList<IUser>, IReqListParams>({
      query: params => ({
        url: 'user/list',
        method: 'GET',
        params,
      }),
      providesTags: () => ['Users'],
    }),

    getUserTransactions: builder.query<ITransaction[], string>({
      query: id => ({
        url: `user/${id}/transactions`,
        method: 'GET',
      }),
      providesTags: () => ['User'],
    }),

  }),
});

export default usersApi;
