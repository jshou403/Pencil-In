import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, withRouter } from 'react-router-dom';
// import LogIn from './pages/LogIn';
import ParentHome from './pages/ParentHome';
import TeacherHome from './pages/TeacherHome';
import './utils/sketchy-bootswatch.css';

// temp auth
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  }
}

// temp pages to display
// const PublicPage = () => <h3>This is the Public Page</h3>
// const ParentPage = () => <h3>This is the Parent Page</h3>

// 
class LogIn extends Component {

  state = {
    redirectToReferrer: false
  }

  // login method which calls fakeAuth.authenticate
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }

  render() {

    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div>
        <p>You must log in to view the page</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

// Checks if the user is authenticated, if they are,
// it renders the "component" prop. If not, it redirects
// the user to /login.
const ParentRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)

const TeacherRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
))

export default function AuthTest() {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li><Link to="/login">Public Page</Link></li>
          <li><Link to="/parent">Parent Page</Link></li>
          <li><Link to="/teacher">Teacher Page</Link></li>
        </ul>
        <Route path="/login" component={LogIn} />
        <ParentRoute path='/parent' component={ParentHome} />
        <TeacherRoute path='/teacher' component={TeacherHome} />
      </div>
    </Router>
  )
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

// export default App;
