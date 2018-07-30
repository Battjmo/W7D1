import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = ({todos, receiveTodo}) => {
  const todoItems = todos.map((todo, idx) => (
    <TodoListItem todo={todo} key={idx}/>
  ))
  return (
    <ul>
      { todoItems }
    </ul>
  );
}

export default TodoList;
