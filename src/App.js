import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

//default imports
import Logout from './components/login/logout'
//name imports 
import { login } from './actions/actions'
import { connect } from 'react-redux'

//component imports
import Tabs from './components/login/tabs'
import MoviesTable from './components/routes/movies/moviesList'
import UserMovies from './components/routes/userMovies/userMovies'
import Navigator from './components/routes/navigator/navigator'
import Sidebar from './components/routes/navigator/sidebar'



class App extends React.Component {


  componentDidMount() {
    if (localStorage.getItem('userToken')) {
      this.props.login({ username: localStorage.getItem('user'), token: localStorage.getItem('userToken') }, '/token')
    }
  }

  render() {
    return (
      <div>
        <Route path="/" component={Navigator} />
        <Route path="/user" component={Tabs} />
        <div
          style={{
            display: 'flex'
          }}
        >
          <Route path="/events" render={props => <>
            <Sidebar {...props} />
            <MoviesTable {...props} />
          </>}
          />
        </div>

        <Route path="/reminders" component={UserMovies} />
        <Route path="/user/logout" component={Logout} />

        <Route path="/" exact render={props => (<div style={{ margin: '35vh auto', textAlign: 'center' }}>
          {!this.props.loggedin && <h1>Sign in to admin, or register</h1>}
          {this.props.loggedin && <h1>Welcome {this.props.name}</h1>}
          <p><strong>email: </strong>admin.00@admin.com</p>
          <p><strong>password: </strong>password</p>
          <h3>Goals</h3>
          <ul>
            <li>Table filters</li>
            <li>Number of events dropdown</li>
            <li>User dashboard</li>
            <li>Admin dashboard</li>
            <li>Crud routes for admin</li>
            <li>landing page</li>
          </ul>
        </div>)} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedin: state.user.loggedin,
    name: state.user.name
  }
}

export default connect(mapStateToProps, { login })(App);
