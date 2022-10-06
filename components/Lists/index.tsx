import Modal from '../Modal';
import { useSelector, useDispatch } from 'react-redux';
import { handlePlay } from '../../helpers';
import { RootState } from '../../redux/store';
import { openModal } from '../../redux/features/modalSlice';
import { handleComponentModal } from '../../redux/features/homeSlice';
import Image from 'next/image';
import { useState } from 'react';

const Lists = () => {
  const { list } = useSelector((store: RootState) => store.list);
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

  // doing this instead of getting the backdrop_path(background) because it returns undefined on the second render. you can console.log to observe the behavior

  const [background, setBackground] = useState('');

  if (list.length !== 0) {
    return (
      <section className='pt-[4rem]'>
        <div className=' container'>
          <h3 className='font-bold text-2xl text-white my-10'>My List</h3>
          <div className='grid grid-cols-5 gap-4'>
            {list.map((item: any) => {
              return (
                <div
                  key={item.name}
                  onClick={() => {
                    dispatch(handleComponentModal([list, item.id]));
                    setBackground(item.bg);
                    dispatch(openModal());
                  }}
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    alt={item.name}
                    className=' rounded-[0.3rem] cursor-pointer'
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
            <Modal
              poster_path={poster_path}
              id={id}
              bg={background}
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
