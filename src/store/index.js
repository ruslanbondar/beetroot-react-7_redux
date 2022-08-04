import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './reducers/counter';
import todosReducer from './reducers/todos';
import authReducer from './reducers/auth';
import commentsReducer from './reducers/comments';

const store = configureStore({
  reducer: {
    counterReducer: counterReducer,
    todosReducer: todosReducer,
    authReducer: authReducer,
    commentsReducer: commentsReducer,
  },
});

export default store;
