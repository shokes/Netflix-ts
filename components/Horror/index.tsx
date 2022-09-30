import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RootState } from '../../redux/store';
import { handleComponentModal } from '../../redux/features/homeSlice';
import { handlePlay } from '../../helpers';
import { openModal } from '../../redux/features/modalSlice';
import HeroModal from '../Modal/heroModal';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper';

const Horror = () => {
  const { horror } = useSelector((store: RootState) => store.home);
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

  if (horror.length !== 0) {
    return (
      <section className='pt-[4rem]'>
        <div className='ml-[2rem]'>
          <h3 className='font-bold text-2xl text-white mb-3'>Horror</h3>
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
            {' '}
            <div className='flex'>
              {horror.map((item) => {
                const { poster_path: poster, id } = item;

                return (
                  <SwiperSlide
                    key={poster}
                    onClick={() => {
                      dispatch(handleComponentModal([horror, id]));
                      dispatch(openModal());
                    }}
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${poster}`}
                      alt='horror'
                      className=' rounded-[0.2rem] cursor-pointer'
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

export default Horror;
