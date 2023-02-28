import React, { useState } from "react";
import "./index.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const handleDecrement = () => {
    if (count < 1) {
      setCount(0);
    } else {
      setCount((count) => count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };
  return (
    <>
      <div>
        <h1>Counter App</h1>
        <p className="counter">{count}</p>
        <div className="functions">
          <button className="add" onClick={handleIncrement}>
            Increment
          </button>
          <button className="sub" onClick={handleDecrement}>
            Decrement
          </button>
          <button className="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
