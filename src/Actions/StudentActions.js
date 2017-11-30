import * as types from './ActionTypes';
import StudentApi from '../Api/StudentsApi';


export function loadStudentsSuccess(students) {
  return { type: types.LOAD_STUDENTS_SUCCESS, students };
}

export function loadStudentSuccess(student) {
  return { type: types.LOAD_STUDENT_SUCCESS, student };
}

export function removeStudent() {
  return { type: types.REMOVE_STUDENT };
}

export function fetchStudents() {
  return(dispatch) => {
    return StudentApi.getAllStudents()
      .then(students => {
        dispatch(loadStudentsSuccess(students));
      }).catch(error => {
        throw(error);
      });
  };
}

export function fetchStudent(studentId) {
  return(dispatch) => {
    return StudentApi.getStudent(studentId)
      .then(student => {
        dispatch(loadStudentSuccess(student));
      }).catch(error => {
        throw(error);
      });
  };
}
