import React from 'react';

const TodoListItem = ({ todo, idx }) => {
  return <li>{todo.title}</li>;
}

export default TodoListItem;
