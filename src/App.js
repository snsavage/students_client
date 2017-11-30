import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

import './App.css';
import StudentsIndex from './Components/StudentsIndex.js';
import StudentShow from './Components/StudentShow';
import StudentForm from './Components/StudentForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Students App</h1>
        <nav>
          <ul>
            <li><NavLink to="/students">Students</NavLink></li>
            <li><NavLink to="/students/new">Create Student</NavLink></li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" componet={StudentsIndex} />
            <Route path="/students/new" component={StudentForm} />
            <Route path="/students/:studentId" component={StudentShow} />
            <Route path="/students" component={StudentsIndex} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
