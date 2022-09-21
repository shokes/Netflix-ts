import { useSelector } from 'react-redux/es/exports';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RootState } from '../../redux/store';

// Import Swiper styles
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TopRated = () => {
  const { topRated } = useSelector((store: RootState) => store.home);
  if (topRated.length !== 0) {
    return (
      <section className='pt-[4rem]'>
        <div className='ml-[2rem]'>
          <h3 className='font-bold text-2xl text-white mb-2'>Top Rated</h3>
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
              {topRated.map((item) => {
                const { poster_path: poster } = item;

                return (
                  <SwiperSlide key={poster}>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${poster}`}
                      alt='top rated'
                      className='w-full h-[9rem] rounded-[0.2rem] movie'
                    />
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default TopRated;
