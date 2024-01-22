import { configureStore } from '@reduxjs/toolkit';

import appSlice, { appSliceName } from './appSlice';
import { usersApi } from '../api';

export const store = configureStore({
  reducer: {
    [appSliceName]: appSlice,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(usersApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
