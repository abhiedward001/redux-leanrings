import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';
import { counterActions } from '../store/counter';




const Counter = () => {
  const dispatch = useDispatch(); // hook used to dispact an action

  /**
   * @description below are our action dispatch funcitons
   */
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }
  const incByXHandler = (incVal) => {
    dispatch(counterActions.incbyx(10))
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };



  const counter = useSelector((state) => state.counter.counter); // extracting store value through a hook
  const toggleState = useSelector((state) => state.counter.showToggle);



  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggleState && <div className={classes.value}>{counter}</div>}

      <div>
        <button
          onClick={incrementHandler}
          disabled={!toggleState}
          style={!toggleState ? { backgroundColor: '#D3D3D3' } : {}}>

          Increase Counter
        </button>
        <button
          onClick={() => incByXHandler(10)}
          disabled={!toggleState}
          style={!toggleState ? { backgroundColor: '#D3D3D3' } : {}}>
          Increase By 10
        </button>
        <button
          onClick={decrementHandler}
          disabled={!toggleState}
          style={!toggleState ? { backgroundColor: '#D3D3D3' } : {}}>
          decrease Counter
        </button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
