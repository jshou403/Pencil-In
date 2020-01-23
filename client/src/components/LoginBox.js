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
// import Footer from "./Footer";

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
        alert("Incorrect username or password.  Please try again.");
        console.log("login error: ");
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (


        <div className="mt-3">

          <div className="row">

            <div className="col"></div>

            <div className="col-8">
              <div className="jumbotron">

                <div className="row">

                  <div className="col-4">
                    <img className="img-fluid" src={require("../utils/images/square-logo-text.png")} />
                  </div>

                  <div className="col-8">
                    <div>
                      <h1 className="display-3">Walkerville Elementary School</h1>

                      <h3>Student Attendance Tracker</h3>

                      <p className="lead">Please log in to continue.</p>
                    </div>
                  </div>

                </div>

                <hr className="my-4" />

                <div className="row">

                  {/* input fields go here */}
                  {/* <p>It uses utility class for typography and spacing to space content out within the larger container.</p> */}

                  <div className="col"></div>

                  <div className="col-sm-10">
                    {/* <p className="lead"> */}

                    {/* log in button goes here */}

                    <form>

                      <div className="form-group">

                        <label className="form-label" htmlFor="username">
                          Username
                  </label>
                        <input
                          className="form-control"
                          type="text"
                          id="username"
                          name="username"
                          value={this.state.username}
                          onChange={this.handleChange}
                          placeholder="Username"
                        />
                      </div>

                      <div className="form-group">

                        <label className="form-label" htmlFor="password">
                          Password
                  </label>
                        <input
                          className="form-control"
                          type="password"
                          id="password"
                          name="password"
                          value={this.state.password}
                          onChange={this.handleChange}
                          placeholder="Password"
                        />

                      </div>

                      <button onClick={this.handleSubmit} type="submit" className="btn btn-warning">
                        Log in
                  </button>

                    </form>
                    {/* </p> */}
                  </div>

                  <div className="col"></div>

                </div>

              </div>

            </div>

            <div className="col"></div>

          </div>

          {/* <Footer /> */}

        </div>

        // <div>
        //   <p>Please log in to continue</p>

        // <div className="form-group">
        //   <label className="form-label" htmlFor="username">
        //     Username
        //     </label>
        //   <input
        //     className="form-input"
        //     type="text"
        //     id="username"
        //     name="username"
        //     value={this.state.username}
        //     onChange={this.handleChange}
        //     placeholder="Username"
        //   />
        //   <label className="form-label" htmlFor="password">
        //     Password
        //     </label>
        //   <input
        //     className="form-input"
        //     type="password"
        //     id="password"
        //     name="password"
        //     value={this.state.password}
        //     onChange={this.handleChange}
        //     placeholder="Password"
        //   />
        // </div>

        // <button onClick={this.handleSubmit} type="submit">
        //   Log in
        //   </button>

        // </div>
      );
    }
  }
}

export default LoginBox;
