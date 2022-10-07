import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count + 1;
    },
    decrement: (state) => {
      state.count - 1;
    },
    increment_value: (state, action) => {
      state.count += action.payload;
    },
    decrement_value: (state, action) => {
      state.count -= action.payload;
    },
    clear_all: (state) => {
      state.count = 0;
    },
  },
});
///ACTIONS//

export const {
  increment,
  increment_value,
  decrement,
  decrement_value,
  clear_all,
} = counterSlice.actions;

export default counterSlice.reducer;
