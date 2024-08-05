import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const [incrementBy, setIncrementBy] = useState(1);

  function Increment() {
    setCount(count + incrementBy);
  }
  function Decrement() {
    setCount(count - incrementBy);
  }

  function increaseIncrement() {
    setIncrementBy(incrementBy + 1);
  }

  function decreaseIncrement() {
    setIncrementBy(incrementBy - 1);
  }

  return (
    <div>
      <h1>Count Value is: {count}</h1>
      <button onClick={Increment}> Increment</button>
      <button onClick={Decrement}> Decrement</button>

      <h1>We are incrementing value by :{incrementBy}</h1>
      <button onClick={increaseIncrement}> Increase increment</button>
      <button onClick={decreaseIncrement}> Decrease Decrement</button>
    </div>
  );
}
