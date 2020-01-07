import React, { Component } from "react";
// import { BrowserRouter as Redirect } from "react-router-dom";
import axios from "axios";

class TeacherTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      user: "",
      student: ""
    };
  }

  componentDidMount() {
    this.userInfo().then(response =>
      this.setState({
        user: response.data.user,
        student: response.data.student
      })
    );
  }

  userInfo = () => {
  return axios.get("/user/");
}

  render() {
    return (
      <div className="card">
        <h1>{this.state.user.firstname} {this.state.user.lastname}'s Classroom</h1>
        {/* <h1>Ms.Frizzle's Class--teacher's ID from DB here</h1> */}
        <ul className="list-group-item m-2">{this.props.children}</ul>
        {/* <ul className="list-group-item m-2">{this.state.student}</ul> */}
      </div>
    );
  }
}

export default TeacherTable;
