import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./pages/Home"

class App extends Component {
  render() {
    return (
      <Router>
        {/* <Home />
        <Route exact path="/" component={Home}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/" component={Home}/> */}
      </Router>
    );
  }
}

export default App;
