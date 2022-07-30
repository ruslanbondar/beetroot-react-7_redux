import React from 'react';
import { useSelector } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counterReducer.counter);

  return <div>{counter}</div>;
}

export default App;
