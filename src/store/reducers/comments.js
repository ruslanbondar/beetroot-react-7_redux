import { createSlice } from '@reduxjs/toolkit';
import { fetchComments } from 'api/requests/index';

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    likedComments: [],
    loading: false,
    error: null,
  },
  reducers: {
    addToFav: (state, action) => {
      state.likedComments.push(action.payload);
      localStorage.setItem('fav', JSON.stringify(state.likedComments));
    },
    setFavComments: (state, action) => {
      state.likedComments = action.payload;
    },
  },
  extraReducers: {
    [fetchComments.fulfilled]: (state, action) => {
      state.comments = action.payload;
      state.loading = false;
    },
    [fetchComments.pending]: (state) => {
      state.loading = true;
    },
    [fetchComments.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export default commentsSlice.reducer;
export const { setFavComments } = commentsSlice.actions;

// const obj = { a: 1, 'a b c': 2 };
// console.log(obj['a b c']);
