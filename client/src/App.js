import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Link,
  // Redirect,
  // withRouter
} from "react-router-dom";
// import LogInPage from './pages/LogIn';
import "./utils/sketchy-bootswatch.css";
import LoginBox from "./components/LoginBox";
import ParentHome from "./pages/ParentHome";
import TeacherHome from "./pages/TeacherHome";
import NoMatch from "./pages/NoMatch";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
      password: null,
      id: null,
      userType: false
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }
  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }
  getUser() {
    axios.get("/user/").then(response => {
      console.log("Getting user...");

      if (response.data.user) {
        console.log("User already in session: " + response.data.user.username);
        // console.log(response.data.user.username);

        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          password: response.data.user.password,
          id: response.data.user._id,
          userType: response.data.user.teacher
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null
          // password: null,
          // id: null,
          // teacher: false
        });
      }
    });
  }

  render() {
    return (
      <div>
        {/* <p>Hello {this.state.username}!</p> */}
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={LoginBox} />
              <Route exact path="/parent" component={ParentHome} />
              <Route exact path="/teacher" component={TeacherHome} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;