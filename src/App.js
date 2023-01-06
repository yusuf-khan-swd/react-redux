import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { actions } from './store/store';


function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(actions.increment());
  };

  const handleDecrement = () => {
    dispatch(actions.decrement());
  };

  const handleAddBy = () => {
    dispatch(actions.addBy(20));
  };

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleAddBy}>Add By</button>
    </div>
  );
}

export default App;
