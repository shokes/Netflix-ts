import { useSelector, useDispatch } from 'react-redux';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { RootState } from '../../redux/store';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import HeroModal from '../Modal/heroModal';
import { handlePlay } from '../../helpers';
import { openModal } from '../../redux/features/modalSlice';
import { handleComponentModal } from '../../redux/features/homeSlice';

const Trending = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store: RootState) => store.modal);

  const { trending, modalData } = useSelector((store: RootState) => store.home);

  const {
    backdrop_path,
    name,
    original_title,
    overview,
    vote_average,
    first_air_date,
  } = modalData;

  if (trending.length !== 0) {
    return (
      <section className=' mt-[-7rem] '>
        <div className='ml-[2rem]  '>
          <h3 className='font-bold text-2xl text-white mb-2'>Trending Now</h3>
          <Swiper
            slidesPerView={5}
            spaceBetween={4}
            slidesPerGroupSkip={1}
            grabCursor={true}
            slidesPerGroup={5}
            loop={true}
            loopFillGroupWithBlank={false}
            // pagination={{
            //   clickable: true,
            // }}
            speed={1000}
            navigation={true}
            modules={[Pagination, Navigation, Scrollbar, A11y]}
            // className='overflow-visible'
            keyboard={{
              enabled: true,
            }}
          >
            <div className='flex'>
              {trending.map((item) => {
                const {
                  poster_path: poster,
                  id,
                  backdrop_path: bg,
                  name,
                } = item;

                return (
                  <SwiperSlide
                    key={poster}
                    onClick={() => {
                      dispatch(handleComponentModal([trending, id]));
                      dispatch(openModal());
                    }}
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${poster}`}
                      alt='trending'
                      className=' rounded-[0.3rem]  cursor-pointer '
                      width={300}
                      height={144}
                    />
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
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

export default Trending;
