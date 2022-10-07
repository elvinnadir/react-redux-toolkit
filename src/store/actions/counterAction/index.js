import * as actions from "../types/index";
export const increment = () => ({
  type: actions.INCREMENT,
});

export const incrementByValue = (value) => ({
  type: actions.INCREMENT_VALUE,
  payload: value,
});

export const decrement = () => ({
  type: actions.DECREMENT,
});

export const decrementByValue = (value) => ({
  type: actions.DECREMENT_VALUE,
  payload: value,
});

export const clearAll = () => ({
  type: actions.CLEAR_ALL,
});
