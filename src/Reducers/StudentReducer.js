import * as types from '../Actions/ActionTypes';
import initialState from './InitialState';

export default function StudentReducer(state = initialState.students, action) {
  switch(action.type) {
    case types.LOAD_STUDENTS_SUCCESS:
      const studentIds = action.students.map(student => student.id);
      const studentsById = {};

      action.students.forEach((student) => {
        studentsById[student.id] = student;
      });

      return Object.assign({}, state, {
        studentsById: studentsById,
        studentIds: [...studentIds],
      });

    case types.LOAD_STUDENT_SUCCESS:
      return Object.assign({}, state, { student: action.student });

    case types.REMOVE_STUDENT:
      return Object.assign({}, state, { student: {} });

    case types.CREATE_STUDENT_SUCCESS:
      return Object.assign({}, state, { student: action.student });

    default:
      return state;
  }
}
