import { useState } from "react";

function Counter(props) {
  const { initialCount, number } = props;
  const [ count, setCount ] = useState(initialCount);

  function incrementHandler() {
    const newIncrement = count + number;
    setCount(newIncrement);
    console.log(newIncrement);
  }
  function decrementHandler() {
    const newDecrement = count - number;
    setCount(newDecrement);
    console.log(newDecrement);
  }

  return (
    <div className="container">
      <button onClick={decrementHandler}> - </button>
      <span>{count}</span>
      <button onClick={incrementHandler}> + </button>
    </div>
  )
}


export default Counter;