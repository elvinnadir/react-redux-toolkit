import * as actionType from "../../actions/types";

export const authReducer = (state = false, action) => {
  switch (action.type) {
    case actionType.LOG_IN:
      return {
        ...state,
        state: true,
      };
    case actionType.LOG_OUT:
      return {
        ...state,
        state: false,
      };
    default:
      return state;
  }
};
