import React from 'react';

const GetTodos = (props) => {
  const { todos } = props;

  return todos.map(({ _id, title }) => <p key={_id}>{title}</p>);
};

export default GetTodos;
