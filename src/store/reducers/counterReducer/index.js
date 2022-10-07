import * as actions from "../../actions/types";
const initialState = {
  count: 0,
};
export const counterReducer = (state, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return {
        ...state,
        state: state.count + 1,
      };
      case actions.INCREMENT_VALUE:
      return {
        ...state,
        state: state.count + action.payload,
      };
    case actions.DECREMENT:
      return {
        ...state,
        state: state.count - 1,
      };
      case actions.DECREMENT_VALUE:
      return {
        ...state,
        state: state.count - action.payload,
      };
    case actions.CLEAR_ALL:
      return {
        ...state,
        state: (state.count = 0),
      };
    default:
      return state;
  }
};
