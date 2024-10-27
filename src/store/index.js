import { createStore } from 'redux';

const reducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter + 1
      }
    case 'incbyx':
      return {
        counter: state.counter + action.value
      }
    case 'decrement':
      return {
        counter: state.counter - 1
      }
    default:
      return state;
  }

}
const store = createStore(reducer);


export default store;