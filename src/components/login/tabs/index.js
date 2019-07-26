import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Login from '../index.js'
import Register from '../register.js'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {

    if(this.props.loggedin) {
     return <Redirect to='/events/'/>
  }
 
    return (
      <div>
        <div className='titlecont'>
          <h1>MyGeekCalender</h1>
          <p>Please login or register</p>
        </div>
        <div className='tabscont'>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
                Login
            </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                Register
            </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <Login />
                </Col>
              </Row>
            </TabPane>


            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <Register />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedin: state.user.loggedin
  }
}

export default connect(mapStateToProps, {})(Tabs)