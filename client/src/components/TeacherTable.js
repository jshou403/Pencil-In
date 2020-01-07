import React, { Component } from "react";
import axios from "axios";
import API from "../utils/API";


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
          <h1>{this.state.user.firstname} {this.state.user.lastname}'s Classroom</h1>
          <div>{this.props.children} </div>    
        </div>
    );
  }
}

export default TeacherTable;

