import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  email: '',
  uid: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setUserEmail: (state, action) => {
      state.email = action.payload;
    },
    setUserUid: (state, action) => {
      state.uid = action.payload;
    },
  },
});

export const { setUsername, setUserEmail, setUserUid } = userSlice.actions;
export default userSlice.reducer;
