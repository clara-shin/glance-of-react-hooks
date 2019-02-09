import React, {Component, useState} from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState (0); //useState() returns an array
  // useState which operates as an array gives two elements
  // first element is value, second element is setCount(it means how to change the value)
  // useState HOOKS under the management of state of react
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount (count + 1)}>Increment</button>
      <button onClick={() => setCount (count - 1)}>Decrement</button>
    </div>
  );
};

export default App;
