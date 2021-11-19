import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: 'active',
  sign: 'inactive',
  profile: 'inactive',
  create: 'inactive',
};

export const navSlice = createSlice({
  name: 'active',
  initialState,
  reducers: {
    activePosts: (state) => {
      state.posts = 'active';
      state.sign = 'inactive';
      state.profile = 'inactive';
      state.create = 'inactive';
    },
    activeSign: (state) => {
      state.posts = 'inactive';
      state.sign = 'active';
      state.profile = 'inactive';
      state.create = 'inactive';
    },
    activeProfile: (state) => {
      state.posts = 'inactive';
      state.sign = 'inactive';
      state.profile = 'active';
      state.create = 'inactive';
    },
    activeCreate: (state) => {
      state.posts = 'inactive';
      state.sign = 'inactive';
      state.profile = 'inactive';
      state.create = 'active';
    },
  },
});

export const { activePosts, activeSign, activeCreate, activeProfile } =
  navSlice.actions;

export default navSlice.reducer;
