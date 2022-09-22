import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RootState } from '../../redux/store';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';

const Action = () => {
  const { action } = useSelector((store: RootState) => store.home);

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
                const { poster_path: poster } = item;

                return (
                  <SwiperSlide key={poster}>
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${poster}`}
                      alt='action'
                      className=' rounded-[0.2rem]'
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
      </section>
    );
  } else {
    return null;
  }
};

export default Action;