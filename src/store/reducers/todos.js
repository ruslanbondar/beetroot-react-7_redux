import { ADD_TODO, REMOVE_TODO } from '../actions/todos';

const data = [
  { id: 1, title: 'drink' },
  { id: 2, title: 'eat' },
];

const initialState = {
  todos: data,
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default todosReducer;
