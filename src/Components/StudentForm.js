import React, { Component } from 'react';

export default class StudentForm extends Component {
  handleOnChange = (event) => {
    this.props.onChange(event);
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(event);
  }

  render() {
    const { firstName, lastName, email, age, grade } = this.props.student;
    const { submitText } = this.props;

    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <div>
            <label>First Name:&nbsp;
              <input
                name="firstName"
                type="text"
                value={firstName}
                onChange={(event) => this.handleOnChange(event)} />
            </label>
          </div>
          <div>
            <label>Last Name:&nbsp;
              <input
                name="lastName"
                type="text"
                value={lastName}
                onChange={(event) => this.handleOnChange(event)} />
            </label>
          </div>
          <div>
            <label>EMail:&nbsp;
              <input
                name="email"
                type="text"
                value={email}
                onChange={(event) => this.handleOnChange(event)} />
            </label>
          </div>
          <div>
            <label>Age:&nbsp;
              <input
                name="age"
                type="number"
                step="1"
                min="0"
                value={age}
                onChange={(event) => this.handleOnChange(event)} />
            </label>
          </div>
          <div>
            <label>Grade:&nbsp;
              <input
                name="grade"
                type="number"
                step="1"
                min="0"
                value={grade}
                onChange={(event) => this.handleOnChange(event)} />
            </label>
          </div>
          <div>
            <input type="submit" value={submitText} />
          </div>
        </form>
      </div>
    );
  }
}
