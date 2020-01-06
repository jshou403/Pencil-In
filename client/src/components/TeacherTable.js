import React, { Component } from "react";
// import { BrowserRouter as Redirect } from "react-router-dom";
import axios from "axios";
import API from "../utils/API";
// import StudentList from "./StudentList"

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

//   componentDidMount() {
//     this.userInfo();
//   }

//   userInfo = () => {
//       API.getUsers()
//       .then(res => {
//           this.setState({ user: res.data.user})
//       })
//     // return axios.get("/user/");
//   }

  userInfo = () => {
  return axios.get("/user/");
}

  render() {
    return (
      <div className="card">
        <h1>Welcome {this.state.user.username}!</h1>
        {/* <h1>Ms.Frizzle's Class--teacher's ID from DB here</h1> */}
        <ul className="list-group-item m-2">{this.props.children}</ul>
        {/* <ul className="list-group-item m-2">{this.state.student}</ul> */}
      </div>
    );
  }
}

export default TeacherTable;

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
