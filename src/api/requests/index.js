import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../index';

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async () => {
    const data = instance.get('/comments').then((res) => res.data);

    return data;
  },
);
