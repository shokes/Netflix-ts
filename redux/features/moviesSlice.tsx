import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import requests from '../../requests/requests';
import { StateTypes } from '../../interfaces/moviesSliceTypes';

const initialState: StateTypes = {
  moviesHero: [],
  moviesTopRated: [],
  isLoading: true,
};

// fetching hero movie to show on movies page
export const getMoviesHero: any = createAsyncThunk(
  'shows/getTvShowsHero',
  async () => {
    return fetch(requests.movies)
      .then((resp) => resp.json())
      .catch((err) => console.log(err));
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: {
    // for the main movie/show on hero
    [getMoviesHero.pending]: (state) => {
      state.isLoading = true;
    },
    [getMoviesHero.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.moviesHero = action.payload.results;
    },
    [getMoviesHero.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default moviesSlice.reducer;
