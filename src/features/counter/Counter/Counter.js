import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, selectCounter } from '../counterSlice';

const Counter = () => {
  const count = useSelector(selectCounter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  }

  const handleDecrement = () => {
    dispatch(decrement());
  }

  const handleAddByValue = () => {

  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;