import Head from 'next/head';
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { tvShowsHero, tvShowsTopRated } = useSelector(
    (store: RootState) => store.shows
  );
  return (
    <section>
      <Head>
        <title>TvShows - Netflix</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Hero heroMovieProp={tvShowsHero} />
      <Trending />
      <TopRated topRatedProp={tvShowsTopRated} title='top rated tv shows' />
      <Comedy />
    </section>
  );
};

export default TvShows;
