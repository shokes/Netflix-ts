import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../redux/features/homeSlice';
import showsReducer from '../redux/features/showsSlice';
import movieReducer from '../redux/features/moviesSlice';
import modalSlice from './features/modalSlice';
import listSlice from './features/listSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    shows: showsReducer,
    movies: movieReducer,
    modal: modalSlice,
    list: listSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: { home: homeReducer,}
export type AppDispatch = typeof store.dispatch;
