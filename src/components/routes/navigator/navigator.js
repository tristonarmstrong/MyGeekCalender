import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import {
  NavLink as Navvy
} from 'react-router-dom'
import {connect} from 'react-redux'

class Navigator extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div
        style={
          {
            position: 'sticky',
            top: '0'
          }
        }
      >
        <Navbar color="light" light expand="md">
          <Navvy to='/'>
          <NavbarBrand>MyGeekCalender</NavbarBrand>
          </Navvy>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Navvy to='/events'>
                  <NavLink>Events</NavLink>
                </Navvy>
              </NavItem>
              <NavItem>
                {this.props.loggedin && <Navvy to='/reminders'>
                  <NavLink>reminders</NavLink>
                </Navvy>}
                {!this.props.loggedin && <Navvy to='/user/login'>
                  <NavLink>Login</NavLink>
                  </Navvy>}
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Navvy to='/user/logout'>
                      <NavLink >Logout</NavLink>
                    </Navvy>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedin: state.user.loggedin
  }
}

export default connect(mapStateToProps, {})(Navigator)