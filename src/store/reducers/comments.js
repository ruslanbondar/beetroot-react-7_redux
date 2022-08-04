import { createSlice } from '@reduxjs/toolkit';
import { fetchComments } from 'api/requests/index';

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    loading: false,
    error: null,
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

// const obj = { a: 1, 'a b c': 2 };
// console.log(obj['a b c']);
