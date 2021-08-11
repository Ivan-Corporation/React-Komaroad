import React, { useEffect, useState, useCallback } from "react";
import Child from "./UseCallback/Child";
import "../App.css";

export default function UseCallback() {
  const [counter, setCounter] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const updateOne = () => {
    console.log(
      "Я не мемоизирован"
    );
  };

  const updateTwo = useCallback(() => {
    console.log(
      "Я мемоизирован!"
   );
  }, [counter]);

  return (
    <div className="App-header">
      <button onClick={() => setCounter(counter + 1)}>One</button>
      <br />
        <button onClick={() => setCounterTwo(counterTwo + 1)}>
        Two
      </button>
      <Child updateOne ={updateOne} updateTwo ={updateTwo} />
    </div>
  );
}

