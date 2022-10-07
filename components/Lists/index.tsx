import Modal from '../Modal';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { openModal } from '../../redux/features/modalSlice';
import { handleComponentModal } from '../../redux/features/homeSlice';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Lists = () => {
  const { list } = useSelector((store: RootState) => store.list);
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store: RootState) => store.modal);
  const { modalData } = useSelector((store: RootState) => store.home);
  const [added, setAdded] = useState<boolean>(false);

  if (list.length !== 0) {
    return (
      <section className='pt-[4rem]'>
        <div className=' container'>
          <h3 className='font-bold text-2xl text-white my-10'>My List</h3>
          <div className='grid grid-cols-5 gap-4'>
            {list.map((item: any) => {
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    dispatch(handleComponentModal([list, item.id]));

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
        <div className='z-50 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] fixed'>
          {isOpen && <Modal modalData={modalData} />}
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default Lists;
