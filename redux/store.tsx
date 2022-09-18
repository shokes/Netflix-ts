import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../redux/features/homeSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});
