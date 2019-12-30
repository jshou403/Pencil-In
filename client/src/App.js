import React, { Component } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Link,
//   Redirect,
//   withRouter
// } from "react-router-dom";
import LogInPage from './pages/LogIn';
// import ParentHome from "./pages/ParentHome";
// import TeacherHome from "./pages/TeacherHome";
import "./utils/sketchy-bootswatch.css";

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

// temp pages to display
// const PublicPage = () => <h3>This is the Public Page</h3>
// const ParentPage = () => <h3>This is the Parent Page</h3>

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

//   render() {
//     const { from } = this.props.location.state || { from: { pathname: "/" } };
//     const { redirectToReferrer } = this.state;

//     if (redirectToReferrer === true) {
//       return <Redirect to={from} />;
//     }

//     return (
//       <div>
//         <LoginBox 
//         onChange={this.handleInputChange}
//         onClick={this.login}/>
//         {/* <p>You must log in to view the page</p>
//         <button onClick={this.login}>Log in</button> */}
//       </div>
//     );
//   }
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

function App() {
  return (
    <LogInPage />
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

export default App;
