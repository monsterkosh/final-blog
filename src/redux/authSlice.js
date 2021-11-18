import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: false,
  admin: false,
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
  },
});

export const { login, logout, loginAdmin, logoutAdmin } = authSlice.actions;
export default authSlice.reducer;
