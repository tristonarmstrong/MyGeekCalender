import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import {login} from '../../actions/actions'
import {connect} from 'react-redux'

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChanges = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  submitForm = (e) => {
    e.preventDefault()
    this.props.login(this.state)
  }


  render() {
    return (
      <Form onSubmit={e => this.submitForm(e)}className='form' inline={false}>
        <FormGroup>
          <Label for="Email" hidden>Email</Label>
          <Input onChange={e => this.handleChanges(e)} type="email" name="email" id="Email" placeholder="Email" value={this.state.email}/>
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="Password" hidden>Password</Label>
          <Input onChange={e => this.handleChanges(e)} type="password" name="password" id="Password" placeholder="Password" value={this.state.password}/>
        </FormGroup>
        {' '}
        <Button className='button'>Submit</Button>
        {this.props.error && <Alert color="danger">Incorrect Email or Password!</Alert>}
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
error: state.error
  }
}

export default connect(mapStateToProps, {login})(Login)