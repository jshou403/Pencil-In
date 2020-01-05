import React, { Component } from "react";
import {
  // BrowserRouter as Router,
  // Route,
  // Switch,
  // Link,
  Redirect,
  // withRouter
} from "react-router-dom";
import axios from "axios";

class LoginBox extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: "",
      password: "",
      id: "",
      redirectTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // updateUser(userObject) {
  //   this.setState(userObject);
  // }

  // taking in username and password to be checked
  handleChange(event) {
    this.setState({
      //HERE?
      [event.target.name]: event.target.value
    });
    console.log(this.state.username);
    console.log(this.state.password);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");

    axios
      .post("/user/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);

        if (response.status === 200) {

          console.log("response.status === " + response.status);
          
          // update App.js state

          //THIS FUNCTION WAS CAUSING AN ERROR SO I REMOVED PROPS AND IT SEEMS TO WORK?

          this.props.updateUser({
          // this.updateUser({
            loggedIn: true,
            username: response.data.username,
            password: response.data.password
          })
          // .then(console.log(this.state.loggedIn));
          // update the state to redirect to home
          this.setState({
            redirectTo: "/"
          })
          // .then(console.log(this.state.redirectTo));
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
          <button
            // location={props.location}
            onClick={this.handleSubmit}
            type="submit"
          >
            Log in
          </button>
        </div>
      );
    }
  }
}

export default LoginBox;