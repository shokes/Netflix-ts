import HeroModal from '../Modal/heroModal';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { handlePlay } from '../../helpers';
import { RootState } from '../../redux/store';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper';

const Lists = () => {
  const { list } = useSelector((store: RootState) => store.list);
  // console.log(list);

  const dispatch = useDispatch();
  const { isOpen } = useSelector((store: RootState) => store.modal);
  const { modalData } = useSelector((store: RootState) => store.home);

  const {
    backdrop_path,
    name,
    original_title,
    overview,
    vote_average,
    first_air_date,
  } = modalData;

  if (list.length !== 0) {
    return (
      <section className='pt-[4rem]'>
        <div className=' container'>
          <h3 className='font-bold text-2xl text-white my-10'>My List</h3>
          <div className='grid grid-cols-5 gap-4'>
            {list.map((item: any) => {
              return (
                <div key={item.name}>
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${item.bg}`}
                    alt={item.name}
                    className=' rounded-[0.2rem] cursor-pointer'
                    // w-full h-[9rem]
                    width={300}
                    height={144}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className='z-50 right-[19rem] top-[2rem] fixed'>
          {isOpen && (
            <HeroModal
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

export default Lists;
