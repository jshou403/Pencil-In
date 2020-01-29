import React, { Component } from "react";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import Modal from "react-awesome-modal";
import axios from "axios";

class Nav extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
    this.state = {
      redirect: false,
      user: {},
      visible: false
    };
  }

  componentDidMount() {
    this.userInfo().then(response =>
      this.setState({
        user: response.data.user
      })
    );
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  userInfo() {
    return axios.get("/user/");
  }

  logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios
      .get("/user/logout")
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
      <nav className="navbar navbar-expand-md navbar-dark bg-success">
        {this.renderRedirect()}
        <a className="navbar-brand text-dark" href="#">
          {this.state.user.username}
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
            <a
              className="nav-item nav-link active"
              href="#"
              onClick={() => this.openModal()}
            >
              My Profile<span className="sr-only">(Profile)</span>
            </a>

            <a
              className="nav-item nav-link active"
              href="#"
              onClick={() => this.openModal()}
            >
              Messages<span className="sr-only">(Messages)</span>
            </a>

            <Modal
              visible={this.state.visible}
              effect="fadeInDown"
              onClickAway={() => this.closeModal()}
            >
              <div className="card card-body">
                <p>Feature in progress. Check back again soon!</p>
                <a href="javascript:void(0);" onClick={() => this.closeModal()}>
                  OK
                </a>
              </div>
            </Modal>

            <Link className="nav-item nav-link" to="/" onClick={this.logout}>
              Log Out
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
