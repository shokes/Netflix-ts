import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { StateTypes } from '../../interfaces/homeSliceTypes';
import requests from '../../requests/requests';

const initialState: StateTypes = {
  heroMovie: [],
  trending: [],
  topRated: [],
  action: [],
  // comedy: [],
  // horror: [],
  // romance: [],
  // documentaries: [],
  isLoading: true,
};

// fetching movie to be displayed on hero

export const getHeroMovie: any = createAsyncThunk(
  'movie/getHeroMovie',
  async () => {
    return fetch(requests.originals)
      .then((resp) => resp.json())
      .catch((err) => console.log(err));
  }
);

// fetching movies to be displayed as trending

export const getTrendingMovies: any = createAsyncThunk(
  'movies/getTrendingMovies',
  async () => {
    return fetch(requests.getTrending)
      .then((resp) => resp.json())
      .catch((err) => console.log(err));
  }
);

// fetching movies to be displayed as top rated

export const getTopRated: any = createAsyncThunk(
  'movies/getTopRated',
  async () => {
    return fetch(requests.topRated)
      .then((resp) => resp.json())
      .catch((err) => console.log(err));
  }
);

// fetching movies to be displayed as action

export const getAction: any = createAsyncThunk('movies/getAction', async () => {
  return fetch(requests.action)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

const homeSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {},
  extraReducers: {
    // for the main movie/show on hero
    [getHeroMovie.pending]: (state) => {
      state.isLoading = true;
    },
    [getHeroMovie.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.heroMovie = action.payload.results;
    },
    [getHeroMovie.rejected]: (state) => {
      state.isLoading = false;
    },

    // for the trending movies
    [getTrendingMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [getTrendingMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.trending = action.payload.results;
    },
    [getTrendingMovies.rejected]: (state) => {
      state.isLoading = false;
    },

    // for the top rated movies
    [getTopRated.pending]: (state) => {
      state.isLoading = true;
    },
    [getTopRated.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.topRated = action.payload.results;
    },
    [getTopRated.rejected]: (state) => {
      state.isLoading = false;
    },

    // for the action movies
    [getAction.pending]: (state) => {
      state.isLoading = true;
    },
    [getAction.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.action = action.payload.results;
    },
    [getAction.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default homeSlice.reducer;
