import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

// import LoginBox from "./components/LoginBox";
// import LogIn from "./pages/LogIn";
// import ParentHome from "./pages/ParentHome";
// import TeacherHome from "./pages/TeacherHome";

import LoginBox from "../components/LoginBox";
import ParentHome from "./ParentHome";
import TeacherHome from "./TeacherHome";

// temp auth
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100); // fake async
  }
};

// Checks if the user is authenticated, if they are,
// it renders the "component" prop. If not, it redirects
// the user to /login.
const ParentRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const TeacherRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const AuthButton = withRouter(({ history }) =>
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
);

class LogInPage extends Component {
  state = {
    from: "",
    redirectToReferrer: false,
    username: "",
    password: ""
  };

  // login method which calls fakeAuth.authenticate
  login = event => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
          from: event.target,
        redirectToReferrer: true
      }));
    });
  };

  handleInputChange = event => {
    // Destructure the value property of event.target, update the appropriate state
    const { value } = event.target;
    this.setState({
      username: value,
      password: value
    });
    console.log(this.state.username);
    console.log(this.state.password);
  };

  render = () => {
    const { from } = this.location || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <LoginBox location={this.location} onChange={this.handleInputChange} onClick={this.login} />
        <Router>
          <div>
            <AuthButton />
            <ul>
              <li>
                <Link to="/login">Public</Link>
              </li>
              <li>
                <Link to="/parent">Parent</Link>
              </li>
              <li>
                <Link to="/teacher">Teacher</Link>
              </li>
            </ul>
            <Route path="/login" component={LogInPage} />
            <ParentRoute path="/parent" component={ParentHome} />
            <TeacherRoute path="/teacher" component={TeacherHome} />
          </div>
        </Router>
        {/* <LoginBox 
          onChange={this.handleInputChange}
          onClick={this.login}/> */}
        {/* <p>You must log in to view the page</p>
          <button onClick={this.login}>Log in</button> */}
      </div>
    );
  }
}

export default LogInPage;
