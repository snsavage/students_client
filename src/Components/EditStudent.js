import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import * as actions from '../Actions/StudentActions';
import StudentForm from './StudentForm';

class EditStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    this.props.actions.fetchStudent(this.props.studentId);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.student);
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.actions.editStudent(this.state)
      .then((id) => this.props.history.push(`/students/${id}`));
  }

  render() {
    if (this.state.id === undefined) {
      return <div>
        <p><strong>Loading...</strong></p>
      </div>
    } else {
      return (
        <div>
          <h1>Edit Student</h1>
          <StudentForm
            student={this.state}
            submitText="Edit Student"
            onSubmit={this.handleOnSubmit}
            onChange={this.handleOnChange} />
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    student: state.students.student,
    studentId: ownProps.match.params.studentId,
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);

