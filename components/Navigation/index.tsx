import logo from '../../public/Images/netflix logo.png';
import avatar from '../../public/Images/avatar.jpeg';
import { BsBellFill } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import { NavItemsTypes } from '../../interfaces/NavigationTypes';
import { useEffect } from 'react';

import {
  getHeroMovie,
  getTrendingMovies,
  getTopRated,
  getAction,
  getComedy,
  getHorror,
  getDocumentaries,
  getRomance,
} from '../../redux/features/homeSlice';
import { useDispatch } from 'react-redux';

const Navigation = () => {
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
  }, []);
  const navItems: NavItemsTypes[] = [
    {
      id: 1,
      title: 'Home',
      url: '/',
    },
    {
      id: 2,
      title: 'TV Shows',
      url: '/tvshows',
    },
    {
      id: 3,
      title: 'Movies',
      url: '/movies',
    },
    {
      id: 4,
      title: 'My List',
      url: '/list',
    },
  ];
  return (
    <section className='bg-black/10 text-white'>
      <div className='container'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-[4rem] items-center'>
            <Link href='/'>
              <a>
                <Image
                  src={logo}
                  alt='the netflix logo'
                  width={112}
                  height={80}
                />{' '}
              </a>
            </Link>

            <ul className='flex gap-[2rem]'>
              {navItems.map((item) => {
                return (
                  <Link key={item.id} href={item.url}>
                    {item.title}
                  </Link>
                );
              })}
            </ul>
          </div>

          <div className='flex items-center gap-[2rem]'>
            <BsBellFill className='w-[1.5rem] h-[1.5rem]' />

            <Image
              src={avatar}
              alt='avatar'
              className='rounded-sm'
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;