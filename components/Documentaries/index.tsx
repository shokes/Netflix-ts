import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import HeroModal from '../Modal/heroModal';
import { RootState } from '../../redux/store';
import { handlePlay } from '../../helpers';
import { handleComponentModal } from '../../redux/features/homeSlice';
import { openModal } from '../../redux/features/modalSlice';

import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';

const Documentaries = () => {
  const { documentaries } = useSelector((store: RootState) => store.home);
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

  if (documentaries.length !== 0) {
    return (
      <section className='pt-[4rem]'>
        <div className='ml-[2rem]'>
          <h3 className='font-bold text-2xl text-white mb-3'>Documentaries</h3>
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
              {documentaries.map((item) => {
                const { poster_path: poster, id } = item;

                return (
                  <SwiperSlide
                    key={poster}
                    onClick={() => {
                      dispatch(handleComponentModal([documentaries, id]));
                      dispatch(openModal());
                    }}
                  >
                    <Image
                      // src={`${poster ? 'https://image.tmdb.org/t/p/original/${poster}' : 'errorImage'`}
                      // src={
                      //   poster
                      //     ? `https://image.tmdb.org/t/p/original/${poster} `
                      //     : errorImage
                      // }

                      src={`https://image.tmdb.org/t/p/original/${poster}`}
                      alt='documentary'
                      className=' rounded-[0.3rem]  cursor-pointer '
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

export default Documentaries;
