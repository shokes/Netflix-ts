import Modal from '../Modal';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RootState } from '../../redux/store';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { handleComponentModal } from '../../redux/features/homeSlice';
import { openModal } from '../../redux/features/modalSlice';
// import required modules
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';

const Romance = () => {
  const { romance } = useSelector((store: RootState) => store.home);
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store: RootState) => store.modal);
  const { modalData } = useSelector((store: RootState) => store.home);

  if (romance.length !== 0) {
    return (
      <section className='pt-[4rem]'>
        <div className='container  '>
          <h3 className='font-bold text-2xl text-white mb-2'>Romance</h3>
          <Swiper
            slidesPerView={5}
            spaceBetween={4}
            slidesPerGroupSkip={1}
            grabCursor={true}
            slidesPerGroup={5}
            loop={true}
            loopFillGroupWithBlank={false}
            speed={1000}
            navigation={true}
            modules={[Pagination, Navigation, Scrollbar, A11y]}
            breakpoints={{
              1000: {
                slidesPerView: 5,
                slidesPerGroup: 5,
              },
              750: {
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
              0: {
                slidesPerGroup: 3,
                slidesPerView: 3,
              },
            }}
            keyboard={{
              enabled: true,
            }}
          >
            <div className='flex'>
              {romance.map((item) => {
                const { poster_path, id } = item;

                return (
                  <SwiperSlide
                    key={id}
                    onClick={() => {
                      dispatch(handleComponentModal([romance, id]));
                      dispatch(openModal());
                    }}
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                      alt='romance'
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
        <div className='z-50 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] fixed'>
          {isOpen && <Modal modalData={modalData} />}
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default Romance;
