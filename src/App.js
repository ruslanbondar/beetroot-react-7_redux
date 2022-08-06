import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store/actions/counter';
import { addTodo, removeTodo } from 'store/actions/todos';
import { fetchComments } from 'api/requests/index';

import { Header } from 'components/Header/Header';
import { SliderComponent as MySliderComponent } from './components/SliderComponent/SliderComponent';

function App() {
  const [value, setValue] = useState('');

  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  const counter = useSelector((state) => state.counterReducer.counter);
  const todos = useSelector((state) => state.todosReducer.todos);

  const comments = useSelector((state) => state.commentsReducer.comments);
  const loading = useSelector((state) => state.commentsReducer.loading);

  const dispatch = useDispatch();

  const addTodoHandler = () => {
    dispatch(addTodo({ id: Date.now(), title: value }));

    setValue('');
  };

  // const str = 'Mark Twen -- Fiction';
  // const validStr = str.replace(' -- Fiction', '');
  // console.log(validStr);

  // console.log(process.env.REACT_APP_SECRET_KEY);
  // console.log(process.env.REACT_APP_LOGIN);

  return (
    <div>
      <Header />

      <div className="app-wrapper">
        <div>
          <span>{counter}</span>
          <br />
          <button onClick={() => dispatch(decrement())}>decrement</button>
          <button onClick={() => dispatch(increment())}>increment</button>
        </div>

        {/* {loading ? (
        <div className="lds-dual-ring"></div>
      ) : (
        <div>
          {comments.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      )} */}

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
            <button onClick={() => dispatch(removeTodo(item.id))}>
              Remove
            </button>
          </div>
        ))}

        {/* <MySliderComponent /> */}
      </div>
    </div>
  );
}

export default App;
