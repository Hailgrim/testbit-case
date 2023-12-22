import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LangList } from '../../lib/types';

export const appSliceName = 'app';

const initialState = {
  language: 'ru' as LangList,
};

export const appSlice = createSlice({
  name: appSliceName,
  initialState: initialState,
  reducers: {
    setUserLang: (state, action: PayloadAction<LangList>) => {
      state.language = action.payload;
    },
  },
});

export const { setUserLang } = appSlice.actions;
export default appSlice.reducer;
