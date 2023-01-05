import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { actions } from './store/store';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };

  const decrement = () => {
    dispatch(actions.decrement());
  };

  const AddBy = () => {
    dispatch(actions.addBy(10));
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={AddBy}>Add By</button>
    </div>
  );
}

export default App;
