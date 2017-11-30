import * as types from './ActionTypes';
import StudentApi from '../Api/StudentsApi';

export function loadStudentsSuccess(students) {
  return { type: types.LOAD_STUDENTS_SUCCESS, students };
}

export function fetchStudents() {
  return(dispatch) => {
    return StudentApi.getAllStudents().then(students => {
      dispatch(loadStudentsSuccess(students));
    }).catch(error => {
      throw(error);
    });
  };
}
