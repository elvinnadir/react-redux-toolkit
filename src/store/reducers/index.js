import { authReducer } from "./authReducer/authRedce";
import { counterReducer } from "./counterReducer/index";
import { combineReducers } from "redux";

const reducers = combineReducers({
  authReducer,
  counterReducer,
});
export default reducers;
