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
    },
    logout: (state) => {
      state.user = false;
    },
    loginAdmin: (state) => {
      state.admin = true;
    },
    logoutAdmin: (state) => {
      state.admin = false;
    },
    setUid: (state, action) => {
      state.uid = action.payload;
    },
  },
});

export const { login, logout, loginAdmin, logoutAdmin, setUid } =
  authSlice.actions;
export default authSlice.reducer;
