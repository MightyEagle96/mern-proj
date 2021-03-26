import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { todos: [], searchField: '' };
  }

  componentDidMount() {
    fetch('http://localhost:4000/todos')
      .then((response) => response.json())
      .then((todos) => {
        this.setState({ todos: todos });
      });
  }
  render() {
    return this.state.todos.map(({ title, _id }) => {
      return <p key={_id}>{title}</p>;
    });
  }
}
export default App;
