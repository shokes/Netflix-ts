import type { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Head from 'next/head';
import {
  getHeroMovie,
  getTrendingMovies,
  getTopRated,
  getAction,
  getComedy,
  getHorror,
  getDocumentaries,
  getRomance,
} from '../redux/features/homeSlice';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  Hero,
  Trending,
  TopRated,
  Action,
  Comedy,
  Horror,
  Documentaries,
  Romance,
} from '../components';

const Home: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeroMovie());
    dispatch(getTrendingMovies());
    dispatch(getTopRated());

    dispatch(getAction());
    dispatch(getComedy());
    dispatch(getHorror());
    dispatch(getRomance());
    dispatch(getDocumentaries());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { heroMovie, topRated } = useSelector((store: RootState) => store.home);

  const activePage = 'Home';

  return (
    <>
      <Head>
        <title>{activePage} - Netflix</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <div className='overflow-hidden '>
        <Hero heroMovieProp={heroMovie} activePage={activePage} />
        <Trending />
        <TopRated topRatedProp={topRated} />
        <Action />
        <Comedy />
        <Horror />

        <Documentaries />
        <Romance />
      </div>
    </>
  );
};

export default Home;
