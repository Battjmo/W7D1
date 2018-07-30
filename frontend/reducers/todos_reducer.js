import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_TODOS:
      let result = {};
      action.todos.forEach((todo) => {
        result[todo.id] = todo;
      });
      return result;
    case RECEIVE_TODO:
      let newState = merge({}, state);
      newState[action.todo.id] = action.todo;
      return newState;
    default:
    return state;
  }
};


export default todosReducer;
