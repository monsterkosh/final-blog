import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: 'active',
  sign: 'inactive',
  profile: 'inactive',
};

export const navSlice = createSlice({
  name: 'active',
  initialState,
  reducers: {
    activePosts: (state) => {
      state.posts = 'active';
      state.sign = 'inactive';
      state.profile = 'inactive';
    },
    activeSign: (state) => {
      state.posts = 'inactive';
      state.sign = 'active';
      state.profile = 'inactive';
    },
    activeProfile: (state) => {
      state.posts = 'inactive';
      state.sign = 'inactive';
      state.profile = 'active';
    },
  },
});

export const { activePosts, activeSign } = navSlice.actions;

export default navSlice.reducer;
