'use client';

import { Md4KPlus } from "react-icons/md";

import { decrement, increment } from '@/redux/features/counterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import GenericButton from '../Custom Components/GenericButton';



const CounterClient = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleDecrementClick: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    dispatch(decrement());
  };

  return (
    <div className='p-6 sm:p-10'>
      <h1 className='text-center font-bold text-3xl'>COUNTER</h1>
      <br />

      <h1>total: {count}</h1>
      <br />

      <button className='btn' onClick={() => dispatch(increment())}>
        Increment{' '}
      </button>
      <br />

      <GenericButton
        color='bg-fuchsia-700'
        disabled={false}
        iconUrl={Md4KPlus}
        onClick={handleDecrementClick}
        textColor='text-yellow-500'
        type='button'
      >
        Decrement
      </GenericButton>
      <br />
    </div>
  );
};

export default CounterClient;
