import logo from '../../public/Images/netflix logo.png';
import avatar from '../../public/Images/avatar.jpeg';
import { BsBellFill } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import { NavItemsProps } from '../../interfaces/NavigationTypes';

const Navigation = () => {
  const navItems: NavItemsProps[] = [
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
              <Image
                src={logo}
                alt='the netflix logo'
                width={112}
                height={80}
              />
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
