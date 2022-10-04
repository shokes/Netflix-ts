import logo from '../../public/Images/netflix logo.png';
import avatar from '../../public/Images/avatar.jpeg';
import { BsBellFill } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import { NavItemsTypes } from '../../interfaces/navigationTypes';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const Navigation = () => {
  const navItems: NavItemsTypes[] = [
    {
      id: 1,
      title: 'Home',
      url: '/',
    },
    {
      id: 2,
      title: 'TV Shows',
      url: '/TvShows',
    },
    {
      id: 3,
      title: 'Movies',
      url: '/Movies',
    },
    {
      id: 4,
      title: 'My List',
      url: '/List',
    },
    {
      id: 5,
      title: 'Browse by Languages',
      url: '/',
    },
  ];
  const [ref, inView] = useInView();

  const [view, setView] = useState(false);

  useEffect(() => {
    if (inView) {
      setView(true);
    } else {
      setView(false);
    }
  }, [inView]);

  return (
    <section className=''>
      <span ref={ref}></span>
      <div
        className={`bg-black/20 fixed  text-sm  w-full text-white duration-1000 ${
          view ? 'block' : 'fixed bg-black z-40'
        }`}
      >
        {' '}
        <div className='container'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-[4rem] items-center'>
              <Link href='/'>
                <a className='py-2'>
                  <Image
                    src={logo}
                    alt='the netflix logo'
                    width={100}
                    height={30}
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
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
