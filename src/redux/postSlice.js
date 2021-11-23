import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allPosts: '',
  selectedPost: '',
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    posts: (state, action) => {
      state.allPosts = action.payload;
    },
    selectPost: (state, action) => {
      state.selectedPost = action.payload;
    },
  },
});

export const { posts, selectPost } = postSlice.actions;

export default postSlice.reducer;
