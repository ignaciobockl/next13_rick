'use client';

import { decrement, increment } from '@/redux/features/counterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const CounterClient = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className='p-6 sm:p-10'>
      <h1 className='text-center font-bold text-3xl'>COUNTER</h1>
      <br />

      <h1>total: {count}</h1>
      <br />

      <button className='btn' onClick={() => dispatch(increment())}>Increment </button>

      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
    </div>
  );
};

export default CounterClient;
