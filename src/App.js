import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByValue,
  decrementByValue,
  clearAll,
} from "./store/actions/counterAction/index";
function App() {
  const data = useSelector((state) => state.dataerReducer);
  const dispatch = useDispatch();
  console.log({ data });

  const onClickHandle = () => {
    dispatch(increment());
  };
  return (
    <div className="App">
      <button onClick={onClickHandle}>Add</button>
      <button onClick={() => dispatch(decrement())}>Remove</button>
      <button onClick={() => dispatch(incrementByValue(6))}>Add Value</button>
      <button onClick={() => dispatch(decrementByValue(4))}>Remove Value</button>
      <button onClick={() => dispatch(clearAll())}>Clear All</button>
      <p>{data.count}</p>
    </div>
  );
}

export default App;
