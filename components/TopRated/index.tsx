import { Swiper, SwiperSlide } from 'swiper/react';
import { TopRatedType } from '../../interfaces/topRatedTypes';
import Modal from '../Modal';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { handlePlay } from '../../helpers';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { handleComponentModal } from '../../redux/features/homeSlice';
import { openModal } from '../../redux/features/modalSlice';

// import './styles.css';

// import required modules
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';

const TopRated = ({ topRatedProp, title }: TopRatedType) => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store: RootState) => store.modal);
  const { modalData } = useSelector((store: RootState) => store.home);

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

  if (topRatedProp.length !== 0) {
    return (
      <section className='pt-[4rem]'>
        <div className='container '>
          <h3 className='font-bold text-2xl capitalize text-white mb-2'>
            {title ? title : 'tv shows'}
          </h3>
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
            {' '}
            <div className='flex'>
              {topRatedProp.map((item) => {
                const { poster_path: poster, id } = item;

                return (
                  <SwiperSlide
                    key={poster}
                    onClick={() => {
                      dispatch(handleComponentModal([topRatedProp, id]));
                      dispatch(openModal());
                    }}
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${poster}`}
                      alt='top rated'
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

export default TopRated;
