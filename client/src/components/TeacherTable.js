import React, { Component } from "react";
// import { BrowserRouter as Redirect } from "react-router-dom";
import axios from "axios";

// import StudentList from "./StudentList"

// function TeacherTable(props) {
//     return (
//         <div className="card">
//             <h1>Ms.Frizzle's Class--teacher's ID from DB here</h1>
//                 <ul className="list-group-item m-2">
//                     {props.children}
//                 </ul>
//         </div>
//     )
// }

class TeacherTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      user: {},
      student: {}
    };
  }

  componentDidMount() {
    this.userInfo().then(response =>
      this.setState(
        {
          user: response.data.user,
          student: response.data.student
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

  render() {
    return (
      <div className="card">
        <h1>{this.state.user.username}</h1>
        {/* <h1>Ms.Frizzle's Class--teacher's ID from DB here</h1> */}
        {/* <ul className="list-group-item m-2">{props.children}</ul> */}
        <ul className="list-group-item m-2">{this.state.student}</ul>
      </div>
    );
  }
}

export default TeacherTable;
