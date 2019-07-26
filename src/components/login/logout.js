import React from 'react';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../../actions/actions'


class Logout extends React.Component {

  componentDidMount(){
      this.props.logout()
  }

  render() {
    return (
      <Redirect to='/user/login'/>
    );
  }
}


export default connect(null, {logout})(Logout)