import { increment, decrement, incrementByAmount } from "../slice/CounterSlice";
import { useDispatch } from "react-redux";

export default function CounterActions() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementByAmount(4))}>
        incrementByAmount
      </button>
    </div>
  );
}
