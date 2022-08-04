import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
export const { logIn } = authSlice.actions;
