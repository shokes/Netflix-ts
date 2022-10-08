import logo from '../../public/Images/netflix logo.png';
import avatar from '../../public/Images/avatar.jpeg';
import movLogo from '../../public/Images/mobLogo.png';
import { BsBellFill } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import { NavItemsTypes, NavMobile } from '../../interfaces/navigationTypes';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { NavigationTypes } from '../../interfaces/navigationTypes';

const Navigation = ({ activePage }: NavigationTypes) => {
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

  const navItemsMobile: NavMobile[] = [
    {
      id: 1,
      title: 'TV Shows',
      url: '/TvShows',
    },
    {
      id: 2,
      title: 'Movies',
      url: '/Movies',
    },
    {
      id: 3,
      title: 'My List',
      url: '/List',
    },
  ];
  const [ref, inView] = useInView();

  const [view, setView] = useState<boolean>(false);

  useEffect(() => {
    if (inView) {
      setView(true);
    } else {
      setView(false);
    }
  }, [inView]);

  return (
    <section>
      <span ref={ref}></span>
      <div
        className={`bg-black/20  fixed  text-sm  w-full text-white duration-1000 ${
          view ? 'block' : 'fixed bg-black z-40'
        }`}
      >
        {' '}
        <div className='container'>
          <div className='flex justify-between items-center'>
            <div className=' hidden lg:flex gap-[4rem] items-center'>
              {/* // navigation for large screens */}
              <Link href='/'>
                <a className='py-4'>
                  <Image
                    src={logo}
                    alt='the netflix logo'
                    width={95}
                    height={25}
                  />{' '}
                </a>
              </Link>

              <ul className='flex items-center gap-[2rem] list-none'>
                {navItems.map((item) => {
                  return (
                    <Link key={item.id} href={item.url}>
                      <li
                        className={`cursor-pointer ${
                          activePage === item.title
                            ? 'text-white font-extrabold'
                            : 'text-gray-200'
                        }`}
                      >
                        {item.title}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>

            {/* Mobile navigation */}
            <div className=' flex gap-[4rem]  lg:hidden items-center'>
              <Link href='/'>
                <a className='py-4'>
                  <Image
                    src={movLogo}
                    alt='the netflix logo'
                    width={24}
                    height={30}
                  />{' '}
                </a>
              </Link>
              <ul className='text-sm flex gap-4 items-center list-none'>
                {navItemsMobile.map((item) => {
                  return (
                    <Link key={item.id} href={item.url}>
                      <li
                        className={`cursor-pointer ${
                          activePage === item.title
                            ? 'text-white font-extrabold'
                            : 'text-gray-200'
                        }`}
                      >
                        {item.title}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>

            <div className='flex items-center gap-[2rem]'>
              <BsBellFill className='w-[1.5rem] h-[1.5rem] hidden lg:block' />

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
