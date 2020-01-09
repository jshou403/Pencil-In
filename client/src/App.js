import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Link,
  // Redirect
  // withRouter
} from "react-router-dom";
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
      user: {},
      loggedIn: false,
      username: "",
      password: "",
      id: null,
      userType: null
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }
  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/user/").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      console.log(response.data.user.teacher);

      if (response.data.user && response.data.user.teacher) {
        console.log("You are logged in as a TEACHER!");
        console.log(response.data.user);
        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          password: response.data.user.password,
          id: response.data.user._id,
          userType: true
        });
      } else if (response.data.user && !response.data.user.teacher) {
        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          password: response.data.user.password,
          id: response.data.user._id,
          userType: false
        });
        console.log("You are logged in as a PARENT!");
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null, 
        });
      }
    });
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/"
              render={() => <LoginBox updateUser={this.updateUser} userType={this.state.userType}/>}/>
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