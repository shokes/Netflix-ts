import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Navigation, Hero, Trending, Comedy, TopRated } from '../components';
import {
  getTvShowsHero,
  getTvShowsTopRated,
} from '../redux/features/showsSlice';
import { getTrendingMovies, getComedy } from '../redux/features/homeSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
const TvShows = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTvShowsHero());
    dispatch(getTrendingMovies());
    dispatch(getComedy());
    dispatch(getTvShowsTopRated());
  }, []);
  const { tvShowsHero, tvShowsTopRated } = useSelector(
    (store: RootState) => store.shows
  );
  return (
    <section>
      <Navigation />
      <Hero heroMovieProp={tvShowsHero} />
      <Trending />
      <TopRated topRatedProp={tvShowsTopRated} name='top rated tv shows' />
      <Comedy />
    </section>
  );
};

export default TvShows;