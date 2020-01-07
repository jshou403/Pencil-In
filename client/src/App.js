import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Link,
  Redirect
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
      username: "",
      password: "",
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

  // redirectTeacher() {
  //   this.render(<Redirect to="/teacher" />);
  // }

  // redirectParent() {
  //   this.render(<Redirect to="/parent" />);
  // }

  getUser() {
    axios.get("/user/").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      console.log(response.data.user.teacher);

      if (response.data.user && response.data.user.teacher) {
        console.log("You are logged in as a TEACHER!");
        // this.redirectTeacher();
        // console.log("Get User: There is a user saved in the server session: ");
        console.log(response.data.user);
        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          password: response.data.user.password,
          id: response.data.user._id,
          userType: response.data.user.teacher
        });
      } else if (response.data.user && !response.data.user.teacher) {
        console.log("You are logged in as a PARENT!");
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  }

  // <Route path="/signin" render={()=> (<Redirect to='/search'/>)}/>

  render() {
    return (
      <div>
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