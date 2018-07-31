import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger
    this.props.fetchTodos();
  }

  render() {
    const todoItems = this.props.todos.map((todo, idx) => (
      <TodoListItem todo={todo} key={idx}/>
    ));
    return (
      <ul>
        { todoItems }
        <TodoForm receiveTodo={receiveTodo}/>
      </ul>
    );
  }
}

export default TodoList;
