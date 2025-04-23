import { configureStore } from '@reduxjs/toolkit';
import { User, userSlice } from './user.slice';
import { counterSlice } from './counter.slice';

export interface AppState {
  counter: number;
  user: User;
}

export const appStore = configureStore<AppState>({
  reducer: {
    counter: counterSlice.reducer,
    user: userSlice.reducer,
  },
});

export type AppDispatch = typeof appStore.dispatch;
