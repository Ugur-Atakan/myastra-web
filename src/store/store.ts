import { configureStore } from '@reduxjs/toolkit'
import commonSlice from './slices/commonSlice';
import  userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user:userSlice,
    common:commonSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch