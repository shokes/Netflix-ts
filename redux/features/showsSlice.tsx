import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import requests from '../../requests/requests';
import { StateTypes } from '../../interfaces/showsSliceTypes';

const initialState: StateTypes = {
  tvShowsHero: [],
  tvShowsTopRated: [],
  isLoading: true,
};

// fetching hero show to show on tvshows page
export const getTvShowsHero: any = createAsyncThunk(
  'shows/getTvShowsHero',
  async () => {
    return fetch(requests.tv)
      .then((resp) => resp.json())
      .catch((err) => console.log(err));
  }
);

// fetching movies to be displayed as top rated on the tv shows page

export const getTvShowsTopRated: any = createAsyncThunk(
  'shows/getTvShowsTopRated',
  async () => {
    return fetch(requests.tvTopRated)
      .then((resp) => resp.json())
      .catch((err) => console.log(err));
  }
);

const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {},
  extraReducers: {
    // for the main movie/show on hero
    [getTvShowsHero.pending]: (state) => {
      state.isLoading = true;
    },
    [getTvShowsHero.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.tvShowsHero = action.payload.results;
    },
    [getTvShowsHero.rejected]: (state) => {
      state.isLoading = false;
    },

    // for the top rated movies
    [getTvShowsTopRated.pending]: (state) => {
      state.isLoading = true;
    },
    [getTvShowsTopRated.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.tvShowsTopRated = action.payload.results;
    },
    [getTvShowsTopRated.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default showsSlice.reducer;
