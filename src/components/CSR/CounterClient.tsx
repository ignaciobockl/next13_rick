'use client';

import { FaDocker } from 'react-icons/fa6';

import { decrement, increment } from '@/redux/features/counterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import Button from '../Custom Comp/Button';

const CounterClient = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleDecrementClick: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    dispatch(decrement());
  };

  return (
    <div className='flex flex-col items-center p-6 sm:p-10 m-2'>
      <h1 className='text-center font-bold text-3xl mb-2'>COUNTER</h1>

      <h1 className='m-2'>total: {count}</h1>

      <div className='flex flex-col'>
      <button className='btn mb-2' onClick={() => dispatch(increment())}>
        Increment{' '}
      </button>

      <Button
        color='bg-fuchsia-700'
        disabled={false}
        onClick={handleDecrementClick}
        startIcon={FaDocker}
        startIconStyles={{ fill: 'lightsteelblue' }}
        textColor='text-yellow-500'
        type='button'
      >
        Decrement
      </Button>
      </div>
    </div>
  );
};

export default CounterClient;
