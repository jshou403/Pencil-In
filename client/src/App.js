import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogIn from './pages/LogIn';
import ParentHome from './pages/ParentHome';
import TeacherHome from './pages/TeacherHome';
import './utils/sketchy-bootswatch.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Route exact path="/" component={LogIn}/>
        <Route exact path="/parent" component={ParentHome}/>
        <Route exact path="/teacher" component={TeacherHome}/>
        </Router>
      </div>
    )
  }
}

export default App;
