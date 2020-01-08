import React, { Component } from "react";
import axios from "axios";
import API from "../utils/API";
import { SingleCalendar } from "colored-calendar";

class Table extends Component {
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
        <div>
          <div className="card card border-success mb-3 p-3 mt-4">
          <div class="card-header p-2 text-center"><h1 className="px-md-5">Welcome, {this.state.user.firstname} {this.state.user.lastname}<SingleCalendar /></h1></div>
          {this.props.children} 
        </div>
        </div>
    );
  }
}

export default Table;
