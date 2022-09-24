import { RiPlayFill } from 'react-icons/ri';
import { RiErrorWarningLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { heroType } from '../../interfaces/heroTypes';
import Navigation from '../Navigation';
import HeroModal from '../Modal/heroModal';

const Hero = ({ heroMovieProp }: heroType) => {
  const [randomNumber, setRandomNumber] = useState<number>(3);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // randomly picks out a movie from an array of 20 movies
  useEffect(() => {
    const numb = Math.floor(Math.random() * 20);
    setRandomNumber(numb);
  }, []);

  const handlePlay = () => {
    alert('Lol! please use the real Netflix');
  };

  if (heroMovieProp.length !== 0) {
    const {
      backdrop_path: bg,
      name,
      original_title: title,
      overview,
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
        {' '}
        <Navigation />
        <div className='container'>
          <div className='w-[29rem] text-white pt-[10rem]'>
            <h3 className='text-6xl font-bold mb-2'>{name ? name : title}</h3>
            <p className='mb-2'>{overview}</p>
            <div className='flex gap-2 '>
              <button
                className='bg-white text-black px-5 py-1 rounded-[0.2rem] flex items-center gap-1'
                onClick={handlePlay}
              >
                <RiPlayFill className='w-[1.8rem] h-[1.8rem]' />{' '}
                <span className='font-semibold'>Play</span>
              </button>
              <button
                className='bg-black/[0.6]   px-4 py-1 rounded-[0.2rem] flex items-center gap-1'
                onClick={() => setIsOpen(true)}
              >
                <RiErrorWarningLine className='w-[1.8rem] h-[1.8rem] rotate-180 text-white opacity-100' />{' '}
                <span className='opacity-100 font-semibold text-white'>
                  More Info
                </span>
              </button>
            </div>
            <div>{isOpen && <HeroModal />}</div>
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default Hero;
