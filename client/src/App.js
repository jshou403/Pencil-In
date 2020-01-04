import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  // Switch,
  // Link,
  // Redirect,
  // withRouter
} from "react-router-dom";
// import LogInPage from './pages/LogIn';
import "./utils/sketchy-bootswatch.css";
import LoginBox from "./components/LoginBox";
import ParentHome from "./pages/ParentHome";
import TeacherHome from "./pages/TeacherHome";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
      password: null,
      id: null,
      userType: false
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }
  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }
  getUser() {
    axios.get("/user/").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        console.log(response.data.user);

        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          password: response.data.user.password,
          id: response.data.user._id,
          userType: response.data.user.teacher
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null
          // password: null,
          // id: null,
          // teacher: false
        });
      }
    });
  }

  render() {
    return (
      <div>
        {/* <p>Hello {this.state.username}!</p> */}
        <Router>
          <div>
            <Route exact path="/" component={LoginBox} />
            <Route exact path="/parent" component={ParentHome} />
            <Route exact path="/teacher" component={TeacherHome} />
          </div>
        </Router>
      </div>
      // <LoginBox
      // onChange={this.handleInputChange}
      // onClick={this.login}/>

      // <Router>
      //   <div>
      //     <AuthButton />
      //     <Route path="/login" component={LogIn} />
      //     <ParentRoute path="/parent" component={ParentHome} />
      //     <TeacherRoute path="/teacher" component={TeacherHome} />
      //   </div>
      // </Router>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Router>
//         <Route exact path="/" component={LoginBox}/>
//         <Route exact path="/parent" component={ParentHome}/>
//         <Route exact path="/teacher" component={TeacherHome}/>
//         </Router>
//       </div>
//     )
//   }
// }

export default App;

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Router>
//         <Route exact path="/" component={LogIn}/>
//         <Route exact path="/parent" component={ParentHome}/>
//         <Route exact path="/teacher" component={TeacherHome}/>
//         </Router>
//       </div>
//     )
//   }
// }

// // temp auth
// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100); // fake async
//   }
// };

//
// class LogIn extends Component {
//   state = {
//     redirectToReferrer: false,
//     username: "",
//     password: ""

//   };

//   // login method which calls fakeAuth.authenticate
//   login = () => {
//     fakeAuth.authenticate(() => {
//       this.setState(() => ({
//         redirectToReferrer: true
//       }));
//     });
//   };

//   handleInputChange = event => {
//     // Destructure the value property of event.target, update the appropriate state
//     const { value } = event.target;
//     this.setState({
//       username: value,
//       password: value

//     });
//     console.log(this.state.username);
//     console.log(this.state.password);
//   };

//   // handleFormSubmit = event => {
//   //   // When the form is submitted, get books and update the books state
//   //   event.preventDefault();
//   //   axios
//   //     .get(
//   //       `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchQuery}`
//   //     )
//   //     .then(res => this.setState({ books: res.data.items }))
//   //     .then(() => console.log(this.state.books));
//   //   // .catch(err => console.log(err));
//   // };

// render() {
//   const { from } = this.props.location.state || { from: { pathname: "/" } };
//   const { redirectToReferrer } = this.state;

//   if (redirectToReferrer === true) {
//     return <Redirect to={from} />;
//   }

//   return (
//     <div>
//       <LoginBox
//       onChange={this.handleInputChange}
//       onClick={this.login}/>
//       {/* <p>You must log in to view the page</p>
//       <button onClick={this.login}>Log in</button> */}
//     </div>
//   );
// }
// }

// // Checks if the user is authenticated, if they are,
// // it renders the "component" prop. If not, it redirects
// // the user to /login.
// const ParentRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       fakeAuth.isAuthenticated === true ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: "/login",
//             state: { from: props.location }
//           }}
//         />
//       )
//     }
//   />
// );

// const TeacherRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       fakeAuth.isAuthenticated === true ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: "/login",
//             state: { from: props.location }
//           }}
//         />
//       )
//     }
//   />
// );

// const AuthButton = withRouter(({ history }) =>
//   fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome!{" "}
//       <button
//         onClick={() => {
//           fakeAuth.signout(() => history.push("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   )
// );
