import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';



const Counter = () => {
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({
      type: 'increment'
    })
  }
  const decrement = () => {
    dispatch({
      type: 'decrement'
    })
  }
  const counter = useSelector((state) => state.counter);
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>

      <div>
        <button onClick={increment}>
          Increase Counter
        </button>
        <button onClick={decrement}>
          decrease Counter
        </button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
