import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import * as actions from '../Actions/StudentActions';

class StudentShow extends Component {
  componentWillMount() {
    this.props.actions.fetchStudent(this.props.studentId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.student.id === undefined) {
      this.props.history.push("/students");
    }
  }

  componentWillUnmount() {
    this.props.actions.removeStudent();
  }

  handleDeleteOnClick = (event) => {
    event.preventDefault();
    if (window.confirm("Are you sure?")) {
      this.props.actions.deleteStudent(this.props.student.id);
      this.props.history.push("/students");
    }
  }

  render() {
    if (this.props.student === undefined ||
      this.props.student.id === undefined) {
      return <div>
        <p><strong>Loading...</strong></p>
      </div>
    } else {
      const { id, firstName, lastName, email, age, grade } = this.props.student;

      return <div>
        <h3>{`${firstName} ${lastName}`}</h3>
        <ul>
          <li>EMail: {email}</li>
          <li>Age: {age}</li>
          <li>Grade: {grade}</li>
        </ul>
        <h4>Manage Student</h4>
        <Link to={`/students/${id}/edit`}>
          <button>
            Edit Student
          </button>
        </Link>
        <button
          onClick={(event) => this.handleDeleteOnClick(event)}>
          Delete Student
        </button>
      </div>
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StudentShow)
);
