import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store/actions/counter';
import { addTodo, removeTodo } from 'store/actions/todos';
import { logIn } from 'store/reducers/auth';
import { fetchComments } from 'api/requests/index';

// import SliderComponent from './components/SliderComponent';

function App() {
  const [value, setValue] = useState('');

  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  const counter = useSelector((state) => state.counterReducer.counter);
  const todos = useSelector((state) => state.todosReducer.todos);
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const comments = useSelector((state) => state.commentsReducer.comments);
  const loading = useSelector((state) => state.commentsReducer.loading);

  // console.log(isLoggedIn);

  const dispatch = useDispatch();

  const addTodoHandler = () => {
    dispatch(addTodo({ id: Date.now(), title: value }));

    setValue('');
  };

  // console.log(process.env.REACT_APP_SECRET_KEY);
  // console.log(process.env.REACT_APP_LOGIN);

  return (
    <div>
      <div>
        <span>{counter}</span>
        <br />
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(increment())}>increment</button>
      </div>

      <div style={{ marginTop: '100px', marginBottom: '100px' }}>
        <button onClick={() => dispatch(logIn())}>Log In</button>
        {isLoggedIn ? (
          <span>User is logged in</span>
        ) : (
          <span>User is NOT logged in</span>
        )}
      </div>

      {loading ? (
        <div className="lds-dual-ring"></div>
      ) : (
        <div>
          {comments.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      )}

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
