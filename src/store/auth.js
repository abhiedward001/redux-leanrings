import { createSlice } from '@reduxjs/toolkit'

/**
 * initial value of auth slice
 */
const authInitialState = {
  authStatus: false
}



/**
 * Creating an auth slice
 */

const authSlice = createSlice({
  name: 'Auth',
  initialState: authInitialState,
  reducers: {
    login(state) {
      state.authStatus = true;
    },
    logout(state) {
      state.authStatus = false;
    }
  }
});

export const authActions = authSlice.actions;//exporting our all auth actions
export default authSlice.reducer;