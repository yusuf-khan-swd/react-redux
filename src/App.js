import { useDispatch, useSelector } from 'react-redux';
import './App.css';


function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INC" })
  };

  const handleDecrement = () => {
    dispatch({ type: "DEC" })
  };

  const handleAddBy = () => {
    dispatch({ type: "ADD", payload: 10 })
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
