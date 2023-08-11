import { createSlice } from '@reduxjs/toolkit';

interface CounterType {
  value: number;
}

export const counterInitialState: CounterType = {
  value: 30,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: counterInitialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
