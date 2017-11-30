import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../Actions/StudentActions';

class StudentShow extends Component {
  componentWillMount() {
    const { studentId, history } = this.props;
    this.props.actions.fetchStudent(studentId, history);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.student.id === undefined) {
      this.props.history.push("/students");
    }
  }

  componentWillUnmount() {
    this.props.actions.removeStudent();
  }

  render() {
    if (this.props.student === undefined ||
      this.props.student.id === undefined) {
      return <div>
        <p><strong>Loading...</strong></p>
      </div>
    } else {
      const { firstName, lastName, email, age, grade } = this.props.student;

      return <div>
        <h1>{`${firstName} ${lastName}`}</h1>
        <ul>
          <li>EMail: {email}</li>
          <li>Age: {age}</li>
          <li>Grade: {grade}</li>
        </ul>
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
