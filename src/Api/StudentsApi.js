import fetch from 'isomorphic-fetch';

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }

  return response;
}

export default class StudentApi {
  static getAllStudents() {
    const request = new Request(`/api/students`, {
      method: 'GET',
    });

    return fetch(request)
      .then(handleErrors)
      .then(response => { return response.json(); })
      .catch(error => { return error; });
  }

  static getStudent(studentId) {
    const request = new Request(`/api/students/${studentId}`, {
      method: 'GET',
    });

    return fetch(request)
      .then(handleErrors)
      .then(response => { return response.json(); })
      .catch((error) => {
        return error;
      });
  }
}

