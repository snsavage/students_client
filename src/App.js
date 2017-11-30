import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

import './App.css';
import StudentsIndex from './Components/StudentsIndex.js';
import StudentShow from './Components/StudentShow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Students App</h1>
        <nav>
          <NavLink to="/students">Students</NavLink>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" componet={StudentsIndex} />
            <Route path="/students/:studentId" component={StudentShow} />
            <Route path="/students" component={StudentsIndex} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
