import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store/actions/counter';
import { addTodo, removeTodo } from './store/actions/todos';

// import SliderComponent from './components/SliderComponent';

function App() {
  const [value, setValue] = useState('');

  const counter = useSelector((state) => state.counterReducer.counter);
  const todos = useSelector((state) => state.todosReducer.todos);

  const dispatch = useDispatch();

  const addTodoHandler = () => {
    dispatch(addTodo({ id: Date.now(), title: value }));

    setValue('');
  };

  return (
    <div>
      {/* <span>{counter}</span>
      <br />
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(increment())}>increment</button> */}

      <br />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addTodoHandler}>Add Todo</button>

      {todos.map((item) => (
        <div key={item.id}>
          <span>{item.title}</span>
          <button onClick={() => dispatch(removeTodo(item.id))}>Remove</button>
        </div>
      ))}

      {/* <SliderComponent /> */}
    </div>
  );
}

export default App;
