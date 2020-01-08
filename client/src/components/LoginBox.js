import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect
  // Route,
  // Switch,
  // Link,
  // withRouter
} from "react-router-dom";
import axios from "axios";

class LoginBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      username: "",
      password: "",
      id: "",
      userType: "",
      redirectTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.setState({ redirectTo: null });
  }
  updateUser(userObject) {
    this.setState(userObject);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    // console.log(this.state.username);
    // console.log(this.state.password);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");

    axios
      .post("/user/login", {
        username: this.state.username,
        password: this.state.password
        // userType: this.state.teacher
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          this.setState({
            userType: response.data.userType
          });

          // update App.js state
          console.log("working");
          console.log("This is the props userType: " + this.state.userType);
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username,
            password: response.data.password,
            userType: response.data.userType
          });

          if (this.state.userType === true) {
            this.setState({
              redirectTo: "/teacher"
            });
          } else {
            this.setState({
              redirectTo: "/parent"
            });
          }
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div>
          <p>Please log in to continue</p>
          <div className="form-group">
            <label className="form-label" htmlFor="username">
              Username
            </label>
            <input
              className="form-input"
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="Username"
            />
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-input"
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
            />
          </div>
          <button onClick={this.handleSubmit} type="submit">
            Log in
          </button>
        </div>
      );
    }
  }
}

export default LoginBox;
