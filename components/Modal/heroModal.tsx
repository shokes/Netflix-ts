import React from 'react';
import { HeroModalType } from '../../interfaces/heroModalTypes';
import { IoMdClose } from 'react-icons/io';
import { RiPlayFill } from 'react-icons/ri';
import { BiPlus } from 'react-icons/bi';
import { formatDate } from '../../helpers';

const HeroModal = ({
  name,
  bg,
  setIsOpen,
  overview,
  handlePlay,
  date,
  rating,
}: HeroModalType) => {
  return (
    <section className='relative  rounded-xl '>
      <div
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${bg}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '400px',
          width: '800px',
          // background: 'linear-gradient(, yellow)',
          // background: '  linear-gradient(red, rgb(20, 20, 20))',
        }}
        className='rounded-t-xl'
      >
        <div className='pt-[16rem] pl-[2rem]'>
          <h2 className='font-bold text-5xl mb-3  text-white'>{name}</h2>
          <div className='flex items-center gap-5'>
            <button
              className='bg-white text-black px-5 py-1 rounded-[0.2rem] flex items-center gap-1'
              onClick={handlePlay}
            >
              <RiPlayFill className='w-[1.8rem] h-[1.8rem]' />{' '}
              <span className='font-semibold'>Play</span>
            </button>
            <button className='bg-white/20 border-2 border-white  rounded-full'>
              <BiPlus className='text-white w-[1.8rem] h-[1.8rem]' />
            </button>
          </div>
        </div>
      </div>
      <div className=' bg-[#141414] w-[800px] h-[11rem] text-white p-4 rounded-b-xl'>
        <div className='flex gap-x-3 items-center mb-2'>
          <span>{date ? formatDate(date) : 'N/A'}</span>
          <span className='text-green-500 font-semibold'>{rating}/10</span>
          <span className='border border-white text-sm '>HD</span>
        </div>
        <p>{overview ? overview : 'overview not available at this time'}</p>{' '}
      </div>

      <IoMdClose
        className='absolute top-3 right-3 text-3xl p-1 text-white bg-[#141414] rounded-full cursor-pointer'
        onClick={() => setIsOpen(false)}
      />
    </section>
  );
};

export default HeroModal;
