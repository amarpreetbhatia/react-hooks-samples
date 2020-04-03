import React, { useState, useEffect } from "react";

const Counter = props => {
  const [counterState, setCounterState] = useState(props.counter);
  useEffect(() => {
    document.title = counterState;
  });
  return (
    <div>
      <p>This is counter {counterState}</p>
      <button onClick={() => setCounterState(counterState + 1)}>+1</button>
      <button onClick={() => setCounterState(counterState + 1)}>-1</button>
      <button onClick={() => setCounterState(props.counter)}>Reset</button>
    </div>
  );
};

Counter.defaultProps = {
  counter: 0
};

export default Counter;
