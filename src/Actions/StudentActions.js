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

export function createStudentSuccess() {
  return { type: types.CREATE_STUDENT_SUCCESS };
}

export function editStudentSuccess() {
  return { type: types.EDIT_STUDENT_SUCCESS };
}

export function deleteStudentSuccess() {
  return { type: types.DELETE_STUDENT_SUCCESS };
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

export function createStudent(student) {
  return(dispatch) => {
    return StudentApi.createStudent(student)
      .then(student => {
        dispatch(createStudentSuccess(student));
        return student.id;
      }).catch(error => {
        throw(error);
      });
  };
}

export function editStudent(student) {
  return(dispatch) => {
    return StudentApi.editStudent(student)
      .then(student => {
        dispatch(editStudentSuccess(student));
        return student.id;
      }).catch(error => {
        throw(error);
      });
  };
}

export function deleteStudent(studentId) {
  return(dispatch) => {
    return StudentApi.deleteStudent(studentId)
      .then(student => {
        dispatch(deleteStudentSuccess);
        return student.id;
      }).catch(error => {
        throw(error);
      });
  };
}
