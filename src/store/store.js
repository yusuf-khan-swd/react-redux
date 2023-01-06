import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducers: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    decrement(state) {
      state.counter = state.counter - 1;
    },
    addBy(state, action) {
      state.counter = state.counter + action.payload;
    }
  }
});

export const actions = slice.actions;

const store = configureStore({
  reducer: slice.reducer
});

export default store;