import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    nickname: null,
  },
  reducers: {
    logIn: (state, action) => {
      localStorage.setItem('token', 'my_secret_token');
      localStorage.setItem('nickname', action.payload.nickname);
      state.isLoggedIn = true;
      state.nickname = action.payload.nickname;
    },
    logOut: (state) => {
      localStorage.removeItem('token');
      localStorage.removeItem('nickname');
      state.isLoggedIn = false;
      state.nickname = null;
    },
  },
});

export default authSlice.reducer;
export const { logIn, logOut } = authSlice.actions;
