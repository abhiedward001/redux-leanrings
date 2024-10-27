import { createSlice, configureStore } from '@reduxjs/toolkit'


/**
 * @description initial value of the store
 */
const initialState = {
  counter: 0,
  showToggle: true

}


/**
 * creating a slice for our global store
 */

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggleCounter(state) {
      state.showToggle = !state.showToggle;
    },
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incbyx(state, action) {
      state.counter += action.payload;
    }
  }
});



/**
 * @description creating a store
 */
const store = configureStore({
  reducer: counterSlice.reducer
});



export const counterActions = counterSlice.actions; //exporting our all actions
export default store;