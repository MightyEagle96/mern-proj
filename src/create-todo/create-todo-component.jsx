import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './create-todo.styles.scss';

class CreateTodo extends React.Component {
  constructor(placeHolder, handleChange) {
    super();
    this.state = { fieldText: '' };
  }
  handleChange = (e) => {
    this.setState({ fieldText: e.target.value });
  };
  buttonAction = () => {
    const requestOption = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: this.state.fieldText }),
    };
    console.log(requestOption);
    fetch('http://localhost:4000/todos', requestOption)
      .then((response) => response.json())
      .then((reply) => console.log(reply));
  };
  comp;
  render() {
    const { placeHolder } = this.props;
    return (
      <div className="createTodo">
        <input
          type="text"
          name=""
          id=""
          className="form-control"
          placeholder={placeHolder}
          onChange={this.handleChange}
        />
        <CustomButton
          className={'btn btn-success'}
          text={'Create Todo'}
          clickEvent={this.buttonAction}
        />
      </div>
    );
  }
}
// export const CreateTodo = ({ placeHolder, handleChange }) => {
//
//
//
//
//
//
//
//
//
//
//   >
//
//
// };
export default CreateTodo;
