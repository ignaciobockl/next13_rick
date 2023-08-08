'use client';

import { decrement, increment } from '@/redux/features/counterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const CounterClient = () => {
  const count = useAppSelector((state) => state.counterReducer.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>COUNTER:</h1>
      <br />

      <h1>total: {count}</h1>
      <br />

      <button onClick={() => dispatch(increment())}>Increment </button>

      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
    </>
  );
};

export default CounterClient;
