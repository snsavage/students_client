import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import * as actions from '../Actions/StudentActions';
import StudentForm from './StudentForm';

class CreateStudent extends Component {
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
        <StudentForm
          student={this.state}
          submitText="Create Student"
          onSubmit={this.handleOnSubmit}
          onChange={this.handleOnChange} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch)};
}

export default connect(null, mapDispatchToProps)(CreateStudent);

