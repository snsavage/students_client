import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../Actions/StudentActions';

class StudentsIndex extends Component {
  componentWillMount() {
    this.props.actions.fetchStudents();
  }

  render() {
    const { studentIds, studentsById } = this.props.students;

    const studentsList = studentIds.map((id) => {
      const { firstName, lastName } = studentsById[id];

      return <li key={id}>
        { `${firstName} ${lastName}` } - <Link to={`/students/${id}`}>View</Link>
      </li>
    });

    return (
      <div>
        <h2>Students</h2>
        <ul>{ studentsList }</ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { students: state.students, }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsIndex)
