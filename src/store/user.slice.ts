import { createSlice } from '@reduxjs/toolkit';

export interface User {
  username: string;
  token: string;
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    token: '',
  } as User,
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
    },
    logout: (state, action) => {
      state.username = '';
      state.token = '';
    },
  },
});
