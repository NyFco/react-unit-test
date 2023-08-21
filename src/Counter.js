import { useState } from "react";

const Counter = ({ initialValue }) => {
  const [count, setCounter] = useState(initialValue);

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);
  const restart = () => setCounter(0);

  return (
    <div id="counter">
      <h1>
        Count: <h2 data-testid="count">{count}</h2>
      </h1>
      <span>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={restart}>Restart</button>
      </span>
    </div>
  );
};
export default Counter;
