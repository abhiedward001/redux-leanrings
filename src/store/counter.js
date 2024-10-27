import { createSlice } from '@reduxjs/toolkit'



/**
 * @description initial value of the counter slice
 */
const initialState = {
  counter: 0,
  showToggle: true

}


/**
 * creating counter slice 
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

export const counterActions = counterSlice.actions; //exporting our all actions
export default counterSlice.reducer;