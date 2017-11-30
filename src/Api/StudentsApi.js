import fetch from 'isomorphic-fetch';

export default class StudentApi {
  static getAllStudents() {
    const request = new Request(`/api/students`, {
      method: 'GET',
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}
