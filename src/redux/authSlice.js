import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: false,
  admin: false,
  uid: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.user = true;
      state.admin = false;
    },
    logout: (state) => {
      state.user = false;
      state.admin = false;
    },
    loginAdmin: (state) => {
      state.user = false;
      state.admin = true;
    },
    setUid: (state, action) => {
      state.uid = action.payload;
    },
  },
});

export const { login, logout, loginAdmin, setUid } = authSlice.actions;
export default authSlice.reducer;
