import { configureStore } from '@reduxjs/toolkit';
import entriesReducer from '../features/entries/entriesSlice';

export const store = configureStore({
  reducer: {
    entries: entriesReducer,
  },
});
