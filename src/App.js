import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateTodo from './create-todo/create-todo-component';
import GetTodos from './get-todo/get-todo.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = { todos: [], searchField: '', todoTitle: '' };
  }

  componentDidMount() {
    fetch('http://localhost:4000/todos')
      .then((response) => response.json())
      .then((todos) => {
        this.setState({ todos: todos });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <CreateTodo placeHolder="Create a todo" />
        <GetTodos todos={this.state.todos} />
      </div>
    );
  }
}
export default App;
