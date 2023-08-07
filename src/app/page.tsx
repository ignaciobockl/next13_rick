'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import { decrement, increment } from '@/redux/features/counterSlice';

const HomePage = () => {
  const count = useAppSelector((state) => state.counterReducer.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>total: {count}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>

      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default HomePage;
