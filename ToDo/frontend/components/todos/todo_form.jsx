import React from 'react';
import uniqueId from '../../util/util';


class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: uniqueId(),
      title: "",
      body: "",
      done: false
    };
    this.changeTitle = this.changeTitle.bind(this);
    this.changeBody = this.changeBody.bind(this);
    this.createToDo = this.createToDo.bind(this);
  }

  changeTitle(event) {
    event.preventDefault();
    this.setState({ title: event.target.value });
  }

  changeBody(event) {
    event.preventDefault();
    this.setState({ body: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // this.props.receiveTodo({ title: this.state.title, body: this.state.body });
    // this.setState({title: "", body: ""});
    this.props.createTodo({todo}).then(
      () => this.setState({title: '', body: ''})
    );
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.title} onChange={this.changeTitle}></input>
        <input type="text" value={this.state.body} onChange={this.changeBody}></input>
        <button onClick={this.handleSubmit}>Submit To-Do!</button>
      </div>
    );
  }
}

export default TodoForm;
