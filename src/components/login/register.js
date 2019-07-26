import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {connect} from 'react-redux'
import {registerUser} from '../../actions/actions'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

//========================
// not currently functional
//========================

class Register extends React.Component {

state={
  firstname: '',
  lastname: '',
  email: '',
  username: '',
  password: ''
}

handleChange = (e) => {
  this.setState({
    ...this.state,
    [e.target.name]: e.target.value
  })
}

submitForm = (e) => {
  e.preventDefault()
  this.props.registerUser({
    email: this.state.email,
    username: this.state.username,
    password: this.state.password,
    name: `${this.state.firstname} ${this.state.lastname}`,
    role: 'user'
  })
}

  render() {
    return (
      <Form onSubmit={e=> this.submitForm(e)} className='form' inline={false}>
        <FormGroup>
          <Label for="FirstName" hidden>FirstName</Label>
          <Input onChange={e => this.handleChange(e)} value={this.state.firstname} type="firstname" name="firstname" id="FirstName" placeholder="FirstName" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="LastName" hidden>LastName</Label>
          <Input onChange={e => this.handleChange(e)} value={this.state.lastname} type="lastname" name="lastname" id="LastName" placeholder="LastName" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="Email" hidden>Email</Label>
          <Input onChange={e => this.handleChange(e)} value={this.state.email} type="email" name="email" id="Email" placeholder="Email" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="Username" hidden>Username</Label>
          <Input onChange={e => this.handleChange(e)} value={this.state.username} type="username" name="username" id="Username" placeholder="Username" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="Password" hidden>Password</Label>
          <Input onChange={e => this.handleChange(e)} value={this.state.password} type="password" name="password" id="Password" placeholder="Password" />
        </FormGroup>
        {' '}
        <Button className='button'>Submit</Button>
      </Form>
    );
  }
}

export default connect(null , {registerUser})(Register)

