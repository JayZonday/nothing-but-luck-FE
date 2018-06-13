import React from 'react';
import {connect} from 'react-redux'
import { register } from '../actions/loginActions'
import PropTypes from 'prop-types'

class RegisterForm extends React.Component{

  state = {
    username: "",
    password: ""
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.register(this.state.username, this.state.password);
  }


  render() {

    return (
      <div className="login-form">
        <h1>Join The NBL Squad!</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" onChange={this.onChange} value={this.state.username}></input>
            <br />
            <br />
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" onChange={this.onChange} value={this.state.password}></input>
            <br />
            <br />
            <button type='submit'>Sign-Up!</button>
          </div>
          </form>
        </div>
      </div>
    );
  }
}




export default connect(null,{register})(RegisterForm)
