import Head from 'next/head';
import {
  Navigation,
  Hero,
  Trending,
  Documentaries,
  Romance,
} from '../components';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { getMoviesHero } from '../redux/features/moviesSlice';
import {
  getTrendingMovies,
  getDocumentaries,
  getRomance,
} from '../redux/features/homeSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
const Movies = () => {
  const { moviesHero } = useSelector((store: RootState) => store.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesHero());
    dispatch(getTrendingMovies());
    dispatch(getDocumentaries());
    dispatch(getRomance());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section>
      <Head>
        <title>Movies - Netflix</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Hero heroMovieProp={moviesHero} />
      <Trending />
      <Documentaries />
      <Romance />
    </section>
  );
};

export default Movies;
