import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './pageSlice';
import activeReducer from './activeSlice';
import authReducer from './authSlice';
import userSlice from './userSlice';
import postSlice from './postSlice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    page: pageReducer,
    active: activeReducer,
    auth: authReducer,
    user: userSlice,
    posts: postSlice,
  },
});
