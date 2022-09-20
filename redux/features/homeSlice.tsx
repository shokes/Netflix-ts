import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = '734e83e292e160a234f82ed2e2c6fb68&';

// APIs
const originals = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_networks=213`;
// const getTrendingApiUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US`;
// const topRatedAPI = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`;
// const actionAPI = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28`;
// const comedyAPI = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35`;
// const horrorAPI = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`;
// const romanceAPI = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=10749`;
// const documentariesAPI = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=99`;

interface stateProps {
  heroMovie: string[];
  isLoading: boolean;
}

const initialState: stateProps = {
  heroMovie: [],
  // trending: [],
  // topRated: [],
  // action: [],
  // comedy: [],
  // horror: [],
  // romance: [],
  // documentaries: [],
  isLoading: true,
};

// getting the movie/shows to be displayed on the hero which the original API

// interface MovieProps {
//   action: string;
// }

// export const getHeroMovie: any = createAsyncThunk('movie/getHeroMovie', () => {
//   return fetch(originals)
//     .then((resp) => resp.json())
//     .catch((err) => console.log(err));
// });

export const getHeroMovie: any = createAsyncThunk('movie/getHeroMovie', () => {
  return fetch(originals)
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
      state.heroMovie = action.payload;
      console.log(state.heroMovie);
    },
    [getHeroMovie.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default homeSlice.reducer;
