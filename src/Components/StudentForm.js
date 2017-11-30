import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import * as actions from '../Actions/StudentActions';

class StudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      age: 0,
      grade: 0,
    }
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.actions.createStudent(this.state)
      .then((id) => this.props.history.push(`/students/${id}`));
  }

  render() {
    return (
      <div>
        <h1>Create Student</h1>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <div>
            <label>First Name:&nbsp;
              <input
                name="firstName"
                type="text"
                value={this.state.firstName}
                onChange={(event) => this.handleOnChange(event)} />
            </label>
          </div>
          <div>
            <label>Last Name:&nbsp;
              <input
                name="lastName"
                type="text"
                value={this.state.lastName}
                onChange={(event) => this.handleOnChange(event)} />
            </label>
          </div>
          <div>
            <label>EMail:&nbsp;
              <input
                name="email"
                type="text"
                value={this.state.email}
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
                value={this.state.age}
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
                value={this.state.grade}
                onChange={(event) => this.handleOnChange(event)} />
            </label>
          </div>
          <div>
            <input type="submit" value="Create Student" />
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch)};
}

export default connect(null, mapDispatchToProps)(StudentForm);

