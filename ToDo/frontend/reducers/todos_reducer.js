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
      console.log(action);
      // let result = {};
      // action.todos.forEach((todo) => {
      //   result[todo.id] = todo;
      // });
      // return result;
      // This one line works now because rails backend returns data
      // in JSON format which returns data in the following format
      // 0: {id: 1, title: "get candy", body: "to buy sword", done: false, created_at: "2018-07-31T20:43:47.978Z", …}
      // 1: {id: 2, title: "Eat mushrooms", body: "to get bigger!", done: false, created_at: "2018-07-31T21:09:07.305Z", …}
      // 2: {id: 3, title: "Eat Fire flowers", body: "to shoot fire!", done: false, created_at: "2018-07-31T21:09:26.157Z", …}
      // 3: {id: 4, title: "Hide in cardboard box", body: "too get Liquid!", done: false, created_at: "2018-07-31T21:10:04.051Z", …}
      return action.todos;
    case RECEIVE_TODO:
      let newState = merge({}, state);
      newState[action.todo.id] = action.todo;
      return newState;
    default:
    return state;
  }
};


export default todosReducer;
