import AuthReducer from './auth';
import CounterReducer from './counter'
import { configureStore } from '@reduxjs/toolkit'



/**
 * @description creating a store with multiple slices
 */
const store = configureStore({
  reducer: {
    auth: AuthReducer,
    counter: CounterReducer,
  }
});


export default store;