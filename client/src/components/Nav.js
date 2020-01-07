import React, { Component } from "react";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import axios from "axios";

class Nav extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
    this.state = {
      redirect: false,
      user: {}
    };
  }

  componentDidMount() {
    this.userInfo().then(response =>
      this.setState(
        {
          user: response.data.user
        },
        () => this.tester()
      )
    );
  }

  tester() {
    console.log(this.state.user);
  }

  userInfo() {
    return axios.get("/user/");
  }

  logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("/user/logout")
      .then(response => {
        console.log(response.data);
        this.setState({ redirect: true });
      })
      .catch(error => {
        console.log("Logout error");
      });
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand text-warning" href="#">
          {/* *UserNameHere* */}
          Current user: {this.state.user.username}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              Current Link<span className="sr-only">(current)</span>
            </a>
            {/* <a className="nav-item nav-link" href="/parent"> */}
            <Link className="nav-item nav-link" to="/parent">
              Parent Home
            </Link>
            {/* </a> */}
            <a className="nav-item nav-link" href="/teacher">
              Teacher Home
            </a>
            <a className="nav-item nav-link" href="/logout">
              Log Out
            </a>
            {/* <a className="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
