import { createSlice } from '@reduxjs/toolkit';
import Posts from '../components/postCard';

const initialState = {
  page: <Posts />,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    change: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { change } = pageSlice.actions;

export default pageSlice.reducer;
