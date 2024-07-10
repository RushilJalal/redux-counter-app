import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Redux Counter</h1>
      <span className="count">{count}</span>
      <div className="buttons">
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  );
}

export default App;
