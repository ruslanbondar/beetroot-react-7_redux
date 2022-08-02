import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './reducers/counter';
import todosReducer from './reducers/todos';

const store = configureStore({
  reducer: {
    counterReducer: counterReducer,
    todosReducer: todosReducer,
  },
});

export default store;
