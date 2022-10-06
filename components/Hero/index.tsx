import { RiPlayFill } from 'react-icons/ri';
import { RiErrorWarningLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { HeroType } from '../../interfaces/heroTypes';
import Navigation from '../Navigation';
//import HeroModal from '../Modal';
import Modal from '../Modal';
import { handlePlay } from '../../helpers';
import { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../redux/features/modalSlice';
import { handleHeroModal } from '../../redux/features/homeSlice';

const Hero = ({ heroMovieProp }: HeroType) => {
  const dispatch = useDispatch();

  const [randomNumber, setRandomNumber] = useState<number>(3);
  const { isOpen } = useSelector((store: RootState) => store.modal);

  const { modalData } = useSelector((store: RootState) => store.home);
  //console.log(modalData);

  const {
    id,
    backdrop_path,

    poster_path,
    name,
    original_title,
    overview,
    vote_average,
    first_air_date,
  } = modalData;

  // randomly picks out a movie from an array of 20 movies
  useEffect(() => {
    const numb = Math.floor(Math.random() * 20);
    setRandomNumber(numb);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (heroMovieProp.length !== 0) {
    const {
      backdrop_path: bg,
      name,
      original_title: title,
      overview,
      id,
      first_air_date: date,
      vote_average: rating,
    } = heroMovieProp?.[randomNumber];

    return (
      <section
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${bg}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '700px',
        }}
      >
        <Navigation />
        <div className='container relative'>
          <div className='w-[34rem] text-white absolute top-[10rem]'>
            <h3 className='text-6xl font-bold mb-2'>{name ? name : title}</h3>
            <p className='mb-2'>
              {overview ? overview : 'Overview not available at this time.'}
            </p>
            <div className='flex gap-2 '>
              <button
                type='button'
                className='bg-white text-black px-5 py-1 rounded-[0.2rem] flex items-center gap-1'
                onClick={handlePlay}
              >
                <RiPlayFill className='w-[1.8rem] h-[1.8rem]' />{' '}
                <span className='font-semibold'>Play</span>
              </button>
              <button
                type='button'
                className='bg-black/[0.6]   px-4 py-1 rounded-[0.2rem] flex items-center gap-1'
                onClick={() => {
                  dispatch(handleHeroModal([heroMovieProp[randomNumber], id]));
                  dispatch(openModal());
                }}
              >
                <RiErrorWarningLine className='w-[1.8rem] h-[1.8rem] rotate-180 text-white opacity-100' />{' '}
                <span className='opacity-100 font-semibold text-white'>
                  More Info
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className='z-50 right-[19rem] top-[2rem] fixed'>
          {isOpen && (
            <Modal
              poster_path={poster_path}
              id={id}
              bg={backdrop_path}
              name={name ? name : original_title}
              overview={overview}
              rating={vote_average}
              date={first_air_date}
              handlePlay={handlePlay}
            />
          )}
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default Hero;
