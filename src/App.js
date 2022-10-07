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
      <button>Remove</button>
      <button>Add Value</button>
      <button>Remove Value</button>
      <button>Clear All</button>

      <p>{data.count}</p>
    </div>
  );
}

export default App;
