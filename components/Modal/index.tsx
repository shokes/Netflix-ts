import { ModalType } from '../../interfaces/modalTypes';
import { IoMdClose } from 'react-icons/io';
import { RiPlayFill } from 'react-icons/ri';
import { BiPlus } from 'react-icons/bi';
import { IoMdCheckmark } from 'react-icons/io';
import { formatDate } from '../../helpers';
import { closeModal } from '../../redux/features/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addToList, removeFromList } from '../../redux/features/listSlice';
import { RootState } from '../../redux/store';
import { useState, useEffect } from 'react';
import { handlePlay } from '../../helpers';

const Modal = ({ modalData }: ModalType) => {
  const dispatch = useDispatch();
  const { list } = useSelector((store: RootState) => store.list);

  const [added, setAdded] = useState<boolean>(false);

  useEffect(() => {
    if (modalData) {
      let newArray = list.map((item: any) => item.id);
      if (newArray.includes(modalData.id)) {
        setAdded(true);
      } else {
        setAdded(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  if (modalData) {
    const {
      first_air_date,
      release_date,
      id,
      backdrop_path,
      poster_path,
      name,
      original_title,
      overview,
      vote_average,
    } = modalData;

    const data = {
      first_air_date,
      release_date,
      id,
      backdrop_path,
      poster_path,
      name,
      original_title,
      overview,
      vote_average,
    };

    return (
      <section className='relative  rounded-xl '>
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, transparent 10%, rgb(20, 20, 20) 100%), url('https://image.tmdb.org/t/p/original/${backdrop_path}')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
          className='rounded-t-lg  w-[350px] h-[200px] lg:w-[800px] lg:h-[400px] '
        >
          <div className=' pt-[6rem]  pl-[1rem] lg:pt-[16rem] lg:pl-[2rem]'>
            <h2 className='font-bold text-xl lg:text-5xl mb-3  text-white'>
              {name ? name : original_title}
            </h2>
            <div className='flex items-center gap-5'>
              <button
                className='bg-white text-black px-5 py-1 rounded-[0.2rem] flex items-center gap-1'
                onClick={handlePlay}
              >
                <RiPlayFill className='w-[1.8rem] h-[1.8rem]' />{' '}
                <span className='font-semibold'>Play</span>
              </button>
              {!added ? (
                <button
                  className='bg-white/20 border-2 border-white  rounded-full p-2'
                  onClick={() => {
                    dispatch(addToList(data));
                    setAdded(true);
                  }}
                >
                  <BiPlus className='text-white w-[1.3rem] h-[1.3rem] ' />
                </button>
              ) : (
                <button
                  className='bg-white/20 border-2 border-white  rounded-full p-2'
                  onClick={() => {
                    dispatch(removeFromList(data));
                    setAdded(false);
                  }}
                >
                  <IoMdCheckmark className='text-white w-[1.3rem] h-[1.3rem]' />
                </button>
              )}
            </div>
          </div>
        </div>
        <div className=' bg-[#141414] h-[15rem] lg:h-[12.4rem] text-white p-4 rounded-b-lg'>
          <div className='flex gap-x-3 items-center mb-2'>
            <span>
              {first_air_date
                ? formatDate(first_air_date)
                : formatDate(release_date)}
            </span>

            <span className='text-green-500 font-semibold'>
              {vote_average?.toFixed(1)}/10
            </span>
            <span className='font-bold text-sm '>HD</span>
          </div>
          <p className='text-sm lg:text-base'>
            {overview ? overview : 'Overview not available at this time.'}
          </p>{' '}
        </div>

        <IoMdClose
          className='absolute top-3 right-3 text-3xl p-1 text-white bg-[#141414] rounded-full cursor-pointer'
          onClick={() => dispatch(closeModal())}
        />
      </section>
    );
  } else {
    return null;
  }
};

export default Modal;
