import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RootState } from '../../redux/store';
import HeroModal from '../Modal/heroModal';
import { handlePlay } from '../../helpers';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { handleComponentModal } from '../../redux/features/homeSlice';
import { openModal } from '../../redux/features/modalSlice';

// import required modules
import { Pagination, Navigation } from 'swiper';

const Action = () => {
  const { action } = useSelector((store: RootState) => store.home);
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

  if (action.length !== 0) {
    return (
      <section className='pt-[4rem]'>
        <div className='ml-[2rem]'>
          <h3 className='font-bold text-2xl text-white mb-3'>Action</h3>
          <Swiper
            slidesPerView={5}
            spaceBetween={4}
            slidesPerGroup={5}
            loop={true}
            loopFillGroupWithBlank={false}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className='mySwiper'
          >
            <div className='flex'>
              {action.map((item) => {
                const { poster_path: poster, id } = item;

                return (
                  <SwiperSlide
                    key={poster}
                    onClick={() => {
                      dispatch(handleComponentModal([action, id]));
                      dispatch(openModal());
                    }}
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${poster}`}
                      alt='action'
                      className=' rounded-[0.2rem] cursor-pointer'
                      // w-full h-[9rem]
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

export default Action;
