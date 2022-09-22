import { useSelector } from 'react-redux';
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

const Trending = () => {
  const { trending } = useSelector((store: RootState) => store.home);

  if (trending.length !== 0) {
    return (
      <section className=' mt-[-7rem] '>
        <div className='ml-[2rem] '>
          <h3 className='font-bold text-2xl text-white mb-2'>Trending Now</h3>
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
            modules={[Pagination, Navigation, Scrollbar, A11y]}
            // className='mySwiper'
          >
            <div className='flex'>
              {trending.map((item) => {
                const { poster_path: poster } = item;

                return (
                  <SwiperSlide key={poster}>
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${poster}`}
                      alt='trending'
                      className=' rounded-[0.2rem] transition ease-in-out delay-150 movie  duration-300'
                      width={300}
                      height={144}
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

export default Trending;
