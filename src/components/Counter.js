import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';



const Counter = () => {
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch({
      type: 'increment'
    })
  }
  const decrementHandler = () => {
    dispatch({
      type: 'decrement'
    })
  }
  const incByXHandler = (incVal) => {
    dispatch({
      type: 'incbyx',
      value: incVal
    })
  }
  const counter = useSelector((state) => state.counter);
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>

      <div>
        <button onClick={incrementHandler}>
          Increase Counter
        </button>
        <button onClick={() => incByXHandler(10)}>
          Increase By 10
        </button>
        <button onClick={decrementHandler}>
          decrease Counter
        </button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
