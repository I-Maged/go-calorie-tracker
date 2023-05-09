import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import entriesService from './entriesService';

const initialState = {
  entries: null,
  entry: null,
};

export const getAllEntries = createAsyncThunk(
  'entries/getAll',
  async (_, thunkAPI) => {
    try {
      return await entriesService.getAllEntries();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const entriesSlice = createSlice({
  name: 'entries',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllEntries.pending, (state) => {
        state.entries = null;
      })
      .addCase(getAllEntries.fulfilled, (state, action) => {
        state.entries = action.payload;
      });
  },
});

export default entriesSlice.reducer;
